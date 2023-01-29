import { Box, Heading, Text } from "@chakra-ui/react";

export default function ScholarshipView() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Heading>
        <Text textAlign={"center"}>Scholarships!</Text>
      </Heading>
      <Text textAlign={"center"}>
        Students securing more than 80% as well as those seeing amazing
        improvements will be granted a Scholarship by the school The eligible
        studnets so far are:
        <Box mt={2}>
          <Text>1. John Marston</Text>
          <Text>2. Arthur Morgan</Text>
          <Text>3. Hosea</Text>
          <Text>4. Jose Portila</Text>
          <Text>5. Dutch</Text>
        </Box>
      </Text>
    </Box>
  );
}
