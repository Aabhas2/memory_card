import React from 'react'
import Card from './Card'

function CardGrid({cards,handleClick}) {
    return ( 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 max-w-6xl mx-auto perspective-[1000px]">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}

export default CardGrid
