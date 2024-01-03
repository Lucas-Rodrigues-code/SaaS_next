"use client";

//components

//utils
import { getTenantResponse, useApi } from "../../libs/useApi";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../contexts/AppContexts";
import { useEffect } from "react";
import Head from "next/head";
import Header from "@/app/components/Header";

type Props = {
  params: {
    tenant: string;
  };
};
export default function Login({ params }: Props) {
  const router = useRouter();

  const api = useApi();

  const tenant = /* await  */ api.getTenant(params.tenant);

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
  console.log(tenantContext, "tenantContext");
  if (!tenantContext) {
    return <div>...</div>;
  }
  return (
    <div className="bg-#fff pt-12">
      <Head>
        <title>Login | {tenantContext?.name}</title>
      </Head>
      <Header
        color={tenantContext?.mainColor}
        backHref={`/${tenantContext?.slug}`}
      />
    </div>
  );
}
