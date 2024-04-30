
import { Header } from "@/header/header";
import { Banner } from "./components/banner/banner";


export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <div className="container flex ">
         <div className="w-[20%]">
          Katalog
         </div>
         <div className="w-[70%]">
         <Banner/>
         </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
