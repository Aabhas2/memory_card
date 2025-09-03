import React from 'react'

function Card({id,name,image,onClick}) {
    return (
        <div 
            className="group relative h-[280px] w-full cursor-pointer transform-gpu transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
            onClick={() => onClick(id)}
        >
            {/* Front of card */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="h-full rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-600 p-1">
                    <div className="h-full w-full rounded-xl bg-white p-4 flex flex-col items-center justify-center gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 shadow-inner w-full h-48 flex items-center justify-center">
                            <img 
                                src={image} 
                                alt={name} 
                                className="w-36 h-36 object-contain transform transition-transform group-hover:scale-110"
                            />
                        </div>
                        <p className="text-center text-lg font-semibold text-gray-700 capitalize">
                            {name}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Back of card */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="h-full rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-1">
                    <div className="h-full w-full rounded-xl bg-white flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card
