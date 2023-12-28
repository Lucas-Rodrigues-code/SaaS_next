"use client";
import { useAppContext } from "@/app/contexts/AppContexts";
//libs
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

//types
type Props = {
  onSearch: (searchValue: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { tenant, setTenant } = useAppContext();

  function handlKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      onSearch(searchValue);
    }
  }

  return (
    <div
      className="bg-#fff px-1.5 py-1.5 flex border border-white rounded-md"
      style={{ borderColor: focused ? tenant?.mainColor : "#fff" }}
    >
      <div
        className="bg-white w-12 h-12 rounded-md flex justify-center items-center"
        onClick={() => onSearch(searchValue)}
      >
        <CiSearch size={25} color={tenant?.mainColor} />
      </div>
      <input
        className="border-0 outline-none w-full flex-1 h-12 font-normal text-base ml-3 rounded-md "
        type="text"
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handlKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
