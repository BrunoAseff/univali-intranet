import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { GithubLogo } from "@phosphor-icons/react";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Explicação do projeto
              </ModalHeader>
              <ModalBody>
                <p>
                  Este site é um projeto educacional desenvolvido para fins
                  acadêmicos e visa reproduzir a interface da intranet da
                  Universidade do Vale do Itajaí (Univali).
                </p>
                <p>
                  O site não é um serviço oficial da Univali e não possui acesso
                  às informações reais da intranet.
                </p>
                <p>
                  Todas as informações e dados exibidos aqui foram gerados
                  aleatoriamente e não representam dados reais.
                </p>
                <p>
                  Para ver a página principal, acesse{" "}
                  <Link
                    href="https://univali-intranet.vercel.app/inicio"
                    target="_blank"
                  >
                    https://univali-intranet.vercel.app/inicio
                  </Link>
                  .
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Link
                  href="https://github.com/brunoaseff/univali-intranet"
                  target="_blank"
                >
                  <Button
                    variant="light"
                    isIconOnly
                    color="default"
                    onPress={onClose}
                  >
                    <GithubLogo size={30} />
                  </Button>
                </Link>

                <Button color="primary" onPress={onClose}>
                  Entendi!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
