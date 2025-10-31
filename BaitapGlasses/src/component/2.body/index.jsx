import { useState } from "react";
import dataGlasses from "./dataGlasses.json";

const ChangeGlasses = () => {
  // Array nhiều kính
  const [glassesList] = useState(dataGlasses);

  // Cần lấy 1 kính ra để đeo
  const [currentGlasses, setCurrentGlasses] = useState(null);

  const handleChangeGlasses = (glasses) => {
    setCurrentGlasses(glasses);
  };

  const handleResetGlasses = () => {
    setCurrentGlasses(null);
  };

  const renderListGlasses = () => {
    return glassesList.map((glasses) => {
      return (
        <button
          key={glasses.id}
          className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 w-25 h-20"
          onClick={() => handleChangeGlasses(glasses)}
        >
          <img src={glasses.pic} alt={glasses.name} className="w-16" />
        </button>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <img src="./img/model.jpg" alt="model" className="w-[300px] relative" />

      {currentGlasses && (
        <img
          src={currentGlasses.url}
          alt={currentGlasses.name}
          className="w-[180px] absolute top-61 opacity-80"
        />
      )}

      {currentGlasses && (
        <div className="absolute bottom-23 bg-orange-400 opacity-70 p-1 w-[300px]">
          <h2 className="text-indigo-700 text-2xl font-bold mb-2">
            {currentGlasses.name}
          </h2>
          <p className="text-white text-md mb-1">{currentGlasses.desc}</p>
        </div>
      )}

      <div className="bg-blue-100 backdrop-blur-md rounded-2xl shadow-lg p-6 w-fit mx-auto flex flex-wrap justify-center gap-5 border border-gray-200">
        {/* Gọi hàm */}
        {renderListGlasses()}

        <button
          className="flex items-center justify-center p-2 bg-red-400 text-white font-semibold rounded-xl shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 w-25 h-20"
          onClick={handleResetGlasses}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ChangeGlasses;
