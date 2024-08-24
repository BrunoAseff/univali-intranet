import React, { useState, useEffect } from "react";
import { Select, SelectItem, Skeleton, Chip } from "@nextui-org/react";
import { courses } from "@/database";

export default function SelectCourse() {
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full max-w-[300px] items-center gap-3">
        <div>
          <Skeleton className="flex h-12 w-12 rounded-full" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    );
  }

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const courseDetails = courses.find((course) => course.id == selectedCourse);

  return (
    <div className="flex w-full flex-col flex-wrap items-center gap-6 bg-transparent md:flex-row md:flex-nowrap">
      <Select
        variant="underlined"
        color="primary"
        label="Selecione o seu curso"
        className="max-w-xs"
        onChange={handleSelectChange}
        value={selectedCourse}
      >
        {courses.map((course) => (
          <SelectItem color="primary" key={course.id} value={course.name}>
            {course.name}
          </SelectItem>
        ))}
      </Select>

      {courseDetails && (
        <div className="flex gap-6 md:gap-10">
          <div className="z-50 flex flex-col items-center gap-2 rounded-lg p-2 md:flex-row">
            <p className="z-50 text-nowrap">Id do curso: </p>
            <Chip variant="bordered" color="primary" radius="sm">
              {courseDetails.id}
            </Chip>
          </div>
          <div className="z-50 flex flex-col items-center gap-2 rounded-lg p-2 md:flex-row">
            <p className="z-50">Graduação: </p>{" "}
            <Chip variant="bordered" color="primary" radius="sm">
              {" "}
              {courseDetails.degree}
            </Chip>
          </div>

          <div className="z-50 flex flex-col items-center gap-2 rounded-lg p-2 md:flex-row">
            <p className="z-50"> Modo: </p>{" "}
            <Chip variant="bordered" color="primary" radius="sm">
              {courseDetails.mode}
            </Chip>
          </div>
          {courseDetails.special && (
            <div className="z-50 flex flex-col items-center gap-2 rounded-lg p-2 md:flex-row">
              <p className="z-50">Especial:</p>
              <Chip variant="bordered" color="primary" radius="sm">
                {courseDetails.special}
              </Chip>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
