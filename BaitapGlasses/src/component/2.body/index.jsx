import { useState } from "react";
import dataGlasses from "./dataGlasses.json";
import Glasses from "./Glasses";
import ShowUp from "./ShowUp";

const ChangeGlasses = () => {
  const [listGlasses] = useState(dataGlasses)

  // Lấy 1 loại kính
  const [currentGlasses, setCurrentGlasses] = useState(null)

  // Lấy dữ liệu từ con sang cha
  const getInfoFromGlasses = (selectedGlasses) => {
    setCurrentGlasses(selectedGlasses)
  }

  // Render tất cả kính ra UI
  const renderGlassesUI = () => {
    return listGlasses.map((glasses) => {
      return (
        <Glasses key={glasses.id} glassesProp={glasses} onSelectedGlasses={getInfoFromGlasses} />
      )
    })
  }

  // Khi bấm nút Reset
  const handleResetGlasses = () => {
    setCurrentGlasses(null)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <img src="./img/model.jpg" alt="model" className="w-[300px] relative" />

      {currentGlasses && (
        <ShowUp key={currentGlasses.id} glassesProp={currentGlasses} />
      )}

      <div className="bg-blue-100 backdrop-blur-md rounded-2xl shadow-lg p-6 w-fit mx-auto flex flex-wrap justify-center gap-5 border border-gray-200">
        {/* Gọi hàm vì mới vào là show hết */}
        {renderGlassesUI()}

        {/* Thêm nút Reset để trả về không có kính, giúp cho UI tốt hơn thay vì phải F5 */}
        <button
          className="flex items-center justify-center p-2 bg-red-400 text-white font-semibold rounded-xl shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 w-25 h-20"
          onClick={() => handleResetGlasses()}>
          Reset
        </button>
      </div>
    </div >
  )
}

export default ChangeGlasses;
