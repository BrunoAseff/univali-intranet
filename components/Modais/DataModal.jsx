import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
} from "@nextui-org/react";

export function DataModal({
  isOpen,
  onOpenChange,
  isEditing,
  dados,
  handleEdit,
  handleSave,
  handleInputChange,
}) {
  return (
    <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
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
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  handleSave();
                  onClose();
                }}
              >
                Fechar
              </Button>
              {isEditing && (
                <Button
                  color="primary"
                  onPress={() => {
                    handleSave();
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
  );
}
