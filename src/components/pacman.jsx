import React from "react";

export const Pacman = () => {
  return (
    <div className="flex gap-10 md:gap-20 justify-between p-4 mt-20">
      {/* <motion.img
          className="w-4 md:w-8"
          src="/pacman.png"
          initial={{ x: -100, scale: 0.5 }}
          animate={{
            x: [0, 100],
            scale: [1, 0.5, 1],
            transition: { duration: 3, repeat: Infinity },
          }}
        /> */}
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
    </div>
  );
};

export const PacmanY = () => {
  return (
    <div className="hidden md:flex md:flex-col gap-20 justify-between p-4 mt-20">
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
      <img src="/pacman.png" className="w-4 md:w-8 animate-spin " />
    </div>
  );
};
