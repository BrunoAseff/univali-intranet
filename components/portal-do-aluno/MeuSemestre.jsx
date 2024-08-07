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
  Link,
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
    case "Em análise":
      return "warning";
    default:
      return "warning";
  }
};

const getRandomGrade = () => (Math.random() * 10).toFixed(1);

const getRandomAbsences = () => {
  const absences = Math.floor(Math.random() * 19);
  return `${absences < 10 ? "0" : ""}${absences}/18`;
};

const getAbsenceColor = (absences) => {
  const count = parseInt(absences.split("/")[0], 10);
  if (count === 18) return "danger";
  if (count > 14) return "warning";
  return "primary";
};

const getSituacao = (m1, m2, m3, absences) => {
  const average = (m1 + m2 + m3) / 3;
  const absencesCount = parseInt(absences.split("/")[0], 10);
  if (average > 6 && absencesCount < 18) {
    return { status: "Aprovado", color: "success" };
  }
  return { status: "Reprovado", color: "danger" };
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
      className="flex flex-wrap mt-5 mr-10 max-w-screen-sm min-h-96 bg-background p-5"
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
                    <TableColumn>CRÉDITO</TableColumn>
                    <TableColumn>CARGA HORÁRIA</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  {!selectedPeriod || !disciplines[selectedPeriod] ? (
                    <TableBody
                      emptyContent={"Selecione um período para visualizar."}
                    >
                      {[]}
                    </TableBody>
                  ) : (
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
                  )}
                </Table>
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

                <Table aria-label="Material Didático das Disciplinas">
                  <TableHeader>
                    <TableColumn>NOME</TableColumn>
                    <TableColumn></TableColumn>
                    <TableColumn></TableColumn>
                  </TableHeader>
                  {!selectedPeriod || !disciplines[selectedPeriod] ? (
                    <TableBody
                      emptyContent={"Selecione um período para visualizar."}
                    >
                      {[]}
                    </TableBody>
                  ) : (
                    <TableBody>
                      {disciplines[selectedPeriod].map((discipline, index) => (
                        <TableRow key={index}>
                          <TableCell>{discipline.name}</TableCell>
                          <TableCell>
                            <Link
                              isBlock
                              showAnchorIcon
                              href="#"
                              color="primary"
                              size="sm"
                            >
                              Material
                            </Link>
                          </TableCell>
                          <TableCell>
                            <Link
                              isBlock
                              showAnchorIcon
                              href="#"
                              color="primary"
                              size="sm"
                            >
                              Envio de Avaliações
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
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
                <Table aria-label="Notas dos Disciplinas">
                  <TableHeader>
                    <TableColumn>NOME</TableColumn>
                    <TableColumn>M1</TableColumn>
                    <TableColumn>M2</TableColumn>
                    <TableColumn>M3</TableColumn>
                    <TableColumn>FALTAS</TableColumn>
                    <TableColumn>SITUAÇÃO</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {disciplines[selectedPeriod]?.map((discipline, index) => {
                      const m1 = parseFloat(getRandomGrade());
                      const m2 = parseFloat(getRandomGrade());
                      const m3 = parseFloat(getRandomGrade());
                      const absences = getRandomAbsences();
                      const { status, color } = getSituacao(
                        m1,
                        m2,
                        m3,
                        absences
                      );

                      return (
                        <TableRow key={index}>
                          <TableCell>{discipline.name}</TableCell>
                          <TableCell>{m1}</TableCell>
                          <TableCell>{m2}</TableCell>
                          <TableCell>{m3}</TableCell>
                          <TableCell>
                            <Chip size="sm" color={getAbsenceColor(absences)}>
                              {absences}
                            </Chip>
                          </TableCell>
                          <TableCell>
                            <Chip size="sm" variant="flat" color={color}>
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
        </Tabs>
      </div>
    </Card>
  );
}
