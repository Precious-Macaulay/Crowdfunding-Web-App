import anisha from "../images/anisha (2).png";

const Testimonials = () => {
  return (
    <div className="container testimonials bg-[#0865FF] mx-auto rounded-lg pb-2 mb-5">
      <div className="max-w-6xl px-5 mx-auto mt-32 items-center text-center">
        {/*Testimonials*/}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/*Testimonial1*/}
          <div
            className="flex items-start text-left p-6
space-y-6 rounded-lg md:w-1/3"
          >
            <div className=" rounded-full mt-7 mr-2 ">
              <img src={anisha} alt="" />
            </div>
            <div>
              <h5 className="text-white font-semibold">
                Sed porttitor lectus nibh the fatcnhdh
              </h5>
              <p className="text-sm text-white">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/*Testimonial2*/}
          <div
            className="flex items-start text-left p-6
space-y-6 rounded-lg md:w-1/3"
          >
            <div className=" rounded-full mt-7 mr-2 ">
              <img src={anisha} alt="" />
            </div>
            <div>
              <h5 className="text-white font-semibold">
                Sed porttitor lectus nibh the fatcnhdh
              </h5>
              <p className="text-sm text-white">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/*Testimonial3*/}
          <div
            className="flex items-start text-left p-6
space-y-6 rounded-lg md:w-1/3"
          >
            <div className=" rounded-full mt-7 mr-2 ">
              <img src={anisha} alt="" />
            </div>
            <div>
              <h5 className="text-white font-semibold">
                Sed porttitor lectus nibh the fatcnhdh
              </h5>
              <p className="text-sm text-white">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
        </div>
        <div className="block my-12">
          <a
            className="p-3 px-6 pt-2 rounded-md bg-white font-medium text-[#0865FF]
      baseline hover:bg-blue-400"
          >
            Get Started For Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
