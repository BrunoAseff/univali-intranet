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
import { Eye, EyeSlash } from "@phosphor-icons/react";

export default function ConfigModal({
  isOpen,
  onOpenChange,
  isEditing,
  config,
  handleEdit,
  handleSave,
  handleConfigChange,
  setIsVisible,
  isVisible,
}) {
  return (
    <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
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
                      Nome de usuário:
                    </TableCell>
                    <TableCell>
                      <Input
                        disabled={!isEditing}
                        value={config.userName}
                        variant="underlined"
                        onChange={(e) =>
                          handleConfigChange("userName", e.target.value)
                        }
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">Senha: </TableCell>
                    <TableCell>
                      <Input
                        className="max-w-lg"
                        label="Senha"
                        value={config.password}
                        disabled={!isEditing}
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
                        onChange={(e) =>
                          handleConfigChange("password", e.target.value)
                        } // Update the password
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold">
                      Foto de perfil:
                    </TableCell>
                    <TableCell>
                      <input
                        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900"
                        type="file"
                        accept="image/*"
                        disabled={!isEditing}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
                            handleConfigChange("src", imageUrl); // Update the profile picture URL
                          }
                        }}
                      />

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        PNG ou JPG.
                      </p>
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
