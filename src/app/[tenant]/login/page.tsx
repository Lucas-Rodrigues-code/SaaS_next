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
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  if (!tenantContext) {
    return <div>...</div>;
  }
  return (
    <div className="bg-#fff pt-12" style={{padding:"50px 24px"}}>
      <Head>
        <title>Login | {tenantContext?.name}</title>
      </Head>
      <Header
        color={tenantContext?.mainColor}
        backHref={`/${tenantContext?.slug}`}
      />
      <InputField
        color={tenantContext.mainColor}
        placeHolder="Digite seu e-mail"
        value={email}
        onChange={setEmail}
      />
      <InputField
        color={tenantContext.mainColor}
        placeHolder="Digite sua senha"
        value={password}
        onChange={setPassword}
        password
      />
      <Button
        color={tenantContext.mainColor}
        label="Entrar"
        onClick={handleSubmit}
        fill
      />
       <Button
        color={tenantContext.mainColor}
        label="Entrar"
        onClick={handleSubmit}
       
      />
    </div>
  );
}
