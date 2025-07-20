import React from "react"
import { CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({title, description, imageUrl, price}) => {
    return (
       <div className="flex flex-col h-screen">
          <main>
             <h1>Title: {title}</h1>
             <p>{description}</p>
             <p>View image: {imageUrl}</p>
             <h3>Price: {price}</h3>
          </main>
       </div>
    )
}
export default Card