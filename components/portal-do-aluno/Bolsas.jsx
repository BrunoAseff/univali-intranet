import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Link, Skeleton } from "@nextui-org/react";
import { Student } from "@phosphor-icons/react";

export default function Bolsas() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className="mt-5 w-[300px] space-y-5 p-4" radius="sm">
        <Skeleton className="rounded-lg">
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
      className="mr-5 mt-5 flex min-h-[300px] min-w-[300px] max-w-xs flex-wrap p-5"
    >
      <CardHeader className="flex w-full flex-col items-center justify-center gap-2">
        <Student size={45} color="#006FEE" weight="fill" />

        <strong>BOLSAS</strong>
      </CardHeader>

      <CardBody>
        <Link className="cursor-pointer" underline="hover">
          {" "}
          Cadastro
        </Link>
        <Link className="cursor-pointer" underline="hover">
          {" "}
          Serviço Voluntário{" "}
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Agendamentos
        </Link>
        <Link className="cursor-pointer" underline="hover">
          Requerimento
        </Link>
      </CardBody>
    </Card>
  );
}
