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
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { usePathname } from "next/navigation";
import {
  GearSix,
  Password,
  QuestionMark,
  SignOut,
} from "@phosphor-icons/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Início", href: "/inicio" },
    { label: "Portal do aluno", href: "/portal-do-aluno" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <div className="flex w-full flex-grow shrink-0">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
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

        <NavbarContent className="hidden sm:flex gap-12" justify="center">
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
          className=" text-bg hidden sm:flex gap-12"
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
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                className="hover:cursor-pointer"
                isBordered
                src="https://avatars.githubusercontent.com/u/155178870?v=4"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Acoes de perfil" variant="flat">
              <DropdownItem key="Perfil" className="h-14 gap-2">
                <p className="font-semibold">Logado como</p>
                <p className="font-semibold">nome-do-aluno@univali.br</p>
              </DropdownItem>

              <DropdownItem
                startContent={<GearSix size={20} />}
                key="Configurações"
              >
                Configurações
              </DropdownItem>
              <DropdownItem
                startContent={<Password size={20} />}
                key="Meus dados"
              >
                Meus dados
              </DropdownItem>
              <DropdownItem
                startContent={<QuestionMark size={20} />}
                key="Ajuda"
              >
                Ajuda
              </DropdownItem>
              <DropdownItem
                key="Sair"
                className="text-danger flex"
                color="danger"
                startContent={<SignOut size={20} />}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link className="w-full text-text" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
