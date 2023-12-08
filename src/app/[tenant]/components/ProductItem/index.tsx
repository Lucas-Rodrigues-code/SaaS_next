//libs

//types
import Link from "next/link";
import { Product } from "../../types/Product";

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;
};
export default function ProductItem({ data, mainColor, secondColor }: Props) {
  return (
    <Link href={`/burguer/product/${data.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-24" style={{ background: secondColor }}></div>
        <div className="p-3">
          <img
            className="w-full h-auto mt-[-90px]"
            src={data.image}
            alt="burguer"
          />
          <div className="text-[#1b1b1b] font-medium text-xs">
            {data.categoryName}
          </div>
          <div className="text-[#1b1b1b] text-lg font-bold">{data.name}</div>
          <div className="font-semibold text-base" style={{ color: mainColor }}>
            R$ 25,50
          </div>
        </div>
      </div>
    </Link>
  );
}
