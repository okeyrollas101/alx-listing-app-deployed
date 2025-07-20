import React from "react"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({children, label, onClick, variant}) => {
    return (
       <button onClick={onClick} className="bg-blue-500 text-white rounded-full">{children}</button>
    )
}
export default Button