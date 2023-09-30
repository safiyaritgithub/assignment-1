
import{LiaShippingFastSolid,LiaMoneyBillWaveSolid,LiaGiftSolid} from "react-icons/lia";
import{FiPhoneCall} from "react-icons/fi";
import { ShippingCard } from "./shippingCard";


const data =[
  {
    title:"Free Shipping",
    icon: <LiaShippingFastSolid/>
  },
  {
    title:"Best prize Guarantee",
    icon: <LiaMoneyBillWaveSolid/>
  },
  {
    title:"Free Curbside Pickup",
    icon: <LiaGiftSolid/>
  },
  {
    title:"Support 24/7",
    icon: <FiPhoneCall/>
  },
]




export const Shipping = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el)=>(
          <ShippingCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  )
}
