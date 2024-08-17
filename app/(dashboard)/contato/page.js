"use client";

import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Table,
  TableColumn,
  TableCell,
  TableRow,
  TableHeader,
  TableBody,
} from "@nextui-org/react";
import { contatosUteis } from "@/contatosUteis";
import { secretariasAcademicas } from "@/secretariasAcademicas";
export default function Home() {
  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <h1 className="text-4xl font-bold text-primary">Contatos</h1>
      <div className="ml-auto mr-auto mt-10 flex items-start justify-start">
        <Tabs aria-label="Options" placement="left" isVertical="true">
          <Tab title="Telefones Úteis">
            {" "}
            <Card className="md:min-w-[700px]">
              <CardBody>
                <Table>
                  <TableHeader>
                    <TableColumn>Nome</TableColumn>
                    <TableColumn>Número</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {contatosUteis.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.numero}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
          </Tab>

          <Tab title="Secretarias Acadêmicas">
            <Card className="md:min-w-[700px]">
              <CardBody>
                {secretariasAcademicas.map((item, index) => (
                  <div key={index}>
                    <h1>{item.campus}</h1>
                    <p>{item.endereco}</p>
                    <p>{item.horarioAtendimento}</p>
                    <p>{item.telefones}</p>
                    <p>{item.email}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>

          <Tab title="Coordenações">
            <Card className="md:min-w-[700px]">
              <CardBody>
                <div>
                  <iframe
                    className="ml-auto mr-auto rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13431.386823408004!2d-48.654203702776236!3d-26.918893282819774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8842138761%3A0x648dbc8d0ef634c1!2sUniversidade%20do%20Vale%20do%20Itaja%C3%AD%2C%20Campus%20Itaja%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1723916545241!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
