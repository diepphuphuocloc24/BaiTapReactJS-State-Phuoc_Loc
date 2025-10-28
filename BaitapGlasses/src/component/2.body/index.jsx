import { useState } from 'react'

const ChangeGlasses = () => {

    const [image, selectImg] = useState()

    // const handleChange1 = () => {
    //     selectImg("./img/v1.png")
    // }

    // const handleChange2 = () => {
    //     selectImg("./img/v2.png")
    // }

    // const handleChange3 = () => {
    //     selectImg("./img/v3.png")
    // }

    // const handleChange4 = () => {
    //     selectImg("./img/v4.png")
    // }

    // const handleChangeDefault = () => {
    //     selectImg()
    // }

    const handleChangeImage = (pic) => {
        selectImg(pic)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 py-10">
            <img src="./img/model.jpg" alt="model" className="w-[300px]" />

            <img src={image} className="w-[180px] absolute top-62 opacity-80" />

            <div className="bg-blue-100 backdrop-blur-md rounded-2xl shadow-lg p-6 w-fit mx-auto flex flex-wrap justify-center gap-5 border border-gray-200">
                <button
                    className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20" onClick={() => handleChangeImage("./img/v1.png")}
                >
                    <img src="./img/g1.jpg" alt="glasses-1" className="w-16" />
                </button>

                <button
                    className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20" onClick={() => handleChangeImage("./img/v2.png")}
                >
                    <img src="./img/g2.jpg" alt="glasses-2" className="w-16" />
                </button>

                <button
                    className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20" onClick={() => handleChangeImage("./img/v3.png")}
                >
                    <img src="./img/g3.jpg" alt="glasses-3" className="w-16" />
                </button>

                <button
                    className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20" onClick={() => handleChangeImage("./img/v4.png")}
                >
                    <img src="./img/g4.jpg" alt="glasses-4" className="w-16" />
                </button>

                <button
                    className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20" onClick={() => handleChangeImage()}
                >
                    <i class="fa-solid fa-circle-xmark text-rose-600 text-3xl"></i>
                </button>
            </div>
        </div>
    )
}

export default ChangeGlasses;
