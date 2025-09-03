import React, { useEffect, useState } from 'react'
import CardGrid from './components/CardGrid';
import Scoreboard from './components/Scoreboard';

const App = () => {

    const [cards,setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        async function fetchCards() { 
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
            const data = await response.json();
            const formattedCards = data.results.map((pokemon,index) => ({
                id: index,
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            }));
            setCards(formattedCards);
        }
        fetchCards();
    })

    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    function handleCardClick(id) {
        if (clickedCards.includes(id)) {
            // Wrong move -> reset 
            setScore(0);
            setClickedCards([]);
        } else {
            // Correct -> increase score 
            const newScore = score + 1; 
            setScore(newScore) 
            setClickedCards([...clickedCards, id])
            if (newScore > bestScore){
                setBestScore(newScore);
            }
        }
        // Always shuffle cards 
        setCards(shuffleArray(cards));
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400 via-teal-500 to-indigo-600 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                        Pokémon Memory
                    </span>
                </h1>
                <Scoreboard score={score} bestScore={bestScore} />
                <CardGrid cards={cards} handleClick={handleCardClick} />
            </div>
        </div>
    );
}

export default App
