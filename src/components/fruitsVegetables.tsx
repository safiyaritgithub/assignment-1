import { ProductCard } from "./productCard";

const data=[
  {id:0, img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__1.webp",name:"Dried Mango",price:"$500"},
  {id:1, img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__2.webp",name:"Crunchy Crisps",price:"$300"},
  {id:2, img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__3.webp",name:"Jewel Cranberries",price:"$400"},
  {id:3, img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__4.webp",name:"Almond organic",price:"$100"},

]


export const FruitsVegetables = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
     <h3 className="text-2xl font-medium"> fruitsVegetables</h3>
     <p className="text-gray-600 mt-2">Buy farm fresh fruits and vegetables online at the best prices </p>
        </div>
  <div className="space-x-4 mt-8 flex justify-center items-center lg:mt-0">
    <button className="fruits-btn">Fruits</button>
    <p className="hover:text-green">Vegetables</p>
    <p className="hover:text-green">Bread & Bakery</p>
  </div>
      </div>

      <div className="pt-8 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div>
          <img src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/feature__1.webp" alt="banner" 
          />
        </div>
      
        {data.map(ele => <ProductCard key={ele.id} img={ele.img} name={ele.name} price={ele.price} />)}
      

      </div>





      </div>
  )
}
