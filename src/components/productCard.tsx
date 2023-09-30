
import {AiFillStar,AiOutlineShopping,AiOutlineStar} from "react-icons/ai"


interface propsType {
  img: string;
  name: string;
  price: string;
}



export const ProductCard :React.FC<propsType> = ({img,name,price}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 rounded-lg  hover:scale-105 transition-transform relative">
      <img src={img} alt={name}/>
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
        </div>
        <h3 className="font-medium">{name}</h3>
        <h1 className="font-medium text-2xl text-red-500">{price}</h1>
        <div className="absolute -top-4 right-2 bg-green text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping/>
        </div>

      </div>
    </div>

  )
}
