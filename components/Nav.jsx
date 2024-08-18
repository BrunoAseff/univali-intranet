"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { usePathname, useRouter } from "next/navigation";
import {
  SignOut,
  GearSix,
  Key,
  QuestionMark,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen: isConfigOpen, onOpenChange: onConfigOpenChange } =
    useDisclosure();
  const { isOpen: isDataOpen, onOpenChange: onDataOpenChange } =
    useDisclosure();
  const { isOpen: isHelpOpen, onOpenChange: onHelpOpenChange } =
    useDisclosure();

  const pathname = usePathname();
  const router = useRouter();

  const [dados, setDados] = useState([
    { item: "Código de Pessoa: ", valor: "9659862" },
    { item: "Nome: ", valor: "Nome do Aluno" },
    { item: "Data de Nascimento: ", valor: "03/08/1999" },
    { item: "Nome da Mãe: ", valor: "Nome da mãe do aluno" },
    { item: "CPF: ", valor: "694.368.493-19" },
    { item: "Telefone: ", valor: "9999999" },
    { item: "Celular: ", valor: "9999999" },
    { item: "Email: ", valor: "emaildoaluno@gmail.com" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingConfig, setIsEditingConfig] = useState(false);

  const handleInputChange = (index, newValue) => {
    const novosDados = [...dados];
    novosDados[index].valor = newValue;
    setDados(novosDados);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditConfig = () => {
    setIsEditingConfig(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleSaveConfig = () => {
    setIsEditingConfig(false);
  };

  const menuItems = [
    { label: "Início", href: "/inicio" },
    { label: "Portal do aluno", href: "/portal-do-aluno" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <div className="flex w-full shrink-0 flex-grow">
      <Navbar
        className="space-between m-0 flex w-full"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          />
        </NavbarContent>

        <NavbarContent className="pr-3 sm:hidden" justify="center">
          <NavbarBrand>
            <Image
              className="scale-[0.25] hover:cursor-pointer"
              radius="none"
              width={200}
              height={142}
              alt="Logo da Univali"
              src="/univali.png"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-12 sm:flex" justify="center">
          <NavbarBrand>
            <Image
              className="scale-[0.25] hover:cursor-pointer"
              radius="none"
              width={200}
              height={142}
              alt="Logo da Univali"
              src="/univali.png"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="text-bg hidden gap-12 sm:flex"
          justify="center"
        >
          {menuItems.map((item) => (
            <NavbarItem key={item.href} isActive={pathname === item.href}>
              <Link
                className={`no-underline ${
                  pathname === item.href ? "text-primary" : "text-black"
                }`}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <h1 className="hidden lg:flex">Nome do Aluno</h1>
          <Dropdown backdrop="blur" placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                className="hover:cursor-pointer"
                isBordered
                src="https://avatars.githubusercontent.com/u/155178870?v=4"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Ações de perfil" variant="flat">
              <DropdownItem
                startContent={<GearSix size={20} />}
                key="Configurações"
                onClick={onConfigOpenChange}
              >
                Configurações
              </DropdownItem>
              <DropdownItem
                key="Dados"
                startContent={<Key size={20} />}
                onClick={onDataOpenChange}
              >
                Meus dados
              </DropdownItem>
              <DropdownItem
                startContent={<QuestionMark size={20} />}
                key="Ajuda"
                onClick={onHelpOpenChange}
              >
                Ajuda
              </DropdownItem>
              <DropdownItem
                key="Sair"
                className="flex text-danger"
                color="danger"
                startContent={<SignOut size={20} />}
                onClick={handleSignOut}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link className="text-text w-full" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Modal isOpen={isConfigOpen} onOpenChange={onConfigOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Configurações
              </ModalHeader>
              <ModalBody>
                <Table className="max-h-[600px]">
                  <TableHeader>
                    <TableColumn>Configurações de conta</TableColumn>
                    <TableColumn></TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">
                        Nome de usuário:{" "}
                      </TableCell>
                      <TableCell>
                        <Input
                          disabled={!isEditingConfig}
                          value={"Nome do Aluno"}
                          variant="underlined"
                          onChange={(e) => {}}
                        />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-semibold">Senha: </TableCell>
                      <TableCell>
                        <Input
                          className="max-w-lg"
                          label="Senha"
                          value={"SenhaAleatoria123456"}
                          disabled={!isEditingConfig}
                          variant="underlined"
                          endContent={
                            <button
                              className="focus:outline-none"
                              type="button"
                              onClick={() => setIsVisible(!isVisible)}
                              aria-label="toggle password visibility"
                            >
                              {isVisible ? (
                                <Eye
                                  size={32}
                                  className="pointer-events-none text-default-400"
                                />
                              ) : (
                                <EyeSlash
                                  size={32}
                                  className="pointer-events-none text-default-400"
                                />
                              )}
                            </button>
                          }
                          type={isVisible ? "text" : "password"}
                          onChange={(e) => {}}
                        />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-semibold">
                        Foto de perfil:
                      </TableCell>
                      <TableCell>
                        <input
                          type="file"
                          accept="image/*"
                          disabled={!isEditingConfig}
                          onChange={(e) => {}}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                {!isEditingConfig ? (
                  <Button
                    color="primary"
                    variant="light"
                    onPress={handleEditConfig}
                  >
                    Editar
                  </Button>
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                {isEditingConfig && (
                  <Button
                    color="primary"
                    onPress={() => {
                      handleSaveConfig();
                      onClose();
                    }}
                  >
                    Salvar alterações
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal size="3xl" isOpen={isDataOpen} onOpenChange={onDataOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Meus dados
              </ModalHeader>
              <ModalBody className="border-b-1 border-gray-200">
                <Table className="max-h-[600px]">
                  <TableHeader>
                    <TableColumn>Dados pessoais</TableColumn>
                    <TableColumn></TableColumn>
                  </TableHeader>
                  <TableBody>
                    {dados.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-semibold">
                          {item.item}
                        </TableCell>
                        <TableCell>
                          <Input
                            disabled={!isEditing}
                            value={item.valor}
                            type="text"
                            variant="underlined"
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                          ></Input>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {!isEditing ? (
                  <Button color="primary" variant="light" onPress={handleEdit}>
                    Editar
                  </Button>
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                {isEditing && (
                  <Button
                    color="primary"
                    onPress={() => {
                      handleSave();
                      onClose();
                    }}
                  >
                    Salvar alterações
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal size="4xl" isOpen={isHelpOpen} onOpenChange={onHelpOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ajuda</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
