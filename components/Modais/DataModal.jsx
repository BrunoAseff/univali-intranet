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
  DateInput,
  DatePicker,
} from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

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
    <Modal
      size="4xl"
      className="scale-90"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
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
                  <TableRow>
                    <TableCell className="font-semibold">
                      Código de Pessoa:
                    </TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[0].valor}
                        type="text"
                        variant="underlined"
                        onChange={(e) => handleInputChange(0, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">Nome:</TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[1].valor}
                        type="text"
                        variant="underlined"
                        onChange={(e) => handleInputChange(1, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">
                      Data de Nascimento:
                    </TableCell>
                    <TableCell>
                      <DatePicker
                        variant="underlined"
                        label={"Data de Nascimento"}
                        disabled={!isEditing}
                        value={parseDate(
                          dados[2].valor.split("/").reverse().join("-"),
                        )}
                        onChange={(date) =>
                          handleInputChange(2, date.toString())
                        }
                        className="max-w-sm"
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">
                      Nome da Mãe:
                    </TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[3].valor}
                        type="text"
                        variant="underlined"
                        onChange={(e) => handleInputChange(3, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">CPF:</TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[4].valor}
                        type="text"
                        variant="underlined"
                        onChange={(e) => handleInputChange(4, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">Telefone:</TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[5].valor}
                        type="tel"
                        variant="underlined"
                        onChange={(e) => handleInputChange(5, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">Celular:</TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[6].valor}
                        type="tel"
                        variant="underlined"
                        onChange={(e) => handleInputChange(6, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">Email:</TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={dados[7].valor}
                        type="email"
                        variant="underlined"
                        onChange={(e) => handleInputChange(7, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
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
