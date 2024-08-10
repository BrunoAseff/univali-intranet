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

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const courseDetails = courses.find((course) => course.id == selectedCourse);

  console.log("courseDetails:", courseDetails);
  console.log("selectedCourse:", selectedCourse);

  return (
    <div className="bg-background flex-col md:flex-row flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center">
      <Select
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
        <div className="flex gap-6">
          <div className="flex flex-col md:flex-row  gap-2">
            <p>Id do curso: </p>
            <Chip radius="sm">{courseDetails.id}</Chip>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <p>Graduação: </p> <Chip radius="sm"> {courseDetails.degree}</Chip>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <p> Modo: </p> <Chip radius="sm">{courseDetails.mode}</Chip>
          </div>
          {courseDetails.special && (
            <div className="flex flex-col md:flex-row gap-2">
              <p>Especial:</p>
              <Chip radius="sm">{courseDetails.special}</Chip>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
