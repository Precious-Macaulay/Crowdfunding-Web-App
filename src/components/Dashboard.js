import React from "react";
import Bottom from "./Bottom";
import DashboardHeader from "./DashboardHeader";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <hr className="border-1 border-gray-300" />
      <div class="mt-4 lg:mt-16 mx-4 md:mx-20 lg:mx-28 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard progress={80} />
        <ProductCard progress={80} />
        <ProductCard progress={80} />
        <ProductCard progress={80} />
        <ProductCard progress={80} />
        <ProductCard progress={80} />
      </div>
      <Bottom />
    </div>
  );
};

export default Dashboard;
