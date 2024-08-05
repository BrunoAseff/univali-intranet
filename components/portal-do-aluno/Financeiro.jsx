import { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";
import { CalendarBlank, Exam, ListDashes } from "@phosphor-icons/react";

export default function Financeiro() {
  const [selected, setSelected] = useState("Notas");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Card className=" w-[500px] space-y-5 mt-5 p-4" radius="sm">
        <Skeleton className=" rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  }

  return (
    <Card
      radius="sm"
      shadow="none"
      className="flex flex-wrap mt-5  mr-10 max-w-screen-sm bg-background p-5"
    >
      <CardHeader>
        <strong>FINANCEIRO</strong>
      </CardHeader>
      <div className="flex w-full flex-col ">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab
            key="Notas"
            title={
              <div className=" flex items-center space-x-2">
                <Exam />
                <span>Notas</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Calendario"
            title={
              <div className="flex items-center space-x-2">
                <CalendarBlank />
                <span>Calendario</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="Matriz"
            title={
              <div className="flex items-center space-x-2">
                <ListDashes />
                <span>Matriz</span>
              </div>
            }
          >
            <Card shadow="none">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
