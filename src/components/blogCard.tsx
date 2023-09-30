
interface propsType {
  img: string;
  title: string;
  date: string;
  comment: number;

}

export const BlogCard:React.FC<propsType> = ({img,title,date,comment}) => {
  return (
    <div className="space-y-4">
      <img src={img} alt="post" className="rounded-lg hover:scale-105 transition-transform"/>
      <div className="text-green font-medium">
        <span>{date}</span>
        <span>{comment}</span>

      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}
