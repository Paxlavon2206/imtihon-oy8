import { Profile } from "../../public/profile";
import { Search } from "../../public/search";
import { Tune } from "../../public/tune";
import { Button } from "./components/reasuble-btn/button";
import { Input } from "./components/reasuble-input/input";



export default function Home() {
  return (
    <div>
      <header className="pt-6 flex justify-center items-center">
        <div className="mr-[44px]">
         <a href="/">
         <img className="w-[116px]" src="/mobilux_logo.png" alt="img" />
         </a>
        </div>
        <form className="flex relative items-center mr-6">
          <div className="absolute pl-4"><Search/></div>
          <Input className="border border-inputB outline-inputB pl-12 py-3 pr-[500px] rounded-l-[6px]" placeholder="Qidirish"/>
          <div className="bg-inputB py-[7px] rounded-r-[6px] px-6 cursor-pointer"><Tune/></div>
        </form>
       <div className="flex items-center bg-greyBg py-2 px-2 rounded-[2px] mr-5">
       <div className="navbar flex">
       <select className="text-inputB bg-greyBg outline-none"  name="language" id="lang">
          <option value="Uz">Uz</option>
          <option value="Ru">Ru</option>
          <option value="En">En</option>
        </select>
       </div>
       </div>
       <div className="flex">
       <img className="mr-6" src="/notification.png" alt="img" />
       <Button className="flex gap-3">Kirish <Profile/> </Button>
       </div>
      </header>
    </div>
  );
}
