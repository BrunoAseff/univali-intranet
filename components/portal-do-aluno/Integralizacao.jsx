import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Skeleton, Link } from "@nextui-org/react";
import { UsersThree } from "@phosphor-icons/react";

export default function Integralizacao() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className=" w-[300px] space-y-5 mt-5 p-4" radius="lg">
        <Skeleton className=" rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  }

  return (
    <Card
      radius="lg"
      shadow="none"
      className="flex flex-wrap mt-5 min-w-[300px] min-h-[300px]  mr-5 max-w-xs p-5"
    >
      <CardHeader className="w-full flex flex-col items-center justify-center gap-2">
        <UsersThree size={45} color="#006FEE" weight="fill" />

        <strong>INTEGRALIZAÇÃO</strong>
      </CardHeader>

      <CardBody>
        <Link className="cursor-pointer" underline="hover">
          Meu Histórico
        </Link>
        <Link className="cursor-pointer" underline="hover">
          ENADE
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Atividades Complementares
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Listagem das Atividades
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Cadastro Atividade
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Resumo Pontuação
        </Link>
      </CardBody>
    </Card>
  );
}
