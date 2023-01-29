import React, { useState } from 'react';
import { Checkbox, Stack, Box, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState({});
  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.checked,
    });
  };

  const students = [
    {
      roll: 1,
      name: "John Marston",
      gender: "M",
      isApproved: attendance["student-0"],
    },
    {
      roll: 2,
      name: "Sadey Adler",
      gender: "F",
      isApproved: attendance["student-1"],
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
    }
    // ...and so on
  ];

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <h1>Attendance</h1>
      
      <Table variant="simple">
        <TableCaption>Students of Class V</TableCaption>
        <Thead>
          <Tr>
            <Th>Roll No</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Is Present?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map(student => (
            <Tr key={student.roll}>
              <Td>{student.roll}</Td>
              <Td>{student.name}</Td>
              <Td>{student.gender}</Td>
              <Td><Checkbox
            key={student.roll}
            name={student.name}
            value={student.roll}
            defaultChecked
            onChange={handleChange}
          ></Checkbox></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AttendancePage;
