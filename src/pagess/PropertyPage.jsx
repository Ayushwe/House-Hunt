import PropertyList from "../componentss/PropertyList";
import PropertySearch from "../componentss/PropertySearch";
const PropertyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <PropertySearch />
    <PropertyList />
  </div>
  );
}

export default PropertyPage