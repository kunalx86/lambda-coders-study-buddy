import { Box, FormLabel, Heading, Input, Select, Text, Button } from "@chakra-ui/react";

export default function SportsView() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Heading>
        <Text textAlign={"center"}>Sports!</Text>
      </Heading>
      <Text textAlign={"center"}>
        Students playing for the school team will be rewarded with various
        incentives including but not limited to extra marks in cirriculum
      </Text>
      <Box p={6} as={"form"}>
        <FormLabel>
          Roll No
        </FormLabel>
        <Input
          w={"120px"}
          name={"roll"}
          id={"roll"}
        />
        <FormLabel>
          Sports currently playing
        </FormLabel>
        <Select w={"200px"}>
          <option>Cricket</option>
          <option>Football</option>
          <option>Basketball</option>
          <option>Kabaddi</option>
        </Select>
        <Button mt={3}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
