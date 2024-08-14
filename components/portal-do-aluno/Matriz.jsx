import { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  Link,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  CalendarBlank,
  Exam,
  ListDashes,
  Receipt,
  Signature,
  TipJar,
} from "@phosphor-icons/react";

export default function Matriz() {
  const [selected, setSelected] = useState("Notas");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className=" w-[300px] space-y-5 mt-5 p-4" radius="sm">
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
      radius="sm"
      shadow="none"
      className="flexflex-wrap mt-5 min-w-[300px] min-h-[300px]  mr-5 max-w-xs p-5"
    >
      <CardHeader>
        <strong>MATRIZ</strong>
      </CardHeader>

      <CardBody>
        <Link
          showAnchorIcon
          href="#"
          color="primary"
          className="cursor-pointer"
          underline="hover"
        >
          Matriz
        </Link>
        <Link
          showAnchorIcon
          href="#"
          color="primary"
          className="cursor-pointer"
          underline="hover"
        >
          Ementa/Conteúdos
        </Link>
        <Link
          showAnchorIcon
          href="#"
          color="primary"
          className="cursor-pointer"
          underline="hover"
        >
          Equivalências
        </Link>
      </CardBody>
    </Card>
  );
}
