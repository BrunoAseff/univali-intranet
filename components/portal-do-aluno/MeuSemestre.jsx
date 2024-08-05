import { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TableCell,
  Chip,
} from "@nextui-org/react";
import {
  BookOpenText,
  CalendarBlank,
  Exam,
  ListDashes,
} from "@phosphor-icons/react";
import { disciplines } from "@/database";

const getRandomStatus = () => {
  const statuses = ["Confirmada", "Negada", "Em análise"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getStatusColor = (status) => {
  switch (status) {
    case "Confirmada":
      return "success";
    case "Negada":
      return "danger";
    case "Em analise":
      return "warning";
    default:
      return "warning";
  }
};

export default function MeuSemestre() {
  const [selected, setSelected] = useState("Notas");
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("1º Período");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className="w-[500px] space-y-5 mt-5 p-4" radius="sm">
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
      radius="sm"
      shadow="none"
      className="flex flex-wrap mt-5 mr-10 max-w-screen-sm bg-background p-5"
    >
      <CardHeader>
        <strong>MEU SEMESTRE</strong>
      </CardHeader>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab
            key="Programação Acadêmica"
            title={
              <div className="flex items-center space-x-2">
                <CalendarBlank />
                <span>Programação Acadêmica</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody className="flex">
                <Select
                  color="primary"
                  variant="underlined"
                  size="sm"
                  label="Ano/semestre"
                  className="max-w-36 mb-5"
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  value={selectedPeriod}
                >
                  {Object.keys(disciplines).map((period) => (
                    <SelectItem key={period} value={period}>
                      {period}
                    </SelectItem>
                  ))}
                </Select>

                <Table aria-label="Disciplines of Sistemas para Internet">
                  <TableHeader>
                    <TableColumn>NOME</TableColumn>
                    <TableColumn>CREDITO</TableColumn>
                    <TableColumn>CARGA HORARIA</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {disciplines[selectedPeriod].map((discipline, index) => {
                      const status = getRandomStatus();
                      return (
                        <TableRow key={index}>
                          <TableCell>{discipline.name}</TableCell>
                          <TableCell>{discipline.credits}</TableCell>
                          <TableCell>{discipline.workload}</TableCell>
                          <TableCell>
                            <Chip
                              size="sm"
                              variant="flat"
                              color={getStatusColor(status)}
                            >
                              {status}
                            </Chip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Matriz"
            title={
              <div className="flex items-center space-x-2">
                <ListDashes />
                <span>Matriz</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Material Didático"
            title={
              <div className="flex items-center space-x-2">
                <BookOpenText />
                <span>Material Didático</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Notas"
            title={
              <div className="flex items-center space-x-2">
                <Exam />
                <span>Notas</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
