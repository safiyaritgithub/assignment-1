import{LuMailOpen} from "react-icons/lu";

export const NewsLetter = () => {
  return (
    <div className="bg-Darkgreen mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4 ">
          <LuMailOpen className="text-[60px]"/>
          <div className="">
            <h3 className="text-xl sm:text-2xl font-semibold">Sign up To Our Newsletters</h3>
            <p>...and receive $20 coupon for first shopping</p>
          </div>
        </div>
     <div className="w-full max-w-[500px] relative">
      <input type="text" placeholder="Your Email Address..." className="border py-4 px-6 w-full rounded-full"/>
      <button className= " border bg-Darkgreen  py-2 px-4 rounded-full hover:bg-green absolute top-[50%] right-2 translate-y-[-50%]">Subscribe!</button>
     </div>


      </div>

    </div>
  )
}
