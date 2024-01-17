"use client";

//components

//utils
import { getTenantResponse, useApi } from "../../libs/useApi";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../contexts/AppContexts";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/app/components/Header";
import InputField from "@/app/components/InputField";
import { Button } from "@/app/components/Button";
import { RiMailSendFill } from "react-icons/ri";

type Props = {
  params: {
    tenant: string;
  };
};
export default function ForgetSuccess({ params }: Props) {
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

  function handleSubmit() {
    router.push(`/${tenantContext?.slug}/login`);
  }

  if (!tenantContext) {
    return <div>...</div>;
  }
  return (
    <div className="bg-#fff pt-12" style={{ padding: "50px 24px" }}>
      <Head>
        <title>Login | {tenantContext?.name}</title>
      </Head>
      <Header
        color={tenantContext?.mainColor}
        backHref={`/${tenantContext?.slug}/forget`}
      />
      <div
        className="flex justify-center"
        style={{ margin: "100px auto 53px auto" }}
      >
        <RiMailSendFill size={90} color={tenantContext.mainColor} />
      </div>
      <div className="font-semibold text-2xl text-center mb-8">
        Verifique seu e-mail
      </div>
      <div
        className="font-normal text-lg leading-5 text-center pb-10"
        style={{
          color: "rgba(27,27,27,0.8)",
          margin: "auto",
          width: "100%",
        }}
      >
        Enviamos as instruções para recuperação de senha para seu e-mail.
      </div>

      <div className="mt-14">
        <div className="mt-8 mb-8">
          <Button
            color={tenantContext.mainColor}
            label="Fazer login"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>
    </div>
  );
}
