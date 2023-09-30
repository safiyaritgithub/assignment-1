import { BlogCard } from "./blogCard"

const data=[
  {
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__1.webp",
    title:"Healthy Food Healthy Life",
    date:"sep 29,2023",
    comment:8,
  },
  {
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__2.webp",
    title:"Healthy Food Healthy Life",
    date:"sep 25,2023",
    comment:1,
  },
  {
    img:"https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__3.webp",
    title:"Healthy Food Healthy Life",
    date:"sep 30,2023",
    comment:6,
  },
]



export const Blog = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">Present posts in a best way to highlight interesting moments of your blog.</p>
<div className="grid  sm:grid-cols-2 md:grid-cols-3  gap-8 pt-8">
  {data.map((el)=>(
  <BlogCard
  key={el.date} img={el.img} title={el.title} date={el.date} comment={el.comment}
   />

  )
    
  )}

</div>


    </div>
  )
}
