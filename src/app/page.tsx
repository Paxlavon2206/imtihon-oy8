
import { Header } from "@/header/header";
import { Banner } from "./components/banner/banner";
import { Catalog } from "./components/catalog/catalog";


export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <div className="container">
         <Catalog/>
         <Banner/>
        </div>
      </main>
    </div>
  );
}
