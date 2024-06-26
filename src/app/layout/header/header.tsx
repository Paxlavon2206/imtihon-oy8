import { HeaderLogo } from "../../../../public/icons/header-logo";
import { Notification } from "../../../../public/icons/notification";
import { Profile } from "../../../../public/icons/profile";
import { Search } from "../../../../public/icons/search";
import { Tune } from "../../../../public/icons/tune";
import { Button } from "../../components/reasuble-btn/button";
import { Input } from "../../components/reasuble-input/input";
export const Header = () => {
  return (
    <div>
        <header className="container pt-6 flex justify-center items-center pb-[21px]">
        <div className="mr-[44px]">
         <div className="w-[100px]">
         <a href="/">
          <HeaderLogo/>
          </a>
         </div>
        </div>
        <form className="hidden md:flex  relative items-center mr-6">
          <div className="absolute pl-4">
            <Search />
          </div>
          <Input
            className=" border border-primary outline-primary bg-secondary pl-12 md:py-2 lg:py-3  md:pr-[150px] lg:pr-[300px] xl:pr-[500px] rounded-l-[6px]"
            placeholder="Qidirish"
          />
          <div className="bg-primary md:py-[3px] lg:py-[7px] rounded-r-[6px] px-6 cursor-pointer">
            <Tune />
          </div>
        </form>
        <div className="flex items-center md:bg-secondary py-2 px-2 rounded-[2px] mr-5">
          <div className="navbar flex">
            <select
              className="text-primary md:bg-secondary outline-none cursor-pointer"
              name="language"
              id="lang"
            >
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="En">En</option>
            </select>
          </div>
        </div>
        <div className="flex">
         <div  className="hidden lg:flex mr-6 cursor-pointer  text-black hover:text-green-600" ><Notification/></div>
          <Button className="flex mr-3">
            <p className=" hidden lg:flex hover:text-green-600">Kirish</p> {" "}
          </Button>
          <Button className="hover:scale-110 hover:text-green-600"><Profile /></Button>
        </div>
      </header>
    </div>
  )
}

