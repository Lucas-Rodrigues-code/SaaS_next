"use client";
import "../globals.css";
//components
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import SearchInput from "../components/SearchInput";
//utils
import { getTenantResponse, useApi } from "../libs/useApi";
import { useRouter } from "next/navigation";
import { useAppContext } from "../contexts/AppContexts";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";

type Props = {
  params: {
    tenant: string;
  };
};
export default function Home({ params }: Props) {
  const router = useRouter();

  const api = useApi(params.tenant as string);

  const tenant = api.getTenant();

  const [products, setProducts] = useState<Product[]>(api.getAllProducts());

  if (tenant === false) {
    router.push("/");
    return;
  }

  const { tenant: tenantContext, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(tenant);
  }, []);

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
              <div
                className="h-0.5 bg-yellow-500"
                style={{ background: tenantContext?.secondColor }}
              ></div>
              <div
                className="h-0.5 bg-yellow-500"
                style={{ background: tenantContext?.secondColor }}
              ></div>
              <div
                className="h-0.5 bg-yellow-500"
                style={{ background: tenantContext?.secondColor }}
              ></div>
            </div>
          </div>
        </div>
        <div className="">
          <SearchInput onSearch={handleOnSearch} />
        </div>
      </header>

      <Banner />
      <div className="grid grid-cols-2 gap-6 mx-6">
        {products.map((product, index) => {
          return <ProductItem key={index} data={product} />;
        })}
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
