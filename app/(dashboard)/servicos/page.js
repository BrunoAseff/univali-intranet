"use client";

import { Card, CardHeader, CardBody, Link, Button } from "@nextui-org/react";
import {
  AppWindow,
  BookBookmark,
  Books,
  CalendarHeart,
  Desktop,
  Globe,
  GlobeHemisphereEast,
  ListMagnifyingGlass,
  MagnifyingGlass,
  MicrosoftOutlookLogo,
  MicrosoftTeamsLogo,
  Printer,
  ReadCvLogo,
  TestTube,
  UsersThree,
} from "@phosphor-icons/react";

export default function Servicos() {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-primary">Serviços</h1>

      <section className="mb-6 flex flex-col gap-10 md:mb-0 md:flex-row">
        <Card className="min-w-[300px] bg-transparent py-4 outline-dashed outline-primary md:min-w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Serviços intranet</h4>
          </CardHeader>
          <CardBody className="flex items-center gap-6 text-center">
            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <ReadCvLogo size={25} weight="light" />
                Avaliação dos Estágios
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <GlobeHemisphereEast size={25} weight="light" />
                Inglês Online
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <TestTube size={25} weight="light" />
                Laboratórios
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <ListMagnifyingGlass size={25} weight="light" />
                Listas de E-mail
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <MagnifyingGlass size={25} weight="light" />
                Pesquisa Online
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-primary hover:text-white"
                variant="solid"
              >
                <Printer size={25} weight="light" />
                Quota/Impressão
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card className="min-w-[300px] bg-transparent py-4 outline-dashed outline-secondary md:min-w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Serviços T.I</h4>
          </CardHeader>
          <CardBody className="flex items-center gap-6 text-center">
            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-secondary hover:text-white"
                variant="solid"
              >
                <AppWindow size={25} weight="light" />
                Software Legal{" "}
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-secondary hover:text-white"
                variant="solid"
              >
                <MicrosoftOutlookLogo size={25} weight="light" />
                MegaMail
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-secondary hover:text-white"
                variant="solid"
              >
                <MicrosoftTeamsLogo size={25} weight="light" />
                E-mail (Office 365)
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="min-w-[300px] bg-transparent py-4 outline-dashed outline-success md:min-w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Plataformas</h4>
          </CardHeader>

          <CardBody className="flex items-center gap-6 text-center">
            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <Globe size={25} weight="light" />
                Ambiente Virtual - EaD
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <Desktop size={25} weight="light" />
                AVA Univali 2.0
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <Books size={25} weight="light" />
                Biblioteca
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <UsersThree size={25} weight="light" />
                Comunidade Alumni
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <CalendarHeart size={25} weight="light" />
                Eventos
              </Button>
            </div>

            <div className="flex w-full flex-col">
              <Button
                fullWidth
                className="h-16 bg-slate-300 hover:bg-success hover:text-white"
                variant="solid"
              >
                <BookBookmark size={25} weight="light" />
                Meu Pergamum - Biblioteca
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
