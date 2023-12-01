export default function SearchInput(){
return (
    <div className="bg-#fff px-1.5 py-1.5 flex">
        <div className="bg-red-500 w-12 h-12 rounded-md"></div>
        <input className="border-0 outline-none w-full flex-1 h-12 font-normal text-base ml-3 rounded-md " type="text" placeholder="Digite o nome do produto"/>
    </div>
)
}