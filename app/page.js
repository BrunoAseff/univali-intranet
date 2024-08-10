"use client";

import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { useState } from "react";
import { Link } from "@nextui-org/react";
import {
  Eye,
  EyeSlash,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 hidden md:flex bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-100 via-blue-300 to-blue-500  items-center justify-center">
        <Image
          radius="none"
          width={200}
          height={142}
          alt="Logo da Univali"
          src="/univali.png"
        />
      </div>
      <div className=" w-1/2 flex items-start justify-center flex-col gap-4 p-12 grow">
        <div className=" w-full flex justify-center items-center">
          <Image
            radius="none"
            width={200}
            height={142}
            alt="Logo da Univali"
            src="/univali.png"
            className="md:hidden scale-50 sm:scale-80 md:scale-100 "
          />
        </div>
        <h1 className="font-bold  md:mb-6	md:text-4xl  text-2xl">Bem-vindo!</h1>
        <Input
          className="max-w-lg	"
          type="email"
          label="Email"
          variant="bordered"
          placeholder="E-mail Univali, código de pessoa, CPF ou passaporte"
        />
        <Input
          className="max-w-lg"
          label="Senha"
          variant="bordered"
          placeholder="Insira a sua senha"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <Eye
                  size={32}
                  className="text-default-400 pointer-events-none"
                />
              ) : (
                <EyeSlash
                  size={32}
                  className="text-default-400 pointer-events-none"
                />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button variant="shadow" color="primary">
          Entrar
        </Button>{" "}
        <div className="mt-6 flex flex-col">
          <Link href="#">Esqueci meu código de pessoa.</Link>
          <Link className="mb-6" href="#">
            Esqueci minha senha.
          </Link>
          <Link href="#">
            Você é Egresso e não tem Código de Pessoa? Solicite aqui.
          </Link>

          <p className="mt-12 text-center max-w-lg">
            Caso encontre problemas para efetuar o login entre em contato com a
            Central de Atendimento <strong> 0800 723 1300</strong>
          </p>

          <div className="flex mt-12 text-center w-full items-center justify-center gap-4">
            <Link isExternal href="https://www.instagram.com/UnivaliOnline/">
              <InstagramLogo size={32} />
            </Link>
            <Link isExternal href="https://www.facebook.com/univali">
              <FacebookLogo size={32} />
            </Link>
            <Link isExternal href="https://www.linkedin.com/school/univali/">
              <LinkedinLogo size={32} />
            </Link>
            <Link isExternal href="https://www.youtube.com/univalivideos">
              <YoutubeLogo size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
