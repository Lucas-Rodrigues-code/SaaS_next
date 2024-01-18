//libs

//types
import Link from "next/link";
import { Product } from "../../types/Product";
import { useAppContext } from "@/app/contexts/AppContexts";
import { useFormatter } from "@/app/libs/useFormatter";

type Props = {
  data: Product;
};
export default function ProductItem({ data }: Props) {
  const { tenant, setTenant } = useAppContext();
  const formatter = useFormatter();
  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-24" style={{ background: tenant?.secondColor }}></div>
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
          <div
            className="font-semibold text-base"
            style={{ color: tenant?.mainColor }}
          >
            {formatter.formatPrice(data.price)}
          </div>
        </div>
      </div>
    </Link>
  );
}
