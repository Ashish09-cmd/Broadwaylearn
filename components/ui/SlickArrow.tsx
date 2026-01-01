import { Icon } from "@iconify/react";

export const PrevArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
     
      className="absolute -left-8 top-1/2 z-10 cursor-pointer -translate-y-1/2 
                 w-7.5 h-7.5 rounded-full bg-[#1E1E1E4D] text-white duration-200 shadow 
                 flex items-center justify-center hover:bg-gray-800  "
    aria-label="Previous Slide"
    >
    
      <Icon icon="material-symbols:chevron-left" className="text-xl" />
    </button>
  );
};

export const NextArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute -right-8 cursor-pointer top-1/2 z-10 -translate-y-1/2 
                 w-7.5 h-7.5 rounded-full bg-[#1E1E1E4D]  duration-200 shadow 
                 flex items-center justify-center text-white hover:bg-gray-800"
    aria-label="Next Slide"
    >
      <Icon icon="material-symbols:chevron-right" className="text-xl" />
    </button>
  );
};
