import { Box, Spinner } from "@chakra-ui/react";
import { teacherService } from "apiServices/teacherServices";
import { useQuery } from "react-query";

export default function TeacherView() {
  const { isLoading, data } = useQuery(
    "getAllTeachers",
    teacherService.getAllTeachers
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      Teacher View
      {(data ?? []).map((teacher) => (
        <span>{JSON.stringify(teacher)}</span>
      ))}
      <Box minH="260px" minW="75%" mt="auto">
      </Box>
    </Box>
  );
}
