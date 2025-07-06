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