import React from "react";
import product from "../images/Frame.png";

const ProductCard = (props) => {
  const style = {
    width: props.progress + "%",
  };
  return (
    <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
      <img src={product} alt="" className="w-full h-80 sm:h-42 object-cover" />
      <div class="m-8">
        <span class="font-bold text-lg">Fendi black anchor heels</span>
        <span class="block text-gray-500 text-md">
          {/* product description*/}
          Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
          consectetur
        </span>
      </div>
      <span className="m-8 mt-6">
        <span class="font-bold text-lg mt-4">N5,000 </span>
        <span className="font-small">raised out of N15,000</span>
      </span>
      <div className="ml-8 mr-8 mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
          <div className="bg-blue-600 h-2.5 rounded-full" style={style}></div>
        </div>
        <div>4/5 donation</div>
      </div>
    </div>
  );
};

export default ProductCard;
