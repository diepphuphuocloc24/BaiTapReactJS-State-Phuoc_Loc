import React from 'react'

const ShowUp = ({ glassesProp }) => {
    return (
        <div>
            <img
                src={glassesProp.url}
                alt={glassesProp.name}
                className="w-[180px] absolute top-61 right-146 opacity-80"
            />

            <div className="absolute bottom-23 right-131 bg-orange-400 opacity-70 p-1 w-[300px]">
                <h2 className="text-indigo-700 text-2xl font-bold mb-2">
                    {glassesProp.name}
                </h2>
                <p className="text-white text-md">
                    {glassesProp.desc}
                </p>
            </div>
        </div>
    )
}

export default ShowUp
