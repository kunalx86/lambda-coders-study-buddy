import {
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

function TableItem({ roll, name, gender, isApproved }) {
  return (
    <Tr>
      <Td>{roll}</Td>
      <Td>{name}</Td>
      <Td>{gender}</Td>
      <Td>{isApproved ? "Yes" : "No"}</Td>
    </Tr>
  );
}

const students = [
  {
    roll: 1,
    name: "John Marston",
    gender: "M",
    isApproved: true
  },
  {
    roll: 2,
    name: "Sadey Adler",
    gender: "F",
    isApproved: true
  },
  {
    roll: 3,
    name: "Arthur Morgan",
    gender: "M",
    isApproved: true
  },
  {
    roll: 4,
    name: "Tilly Jackson",
    gender: "F",
    isApproved: true
  },
  {
    roll: 5,
    name: "Micah Bell",
    gender: "M",
    isApproved: false
  },
]

export default function ClassView() {
  // Make network call

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      Class View
      <Table variant="simple">
        <TableCaption>Students of Class V</TableCaption>
        <Thead>
          <Tr>
            <Th>Roll No</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Is Approved?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map(student => <TableItem key={student.roll} {...student} />)}
        </Tbody>
      </Table>
    </Box>
  );
}
