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
import { useState, useEffect } from "react";

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
  setIsEditing,
}) {
  const [tempConfig, setTempConfig] = useState(config);

  useEffect(() => {
    if (isOpen) {
      setTempConfig(config);
    }
  }, [config, isOpen]);

  const handleTempConfigChange = (field, value) => {
    setTempConfig((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    handleConfigChange(tempConfig);
    handleSave();
  };

  const handleCloseModal = () => {
    setTempConfig(config);
    setIsEditing(false);
    onOpenChange(false);
  };

  return (
    <Modal size="3xl" isOpen={isOpen} onOpenChange={handleCloseModal}>
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
                        value={tempConfig.userName}
                        variant="underlined"
                        onChange={(e) =>
                          handleTempConfigChange("userName", e.target.value)
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
                        value={tempConfig.password}
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
                          handleTempConfigChange("password", e.target.value)
                        }
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
                            const imageUrl = URL.createObjectURL(file);
                            handleTempConfigChange("src", imageUrl);
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
              <Button color="danger" variant="light" onPress={handleCloseModal}>
                Fechar
              </Button>
              {isEditing && (
                <Button
                  color="primary"
                  onPress={() => {
                    handleSaveChanges();
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
  );
}
