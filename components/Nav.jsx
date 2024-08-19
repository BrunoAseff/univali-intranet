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
import HelpModal from "./Modais/HelpModal";
import { DataModal } from "./Modais/DataModal";
import ConfigModal from "./Modais/ConfigModal";

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

  const [config, setConfig] = useState([
    {
      src: "https://avatars.githubusercontent.com/u/155178870?v=4",
      userName: "Nome do Aluno",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (index, newValue) => {
    const novosDados = [...dados];
    novosDados[index].valor = newValue;
    setDados(novosDados);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
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
          <h1 className="hidden lg:flex">{config[0].userName}</h1>
          <Dropdown backdrop="blur" placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                className="hover:cursor-pointer"
                isBordered
                src={config[0].src}
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

      <ConfigModal
        isOpen={isConfigOpen}
        onOpenChange={onConfigOpenChange}
        isEditing={isEditing}
        config={config}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleInputChange={handleInputChange}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />

      <DataModal
        isOpen={isDataOpen}
        onOpenChange={onDataOpenChange}
        isEditing={isEditing}
        dados={dados}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleInputChange={handleInputChange}
      />

      <HelpModal isOpen={isHelpOpen} onOpenChange={onHelpOpenChange} />
    </div>
  );
}
