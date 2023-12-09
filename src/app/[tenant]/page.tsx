"use client";
import "../globals.css";
//components
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import SearchInput from "../components/SearchInput";

export default function Home() {
  function handleOnSearch(searchValue: string) {
    console.log(searchValue);
  }
  return (
    <div className="">
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
          <SearchInput mainColor={"#fb9400"} onSearch={handleOnSearch} />
        </div>
      </header>

      <Banner />
      <div className="grid grid-cols-2 gap-6 mx-6">
        <ProductItem
          data={{
            id: 1,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor="#fb9400"
          secondColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor="#fb9400"
          secondColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor="#fb9400"
          secondColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor="#fb9400"
          secondColor="#fb9400"
        />
      </div>
    </div>
  );
}
