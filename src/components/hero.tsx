import {BsArrowRight} from "react-icons/bs"


export const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img src='https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__1.webp' alt="hero1" className="w-full h-full object-cover rounded-lg bg-no-repeat"/>

          <div className="absolute max-w-[470px] sm:ml-16 top-[50%] ml-8 -translate-y-[50%] sm:space-y-4  ">
        <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
        <h2 className="text-2xl md:text-6xl font-bold sm:text-4xl ">Dried Fruits Best Quality</h2>
        <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
        <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">$18.36</div>
        <div>
          <button className="bg-Darkgreen hover:bg-green  text-white border w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3  cursor-pointer">Shop Now <BsArrowRight/></button>
        </div> 
          </div>
        </div>
      <div className="relative">
        <img src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__2.webp" alt="hero2" className="w-full h-full object-cover rounded-lg bg-no-repeat"/>

        <div className="absolute sm:ml-16 top-[50%] -translate-y-[50%] max-w-[470px] ml-8 sm:space-y-1 ">
        <h2 className="text-2xl  font-bold sm:text-3xl "> Best Yummy Pizza </h2>
        <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
        <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">$25</div>
        <div className="relative mb-3">
          <button className="bg-Darkgreen hover:bg-green  text-white border w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-3 sm:py-2  cursor-pointer">Shop Now <BsArrowRight/></button>
        </div> 
        </div>
      </div>

      <div className="relative">
        <img src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__3.webp" alt="hero2" className="w-full h-full object-cover rounded-lg bg-no-repeat"/>

        <div className="absolute sm:ml-16 top-[50%] -translate-y-[50%] max-w-[470px] ml-8 sm:space-y-1  ">
        <h2 className="text-2xl   font-bold sm:text-3xl  "> Best Yummy chips </h2>
        <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
        <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">$10</div>
        <div className="relative mb-3">
          <button className="bg-Darkgreen hover:bg-green  text-white border w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-3 sm:py-2  cursor-pointer">Shop Now <BsArrowRight/></button>
        </div> 
        </div>
      </div>



      </div>
    </div>
  )
}
