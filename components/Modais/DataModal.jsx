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
  DatePicker,
} from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { parseDate } from "@internationalized/date";

export function DataModal({
  isOpen,
  onOpenChange,
  isEditing,
  dados,
  handleEdit,
  handleSave,
  handleInputChange,
  setIsEditing,
}) {
  // Estado para armazenar os dados originais
  const [backupData, setBackupData] = useState([]);

  // Funções de validação para cada campo
  const validateEmail = (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  const validateCPF = (value) => value.length === 11;

  const validatePhone = (value) => value.length >= 8 && value.length <= 11;

  const validateCell = (value) => value.length === 11;

  const validateDate = (value) => {
    return value ? true : false;
  };

  const isInvalid = (index) => {
    switch (index) {
      case 0:
      case 1:
      case 3:
        return dados[index].valor.length === 0;
      case 2:
        return !validateDate(dados[index].valor);
      case 4:
        return !validateCPF(dados[index].valor);
      case 5:
        return !validatePhone(dados[index].valor);
      case 6:
        return !validateCell(dados[index].valor);
      case 7:
        return !validateEmail(dados[index].valor);
      default:
        return false;
    }
  };

  const isFormInvalid = () => {
    return dados.some((_, index) => isInvalid(index));
  };

  const handleEditClick = () => {
    // Salvar o estado atual dos dados antes de entrar no modo de edição
    setBackupData(dados.map((d) => ({ ...d })));
    handleEdit();
  };

  const handleClose = (onClose) => {
    // Restaurar os dados a partir do backup se o modal for fechado sem salvar
    if (isEditing) {
      dados.forEach((d, index) => {
        handleInputChange(index, backupData[index].valor);
      });
      setIsEditing(false);
    }
    onClose();
  };

  return (
    <Modal
      size="3xl"
      className="m-2 flex max-h-[98vh] flex-col justify-center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent className="flex flex-col">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Meus dados
            </ModalHeader>
            <ModalBody className="border-b-1 border-gray-200">
              <Table hideHeader className="max-h-[600px]">
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
                        isInvalid={isInvalid(0)}
                        errorMessage="Campo obrigatório."
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
                        isInvalid={isInvalid(1)}
                        errorMessage="Campo obrigatório."
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
                        isInvalid={false}
                        isDisabled={!isEditing}
                        value={parseDate(
                          dados[2].valor.split("/").reverse().join("-"),
                        )}
                        onChange={(date) =>
                          handleInputChange(2, date.toString())
                        }
                        className="max-w-sm"
                        errorMessage="Data inválida."
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
                        isInvalid={isInvalid(3)}
                        errorMessage="Campo obrigatório."
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
                        isInvalid={isInvalid(4)}
                        errorMessage="CPF inválido. Deve conter 11 dígitos."
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
                        isInvalid={isInvalid(5)}
                        errorMessage="Telefone inválido. Deve conter entre 8 e 11 dígitos."
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
                        isInvalid={isInvalid(6)}
                        errorMessage="Celular inválido. Deve conter 11 dígitos."
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
                        isInvalid={isInvalid(7)}
                        errorMessage="Insira um email válido."
                        onChange={(e) => handleInputChange(7, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {!isEditing ? (
                <Button
                  color="primary"
                  variant="light"
                  onPress={handleEditClick}
                >
                  Editar
                </Button>
              ) : null}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => handleClose(onClose)}
              >
                Fechar
              </Button>
              {isEditing && (
                <Button
                  color="primary"
                  onPress={() => {
                    if (!isFormInvalid()) {
                      handleSave();
                    }
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
