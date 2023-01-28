import { Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import HomeLayout from "../layouts/home";
import {
  Box,
  Flex,
  Stack,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import SignIn from "./auth/signIn";

function JoinOurTeam() {
  const size = useBreakpointValue({ base: "md", md: "lg" });
  const { colorMode } = useColorMode();
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            ml={2}
          >
            Your one stop{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Dashboard
            </Text>{" "}
          </Heading>
        </Stack>
        <Stack
          bg={colorMode === "dark" ? "gray.50" : "navy.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login under your organization
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Joining under your organization gives you the power to manage
              all your problems under one screen!
            </Text>
          </Stack>
          {/* <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="+1 (___) __-___-___"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                Upload CV
              </Button>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box> */}
          <SignIn />
          form
        </Stack>
      </Container>
    </Box>
  );
}

export default function IndexPage() {
  return (
    <>
      <HomeLayout />
      <Heading>
        <Text
          bgClip={"text"}
          fontSize={"5xl"}
          bgGradient="linear(to-r, red.400,pink.400)"
          textAlign={"center"}
        >
          Study Buddy
        </Text>
      </Heading>
      <JoinOurTeam />
    </>
  );
}
