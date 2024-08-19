"use client";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const checkboxOptions = [
    "Bolsas de Estudo",
    "Cultura",
    "Ciência",
    "Exatas",
    "Ciências da Terra e do Mar",
    "Ciências Humanas",
    "Saúde",
    "Gestão",
    "Empregos",
    "Estágios",
    "Eventos",
    "Extensão",
    "Educação Básica",
    "Educação a Distância",
    "Empreendedorismo",
    "Intercâmbios",
    "Idiomas",
    "Pós-Graduação",
    "Pesquisa",
    "RH - Informações Administrativas",
    "Seletivo Especial",
    "Previdência Privada",
    "Ingresso",
    "Direito",
    "Tecnologia",
    "Esportes",
    "Política",
    "Economia",
    "Meio ambiente",
    "Comunicação",
    "Beleza",
    "Gastronomia",
    "Educação",
    "Prêmios",
    "Cursos",
    "Institucional",
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    checkboxOptions.reduce((acc, option) => {
      acc[option] = true;
      return acc;
    }, {}),
  );

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSave = () => {
    onOpenChange(false);
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Assinar publicação por assunto
              </ModalHeader>
              <ModalBody className="max-h-[400px]">
                <div className="flex max-h-[600px] flex-col gap-1 overflow-auto">
                  {checkboxOptions.map((option) => (
                    <Checkbox
                      key={option}
                      color="primary"
                      isSelected={selectedOptions[option]}
                      onChange={() => handleCheckboxChange(option)}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Salvar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <h1 className="text-4xl font-bold text-primary">Início</h1>

      <div className="m-10 flex flex-col items-center justify-center gap-4 md:w-full md:flex-row">
        <Button
          variant="ghost"
          radius="full"
          size="sm"
          className="m-2 block md:hidden"
          onPress={onOpen}
        >
          Assinar publicação por assunto
        </Button>
        <div className="flex flex-col gap-4">
          <Card
            isFooterBlurred
            className="col-span-12 h-[300px] w-full sm:col-span-5"
          >
            <CardHeader className="absolute top-1 z-10 flex-col items-start"></CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
              src="/hour.jpg"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                <h4 className="text-2xl font-medium text-black">
                  Em Cima da Hora
                </h4>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja mais
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="col-span-12 h-[300px] w-full sm:col-span-5"
          >
            <CardHeader className="absolute top-1 z-10 flex-col items-start"></CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
              src="/edital.jpg"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                <h4 className="text-2xl font-medium text-black">Editais</h4>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja mais
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card
            isFooterBlurred
            className="col-span-12 h-[300px] w-full sm:col-span-5"
          >
            <CardHeader className="absolute top-1 z-10 flex-col items-start"></CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
              src="/courses.jpg"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                {" "}
                <h4 className="text-2xl font-medium text-black">
                  Cursos e Eventos
                </h4>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja mais
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="col-span-12 mb-10 h-[300px] w-full sm:col-span-5 md:mb-0"
          >
            <CardHeader className="absolute top-1 z-10 flex-col items-start"></CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
              src="/news.jpg"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                <h4 className="text-2xl font-medium text-black">Notícias</h4>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja mais
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Button
        className="mb-10 hidden md:block"
        color="primary"
        onPress={onOpen}
      >
        Assinar publicação por assunto
      </Button>
    </div>
  );
}
