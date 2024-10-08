import ImageTooltip from "./ImageTooltip";
import { BackgroundGradient } from "./ui/background-gradient";

const NameSection = () => {
  return (
    <div className="z-40 mt-[4rem] sm:mt-[2rem] md:mt-[4rem]">
      <div className="flex-col md:flex-row flex  gap-12 md:gap-60">
        <div className="flex justify-center p-4 items-center text-black dark:text-white text-2xl md:text-8xl font-lato font-thin">
          HI I AM KRISH
        </div>
        <div className="flex justify-center p-4 items-center text-white text-7xl font-lato font-thin">
          <ImageTooltip content="Handomse man">
            {/* <BackgroundGradient className="rounded-full relative"> */}
            {/* <div className="absolute w-[25rem] inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full" /> */}
            <img
              src="/krish.jpg"
              alt="krish"
              className="w-40 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-move bg-[length:200%_200%]  border-4 md:w-[25rem] rounded-full  aspect-[1] p-2 object-cover"
            />
            {/* </BackgroundGradient> */}
          </ImageTooltip>
        </div>
      </div>
      <div className="my-12 h-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-move bg-[length:200%_200%]"></div>
      {/* <div className="m-12">
        <BackgroundGradient className=" m-[0.1px]" />
      </div> */}
    </div>
  );
};

export default NameSection;
