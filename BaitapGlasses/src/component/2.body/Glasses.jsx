import React from 'react'

const Glasses = ({ glassesProp, onSelectedGlasses }) => {
    const handleChangeGlasses = () => {
        console.log(glassesProp);
        onSelectedGlasses(glassesProp)
    }

    return (
        <button
            className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20"
            onClick={() => handleChangeGlasses(glassesProp.id)}>
            <img src={glassesProp.pic} alt={glassesProp.name} className="w-16" />
        </button>
    )
}

export default Glasses
