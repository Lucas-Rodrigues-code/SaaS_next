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

  const [email, setEmail] = useState("");

  function handleSubmit() {
    router.push(`/${tenantContext?.slug}/forget-success`);
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
        backHref={`/${tenantContext?.slug}/login`}
      />

      <div className="font-bold text-3xl mt-5 mb-10 text-center">
        {tenantContext.name}
      </div>
      <div className="font-semibold text-2xl text-center mb-8">
        Esqueceu sua senha ?
      </div>
      <div
        className="font-normal text-lg leading-5 text-center pb-10"
        style={{
          color: "rgba(27,27,27,0.8)",
          margin: "auto",
          width: "90%",
          borderBottom: "1.5px solid #000",
          position: "relative",
          borderBottomColor: tenantContext.mainColor,
        }}
      >
        Preencha o campo com seu e-mail e receba as instruções necessárias para
        redefinir a sua senha.
      </div>
      <div
        style={{ borderTop: "1.5px solid #e2e2e2", marginTop: "-1.5px " }}
      ></div>
      <div className="mt-14">
        <div className="mt-8">
          <InputField
            color={tenantContext.mainColor}
            placeHolder="Digite seu e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className="mt-8 mb-8">
          <Button
            color={tenantContext.mainColor}
            label="Enviar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>
    </div>
  );
}
