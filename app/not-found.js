"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdError } from "react-icons/md";

export default function ErrorPage({ error }) {
  useEffect(() => {
    console.error(error), [error];
  });

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-6">
      <MdError className="w-32 h-32 text-destructive-foreground" />

      <h2 className=" text-4xl font-bold font-inter">
        Essa página não existe!
      </h2>
      <Button
        asChild
        className="bg-destructive-foreground text-primary hover:text-background"
      >
        <Link href={"/"}>Voltar à tela inicial</Link>
      </Button>
    </div>
  );
}
