"use client";
import Financeiro from "@/components/portal-do-aluno/Financeiro";
import MeuSemestre from "@/components/portal-do-aluno/MeuSemestre";
import SelectCourse from "@/components/portal-do-aluno/SelectCourse";

export default function App() {
  return (
    <div className="p-4 mt-5 ml-5 flex flex-col">
      <div className="flex w-full">
        <SelectCourse />
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <MeuSemestre />
        <Financeiro />
      </div>
    </div>
  );
}
