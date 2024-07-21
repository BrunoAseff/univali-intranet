"use client";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "@nextui-org/react";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-100 via-blue-300 to-blue-500 flex items-center justify-center">
        <Image
          radius="none"
          width={200}
          height={142}
          alt="Logo da Univali"
          src="/univali.png"
        />
      </div>
      <div className=" w-1/2 flex items-start justify-center flex-col gap-4 p-12 grow	">
        <h1 className="font-bold mb-6	 text-4xl	">Bem-vindo!</h1>
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
                <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
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

          <div className="flex mt-12 text-center w-full items-center justify-center ">
            <Link isExternal href="https://www.instagram.com/UnivaliOnline/">
              <FaInstagram className="scale-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
