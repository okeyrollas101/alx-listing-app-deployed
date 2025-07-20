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
}

export interface PROPERTYLISTINGSAMPLEProps {
    name: string;
    image: string;
    price: number;
    rating: number;
}

export interface PropertyProps {
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
}