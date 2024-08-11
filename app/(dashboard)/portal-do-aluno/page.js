"use client";
import Financeiro from "@/components/portal-do-aluno/Financeiro";
import MeuSemestre from "@/components/portal-do-aluno/MeuSemestre";
import SelectCourse from "@/components/portal-do-aluno/SelectCourse";

export default function App() {
  return (
    <div className="p-4 md:mt-5 md:ml-5 max-w-90 m-5 flex flex-col">
      <div>
        <SelectCourse />
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <MeuSemestre />
        <Financeiro />
      </div>
    </div>
  );
}
