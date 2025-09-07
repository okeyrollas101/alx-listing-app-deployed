export interface CardProps {
    title: string
    description: string
    imageUrl: string
    price: number
}

export interface ButtonProps {
    children: React.ReactNode
    label?: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
    type?: "button" | "submit" | "reset";
}


export interface PROPERTYLISTINGSAMPLEProps {
    id: number
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
}

export interface PropertyCardProps {
    property : PropertyProps,
    key: string | number,
}

export interface PropertyDetailProps {
    property: PropertyProps
}

export interface PropertyProps {
  id?: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
  description?: string;
}

export interface BookingDetails {
  propertyName?: string;
  checkin: string;
  checkout: string;
  totalNights: number;
  pricePerNight: number;
  bookingFee: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  payment: {
    cardNumber: string;
    expiry: string;
    cvv: string;
  };
}

export interface BookingDetailsProps {
  bookingDetails: BookingDetails;
}