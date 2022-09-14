import React from "react";
import Bottom from "./Bottom";
import DashboardHeader from "./DashboardHeader";
import product from "../images/Frame.png";
import { BsArrowLeft } from "react-icons/bs";

const Product = (props) => {
  const style = {
    width: props.progress + "%",
  };
  return (
    <div>
      <DashboardHeader />
      <hr className="border-1 border-gray-300" />
      <div className="mt-4 lg:mt-16 mx-4 md:mx-20 lg:mx-28 ">
        <BsArrowLeft className="inline w-7 h-7" />
        <span className="font-bold text-lg ml-5">Back to dashboard</span>
        <header className="font-semibold text-5xl my-5">
          Fendi black anchor heels
        </header>
        <div className="flex justify-between gap-8">
          <div className="grow bg-black">
            <img src={product} alt="" className="w-full h-[42rem]" />
          </div>
          <div className="bg-white rounded shadow-md relative hover:shadow-lg p-3 w-2/6 grow-0">
            <span className="m-8 mt-6">
              <span class="font-bold text-lg mt-4">N5,000 </span>
              <span className="font-small">raised out of N15,000</span>
            </span>
            <div className="ml-8 mr-8 mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={style}
                ></div>
              </div>
              <div>4/5 donation</div>
            </div>
          </div>
        </div>
      </div>
        <div className="mx-20 my-8 p-7 w-3/5">
          <div>
            <span className="pt-8 w-2/3 font-bold text-lg">
              Product description
            </span>
            <span className="block">
              Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at. Sed porttitor lectus nibh. Vivamus
              magna justo, lacinia eget consectetur sed, convallis at tellus.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Donec
            </span>
          </div>
          <div className="mt-5">
            <span className="font-bold text-lg">Seller Info</span>
            <span className="block">The joyous designer </span>
          </div>
        </div>
      <Bottom />
    </div>
  );
};

export default Product;
