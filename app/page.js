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
    <div className="flex h-screen max-h-screen w-full text-sm">
      <div className="hidden w-1/2 items-center justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-100 via-blue-300 to-blue-500 md:flex">
        <Image
          radius="none"
          width={200}
          height={142}
          alt="Logo da Univali"
          src="/univali.png"
        />
      </div>
      <div className="flex w-1/2 grow flex-col items-start justify-center gap-3 p-6 md:p-12">
        <div className="flex w-full items-center justify-center">
          <Image
            radius="none"
            width={200}
            height={142}
            alt="Logo da Univali"
            src="/univali.png"
            className="scale-50 sm:scale-80 md:hidden md:scale-100"
          />
        </div>
        <h1 className="text-2xl font-bold md:mb-6 md:text-4xl">Bem-vindo!</h1>
        <Input
          className="max-w-lg"
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
                  className="pointer-events-none text-default-400"
                />
              ) : (
                <EyeSlash
                  size={32}
                  className="pointer-events-none text-default-400"
                />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button variant="shadow" color="primary">
          Entrar
        </Button>{" "}
        <div className="mt-3 flex flex-col md:mt-6">
          <Link className="mb-2 text-sm" href="#">
            Esqueci meu código de pessoa.
          </Link>
          <Link className="mb-3 text-sm md:mb-6" href="#">
            Esqueci minha senha.
          </Link>
          <Link className="text-sm" href="#">
            Você é Egresso e não tem Código de Pessoa? Solicite aqui.
          </Link>

          <p className="mt-8 max-w-lg text-center md:mt-12">
            Caso encontre problemas para efetuar o login entre em contato com a
            Central de Atendimento <strong> 0800 723 1300</strong>
          </p>

          <div className="mt-8 flex w-full items-center justify-center gap-2 text-center md:mt-12 md:gap-4">
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
