import { Category } from "./components/category";
import { FruitsVegetables } from "./components/fruitsVegetables";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Breakfast } from "./components/breakfast";
import { LongCard } from "./components/longCard";
import { Blog } from "./components/blog";
import { NewsLetter } from "./components/newsLetter";
import { Shipping } from "./components/shipping";
import { Footer } from "./components/footer";







function App() {
  return (
    <>
    <main className="app max-w-[1200px] mx-auto">
<Navbar/>
<Hero/>
<Category/>
<FruitsVegetables/>
<Breakfast/>
<LongCard/>
<Blog/>
<NewsLetter/>
<Shipping/>
<Footer/>
      
</main>
    </>
    
  );
}

export default App;