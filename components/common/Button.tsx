import React from "react"

interface ButtonProps {
    children: React.ReactNode
    label?: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({}) => {
    return (
       <button className="">

       </button>
    )
}
export default Button