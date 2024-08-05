"use client";
import MeuSemestre from "@/components/portal-do-aluno/MeuSemestre";
import SelectCourse from "@/components/portal-do-aluno/SelectCourse";

export default function App() {
  return (
    <div className="p-4 mt-5 ml-5">
      <SelectCourse />
      <MeuSemestre />
    </div>
  );
}
