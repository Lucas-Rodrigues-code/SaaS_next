import "../globals.css";
//components
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="bg-pink-100">
      <header className="bg-#f9f9fb pt-11 pr-6 pl-6 pb-7">
        <div className="flex justify-between justify-items-center">
          <div>
            <div className="font-medium text-2xl text-#1b1b1b mb-2">
              Seja Bem-Vindo (a) 👋
            </div>
            <div className="font-normal text-base text-gray-600 opacity-80 mb-7">
              O que deseja para hoje?
            </div>
          </div>
          <div>
            <div className="w-5 h-4 flex flex-col justify-between">
              <div className="h-0.5 bg-yellow-500"></div>
              <div className="h-0.5 bg-yellow-500"></div>
              <div className="h-0.5 bg-yellow-500"></div>
            </div>
          </div>
        </div>

        <div className="">
          <SearchInput/>
        </div>
      </header>
    </div>
  );
}
