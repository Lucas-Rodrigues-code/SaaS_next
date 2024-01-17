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
import Link from "next/link";

type Props = {
  params: {
    tenant: string;
  };
};
export default function SignUp({ params }: Props) {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  function handleSignUp() {
    router.push(`/${tenantContext?.slug}/signUp`);
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
        backHref={`/${tenantContext?.slug}`}
      />
      <div className="font-bold text-3xl mt-5 mb-10 text-center">
        {tenantContext.name}
      </div>
      <div
        className="font-normal text-lg leading-5 text-center pb-10"
        style={{
          color: "rgba(27,27,27,0.8)",
          margin: "auto",
          width: "223px",
          borderBottom: "1.5px solid #000",
          position: "relative",
          borderBottomColor: tenantContext.mainColor,
        }}
      >
        Preencha os campos para criar o seu cadastro.
      </div>
      <div
        style={{ borderTop: "1.5px solid #e2e2e2", marginTop: "-1.5px " }}
      ></div>
      <div className="mt-14">
        <div className="mt-8">
          <InputField
            color={tenantContext.mainColor}
            placeHolder="Digite seu nome"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="mt-8">
          <InputField
            color={tenantContext.mainColor}
            placeHolder="Digite seu e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="mt-8">
          <InputField
            color={tenantContext.mainColor}
            placeHolder="Digite sua senha"
            value={password}
            onChange={setPassword}
            password
          />
        </div>
        <div className="mt-8 mb-8">
          <Button
            color={tenantContext.mainColor}
            label="Cadastrar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>
      <div
        className="mt-8 font-normal text-base text-center pb-16"
        style={{
          margin: "auto",
          color: "rgba(27,27,27,0.8)",
          width: "fit-content",
        }}
      >
        Já tem cadastro ?{" "}
        <a
          className="font-semibold no-underline"
          style={{ color: tenantContext.mainColor }}
        >
          <Link href={`/${tenantContext.slug}/login`}>Fazer login</Link>
        </a>
      </div>
    </div>
  );
}
