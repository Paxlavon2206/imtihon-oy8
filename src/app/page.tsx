import { Search } from "../../public/search";
import { Tune } from "../../public/tune";
import { Input } from "./components/reasuble-input/input";



export default function Home() {
  return (
    <div>
      <header className="container pt-6 flex items-center">
        <div className="mr-[44px]">
          <img src="/mobilux_logo.png" alt="img" />
        </div>
        <form className="flex relative items-center mr-5">
          <div className="absolute pl-4"><Search/></div>
          <Input className="border border-inputB outline-inputB pl-12 py-3 pr-[500px] rounded-l-[6px]" placeholder="Qidirish"/>
          <div className="bg-inputB py-[7px] rounded-r-[6px] px-6 cursor-pointer"><Tune/></div>
        </form>
       <div className="flex items-center bg-greyBg py-2 px-2 rounded-[2px]">
       <div className="navbar flex">
       <select className="text-inputB bg-greyBg"  name="language" id="lang">
          <option value="Uz">Uz</option>
          <option value="Ru">Ru</option>
          <option value="En">En</option>
        </select>
       </div>
       </div>
      </header>
    </div>
  );
}
