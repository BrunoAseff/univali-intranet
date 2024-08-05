import React from "react";
import { Select, SelectItem, Skeleton } from "@nextui-org/react";
import { courses } from "@/database";
import { useState, useEffect } from "react";

export default function SelectCourse() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-background flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        color="primary"
        label="Selecione o seu curso"
        className="max-w-xs"
      >
        {courses.map((course) => (
          <SelectItem color="primary" key={course.id}>
            {course.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
