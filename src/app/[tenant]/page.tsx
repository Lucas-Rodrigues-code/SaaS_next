"use client";
import "../globals.css";
//components
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import SearchInput from "../components/SearchInput";
//utils
import { getTenantResponse, useApi } from "../libs/useApi";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    tenant: string;
  };
};
export default function Home({ params }: Props) {
  const router = useRouter();

  const api = useApi();

  const tenant= /* await  */ api.getTenant(
    params.tenant
  );
  
  

  if (tenant === false) {
    router.push("/");
    return
  }
 
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
              <div className="h-0.5 bg-yellow-500" style={{background:tenant.secondColor}}></div>
              <div className="h-0.5 bg-yellow-500" style={{background:tenant.secondColor}}></div>
              <div className="h-0.5 bg-yellow-500" style={{background:tenant.secondColor}}></div>
            </div>
          </div>
        </div>
        <div className="">
          <SearchInput mainColor={tenant.mainColor} onSearch={handleOnSearch} />
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
          mainColor={tenant.mainColor}
          secondColor={tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor={tenant.mainColor}
          secondColor={tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 3,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor={tenant.mainColor}
          secondColor={tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 4,
            image: "/assets/Imgs/burguer.png",
            categoryName: "Tradicional",
            name: "Texas Burguer",
            price: "R$ 25,50",
          }}
          mainColor={tenant.mainColor}
          secondColor={tenant.secondColor}
        />
      </div>
    </div>
  );
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();
  const tenant =  await  api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      tenant,
    },
  };
}; */
