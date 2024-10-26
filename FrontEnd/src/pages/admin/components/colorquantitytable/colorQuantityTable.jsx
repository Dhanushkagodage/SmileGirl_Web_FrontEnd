import { useState } from "react";

function ColorQuantityTable({ onColorsChange }) {
  const [colors, setColors] = useState([]);
  
  const handleAddColor = (e) => {
    e.preventDefault();
    const newColors = [...colors, { color: "", quantities: Array(7).fill(0) }];
    setColors(newColors);
    onColorsChange(newColors);
  };


  const handleColorChange = (index, newColor) => {
    const newColors = [...colors];
    newColors[index].color = newColor;
    setColors(newColors);
    onColorsChange(newColors);
  };

  const handleQuantityChange = (colorIndex, sizeIndex, quantity) => {
    const newColors = [...colors];
    newColors[colorIndex].quantities[sizeIndex] = quantity;
    setColors(newColors);
    onColorsChange(newColors);
  };

  return (
    <div className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins ">
      <table className="min-w-full rounded-md  font-medium">
        <thead>
          <tr>
            <th className="text-center  border border-gray-300  py-2 w-[48px] sm:w-[68px] md:w-[88px] lg:w-[88px] xl:w-[88px] font-medium p-1" rowSpan="2">Color</th>
            <th className="text-center  border border-gray-300  py-2 font-medium" colSpan="7">Quantity</th>
          </tr>
          <tr>
            {["3", "4", "5", "6", "7", "8", "9"].map((size) => (
              <th key={size} className="text-center  border border-gray-300  py-2 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[80px] xl:w-[80px] font-medium bg-black text-white">{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colors.map((color, colorIndex) => (
            <tr key={colorIndex} className="text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] font-poppins font-medium">
              <td className="p-1 border border-gray-300">
                <input
                  type="text"
                  placeholder="Enter color"
                  value={color.color}
                  required
                  onChange={(e) => handleColorChange(colorIndex, e.target.value)}
                  className="text-center w-[40px] sm:w-[60px] md:w-[80px] lg:w-[80px] xl:w-[80px] p-1 border border-gray-300"
                />
              </td>
              {color.quantities.map((quantity, sizeIndex) => (
                <td key={sizeIndex} className=" text-center py-2 border border-gray-300">
                  <input
                    type="number"
                    min="0"
                    value={quantity}
                    required
                    onChange={(e) =>
                      handleQuantityChange(colorIndex, sizeIndex, e.target.value)
                    }
                    className="w-[20px] sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px] p-1 border border-gray-300 text-center"
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className="pt-4 border border-gray-300">
            <td colSpan="8" className=" text-left py-2 px-2">
              <button
               type="button" 
                onClick={handleAddColor}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] w-full"
              >
                + Add Color
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ColorQuantityTable;
