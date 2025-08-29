import { PropertyDetailProps } from "@/interfaces";

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">{property.name}</h1>
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover mb-4" />
      <p className="text-gray-600 mb-4">{property.category}</p>
      <div className="flex justify-between items-center mb-4">
        <p>Price: ${property.price}</p>
        <p>{property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyDetail
