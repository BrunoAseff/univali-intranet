"use client";
import Financeiro from "@/components/portal-do-aluno/Financeiro";
import MeuSemestre from "@/components/portal-do-aluno/MeuSemestre";
import SelectCourse from "@/components/portal-do-aluno/SelectCourse";
import Bolsas from "@/components/portal-do-aluno/Bolsas";
import Integralizacao from "@/components/portal-do-aluno/Integralizacao";
import Requisicoes from "@/components/portal-do-aluno/Requisicoes";
import Matriz from "@/components/portal-do-aluno/Matriz";
import { GraduationCap, Sparkle } from "@phosphor-icons/react";

export default function App() {
  return (
    <div className=" p-4 md:mt-5 md:ml-5  w-full m-5 flex flex-col">
      <div>
        <SelectCourse />
      </div>
      <div className="flex gap-2 mt-5 justify-center flex-col md:flex-row">
        <MeuSemestre />
        <Financeiro />
      </div>
      <div className="bg-backTry  w-full z-50 border-t-2 border-zinc-200 mt-5 ml-5 rounded-lg">
        <div className="flex items-center gap-2 ">
          <h1 className="m-5 mr-0 text-black font-bold text-2xl	 ">
            Outros serviços
          </h1>
          <GraduationCap color="#006FEE" size={28} />
        </div>
        <div className="pb-10 flex gap-1 max-w-full items-center justify-center flex-col md:flex-row">
          <Bolsas />
          <Integralizacao />
          <Requisicoes />
          <Matriz />
        </div>
      </div>
    </div>
  );
}
