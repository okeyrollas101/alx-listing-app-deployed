import React from "react";
import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{property.name}</h2>
            <p className="text-gray-600 mb-4">{property.description}</p>
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold">Price: ${property.price}</p>
                <p className="text-gray-600">{property.rating}</p>
            </div>
        </div>
    )
};

export default PropertyCard;

