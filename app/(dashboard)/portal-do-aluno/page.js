"use client";
import Financeiro from "@/components/portal-do-aluno/Financeiro";
import MeuSemestre from "@/components/portal-do-aluno/MeuSemestre";
import SelectCourse from "@/components/portal-do-aluno/SelectCourse";
import Bolsas from "@/components/portal-do-aluno/Bolsas";
import Integralizacao from "@/components/portal-do-aluno/Integralizacao";
import Requisicoes from "@/components/portal-do-aluno/Requisicoes";
import Matriz from "@/components/portal-do-aluno/Matriz";
import { PlusCircle } from "@phosphor-icons/react";

export default function App() {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="m-5 w-full p-4 md:ml-5 md:mt-5">
        <div>
          <SelectCourse />
        </div>
        <div className="mt-5 flex flex-col justify-center gap-2 md:flex-row">
          <MeuSemestre />
          <Financeiro />
        </div>
      </div>

      <div className="z-50 mt-5 w-full items-center justify-center border-t-1 border-slate-400 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="ml-auto mr-auto mt-5 flex max-w-[1250px] items-center gap-1 rounded-full bg-white pb-4 pt-4">
          <PlusCircle
            size={28}
            color="#006FEE"
            weight="fill"
            className="ml-5"
          />

          <h1 className="mr-0 text-2xl font-semibold text-black">
            Outros serviços
          </h1>
        </div>
        <div className="flex max-w-full flex-col items-center justify-center gap-1 pb-10 md:flex-row">
          <Bolsas />
          <Integralizacao />
          <Requisicoes />
          <Matriz />
        </div>
      </div>
    </div>
  );
}
