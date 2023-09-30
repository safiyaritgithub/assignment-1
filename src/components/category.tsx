import { CategoryCard } from "./categoryCard"

const data =[

  {
    id:0,
    name:"Fresh Fruits",
    count:"9 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__1.webp",
  },
  {
    id:1,
    name:"Fresh vegs",
    count:"8 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__2.webp",
  },
  {
    id:2,

    name:"Canned goods",
    count:"10 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__3.webp",
  },
  {
    id:3,

    name:"Bread & Bakery",
    count:"12 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__4.webp",
  },
  {
    id:4,

    name:"Fishes",
    count:"15 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__5.webp",
  },
  {
    id:5,

    name:"Eggs & Dairy",
    count:"9 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__6.webp",
  },
  {
    id:6,

    name:"Soft Drinks",
    count:"5 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__7.webp",
  },
  {
    id:7,

    name:"Fresh Fruits",
    count:"6 products",
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__1.webp",
  },
]
  




export const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
     { data.map(el => <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count} />)}
       
      </div>
    </div>
  )
}
