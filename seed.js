import admin from 'firebase-admin';
import { fakerEN_IN } from '@faker-js/faker';
import serviceAccount from './service-account.json' assert { type: "json" };

const faker = fakerEN_IN;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const listingsRef = db.collection('listings');

const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Surat'
];
const indianStates = [
  'Maharashtra', 'Delhi', 'Karnataka', 'Telangana', 'Gujarat', 'Tamil Nadu', 'West Bengal', 'Rajasthan'
];
const propertyTypes = ['Rent', 'Sale'];
const furnishingTypes = ['Furnished', 'Semi-Furnished', 'Unfurnished'];
const parkingOptions = ['Available', 'Not Available'];

const BATCH_SIZE = 500;
const TOTAL_DOCS = 1000;

async function seedData() {
  let batch = db.batch();

  for (let i = 0; i < TOTAL_DOCS; i++) {
    const docRef = listingsRef.doc();
    const bedrooms = faker.number.int({ min: 1, max: 5 });
    const sqft = faker.number.int({ min: 500, max: 5000 });
    const yearBuilt = faker.number.int({ min: 1990, max: 2024 });
    const type = faker.helpers.arrayElement(propertyTypes);
    const furnishing = faker.helpers.arrayElement(furnishingTypes);
    const parking = faker.helpers.arrayElement(parkingOptions);

    batch.set(docRef, {
      address: `${faker.location.streetAddress()}, ${faker.helpers.arrayElement(indianCities)}, ${faker.helpers.arrayElement(indianStates)}`,
      Price: faker.number.int({ min: 500000, max: 50000000 }),
      type,
      bedrooms,
      sqft,
      yearBuilt,
      forSaleBy: faker.person.fullName(),
      newConstruction: faker.datatype.boolean(),
      parking,
      furnishing,
      amenities: Array.from({ length: 5 }, () => faker.word.noun()),
      postedAt: admin.firestore.Timestamp.now(),
      images: Array.from({ length: 3 }, () => faker.image.urlPicsumPhotos({ width: 640, height: 480 }))
    });

    if ((i + 1) % BATCH_SIZE === 0) {
      await batch.commit();
      console.log(`Committed ${i + 1} documents`);
      batch = db.batch();
    }
  }

  if (TOTAL_DOCS % BATCH_SIZE !== 0) {
    await batch.commit();
    console.log('Final batch committed');
  }
}

seedData().catch(console.error);
