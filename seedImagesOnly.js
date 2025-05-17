import admin from 'firebase-admin';
import serviceAccount from './service-account.json' assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const residentImages = [
  "https://img.freepik.com/free-photo/buildings-edge-river_1353-87.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/beautiful-pavement-houses-surrounded-by-grassy-fields-captured-gambia-africa_181624-8563.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/high-angle-view-cityscape-sunset_1048944-1495380.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/aerial-view-apartment-buildings_116348-111.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_181624-18618.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661457.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799723.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/modern-country-houses-construction_1385-16.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004067.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694017.jpg?ga=GA1.1.520480978.1746025442&semt=ais_hybrid&w=740"
];


async function seedImagesOnly() {
  for (let i = 0; i < residentImages.length; i++) {
    await db.collection('ResidentProperty').add({
      images: [residentImages[i]],
      type: "Resident"
    });
    console.log(`Added image document #${i + 1}`);
  }
  console.log('All images added!');
  process.exit(0);
}

seedImagesOnly().catch(console.error);
