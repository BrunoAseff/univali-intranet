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
import { Receipt, Signature, TipJar } from "@phosphor-icons/react";

export default function Financeiro() {
  const [selected, setSelected] = useState("Notas");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className="mt-5 w-[500px] space-y-5 p-4" radius="sm">
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
      className="flexflex-wrap mr-10 mt-5 max-w-screen-sm p-5 md:min-w-[600px]"
    >
      <CardHeader>
        <strong>FINANCEIRO</strong>
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
            key="Boletos"
            title={
              <div className="flex items-center space-x-2">
                <Receipt />
                <span>Boletos</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                <Table aria-label="Notas dos Disciplinas">
                  <TableHeader>
                    <TableColumn>CURSO</TableColumn>
                    <TableColumn>PERÍODO</TableColumn>
                    <TableColumn>VENCIMENTO</TableColumn>
                    <TableColumn>VALOR</TableColumn>
                    <TableColumn>SITUAÇÃO</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Sistemas para Internet</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>20/09/2024</TableCell>
                      <TableCell>900,00</TableCell>

                      <TableCell>
                        <Chip size="sm" variant="flat" color="success">
                          Pago
                        </Chip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sistemas para Internet</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>20/08/2024</TableCell>
                      <TableCell>900,00</TableCell>

                      <TableCell>
                        <Chip size="sm" variant="flat" color="warning">
                          Em aberto
                        </Chip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sistemas para Internet</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>20/07/2024</TableCell>
                      <TableCell>900,00</TableCell>

                      <TableCell>
                        <Chip size="sm" variant="flat" color="success">
                          Pago
                        </Chip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sistemas para Internet</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>20/06/2024</TableCell>
                      <TableCell>900,00</TableCell>

                      <TableCell>
                        <Chip size="sm" variant="flat" color="danger">
                          Atrasado
                        </Chip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-8 flex items-center justify-center gap-6">
                  <Button
                    href=""
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                  >
                    Imprimir
                  </Button>
                  <Button
                    href=""
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="ghost"
                  >
                    Gerar pix
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            className="flex items-center justify-center gap-2"
            key="Calendario"
            title={
              <div className="flex items-center space-x-2">
                <TipJar />
                <span>Impostos</span>
              </div>
            }
          >
            <Card className="md:min-w-[500px]" shadow="none">
              <CardBody className="flex flex-col items-center justify-center gap-6 p-10">
                <div className="mb-2 flex w-full flex-col gap-4 border-b-1 border-default pb-10">
                  <div className="flex justify-between">
                    <h1 className="font-bold">Imposto de renda</h1>
                    <Select
                      labelPlacement="outside-left"
                      color="primary"
                      label="Ano"
                      size="sm"
                      variant="underlined"
                      className="max-w-40"
                    >
                      <SelectItem>2023</SelectItem>
                      <SelectItem>2024</SelectItem>
                      <SelectItem>2025</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-6">
                    <Link href="" color="primary" underline="always">
                      Declaração do aluno
                    </Link>
                    <Link href="" color="primary" underline="always">
                      Declaração do responsável
                    </Link>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-4">
                  <div className="flex justify-between">
                    <h1 className="font-bold">Quitação anual</h1>
                    <Select
                      labelPlacement="outside-left"
                      color="primary"
                      label="Ano"
                      size="sm"
                      variant="underlined"
                      className="max-w-40"
                    >
                      <SelectItem>2023</SelectItem>
                      <SelectItem>2024</SelectItem>
                      <SelectItem>2025</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-6">
                    <Link href="" color="primary" underline="always">
                      Declaração do responsável
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Matriz"
            title={
              <div className="flex items-center space-x-2">
                <Signature />
                <span>Contrato</span>
              </div>
            }
          >
            <Card shadow="none" className="mt-10 items-center">
              <CardBody className="flex items-center gap-10">
                <Select
                  labelPlacement="outside-left"
                  color="primary"
                  label="Ano"
                  size="sm"
                  variant="underlined"
                  className="max-w-40"
                >
                  <SelectItem>2023</SelectItem>
                  <SelectItem>2024</SelectItem>
                  <SelectItem>2025</SelectItem>
                </Select>
                <Button
                  href=""
                  as={Link}
                  color="primary"
                  showAnchorIcon
                  variant="solid"
                >
                  Baixar contrato
                </Button>
                <Chip color="danger" variant="faded">
                  O contrato já foi entregue!
                </Chip>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
