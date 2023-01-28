import { Box } from "@chakra-ui/react";

const englishMarks = {
  subject: "English",
  marks: [
    {
      student: "John Marston",
      marksScored: 16.5,
      totalMarks: 20
    },
    {
      student: "",
      marksScored: 16.5,
      totalMarks: 20
    },
    {
      student: "John Marston",
      marksScored: 16.5,
      totalMarks: 20
    },
    {
      student: "John Marston",
      marksScored: 16.5,
      totalMarks: 20
    },
  ]
}

export default function MarksView() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      Marks of various exams

    </Box>
  )
}