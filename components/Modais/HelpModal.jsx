import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function HelpModal({ isOpen, onOpenChange }) {
  return (
    <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Ajuda</ModalHeader>
            <ModalBody>
              <p>
                Precisa de ajuda? Entre em contato com o nosso suporte técnico
                pelo e-mail suporte@univali.br ou pelo telefone (47) 3341-7550.
              </p>
              <p>
                Para dúvidas sobre o uso da plataforma, acesse o nosso FAQ
                disponível na área de suporte do site.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                className="mr-3"
              >
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
