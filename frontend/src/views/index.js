import {
  Container,
  Heading,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import HomeLayout from "../layouts/home";
import { useHistory } from "react-router-dom";
import { Box, Stack, SimpleGrid } from "@chakra-ui/react";
import SignIn from "./auth/signIn";

function JoinOurTeam() {
  const { colorMode } = useColorMode();
  const history = useHistory();
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
              Joining under your organization gives you the power to manage all
              your problems under one screen!
            </Text>
          </Stack>
          <SignIn />
        </Stack>
      </Container>
      <Box alignSelf={"center"} justifySelf={"center"}>
        <Heading>
          <Text textAlign={"center"}>Navigation Links</Text>
        </Heading>
        <HStack
          ml={"35%"}
          mb={2}
          alignSelf={"center"}
          alignItems={"center"}
          spacing={8}
          mt={2}
        >
          <Box
            bg={"navy.600"}
            p={3}
            h={"120px"}
            borderRadius={"md"}
            onClick={() => history.push("/teacher")}
          >
            <Heading fontSize={"md"}>
              <Text textAlign={"center"}>Go to Teacher's Dashboard</Text>
            </Heading>
          </Box>
          <Box
            bg={"navy.600"}
            p={3}
            h={"120px"}
            borderRadius={"md"}
            onClick={() => history.push("/admin")}
          >
            <Heading fontSize={"md"}>
              <Text>Go to Admin's Dashboard</Text>
            </Heading>
          </Box>
        </HStack>
      </Box>
      <Box alignSelf={"center"} justifySelf={"center"}>
        <Heading>
          <Text textAlign={"center"}>Test Links</Text>
        </Heading>
        <HStack
          ml={"25%"}
          mb={2}
          alignSelf={"center"}
          alignItems={"center"}
          spacing={8}
          mt={2}
        >
          <Box
            bg={"navy.600"}
            p={3}
            w={"210px"}
            h={"120px"}
            borderRadius={"md"}
            onClick={() => history.push("/student/weeklytest")}
          >
            <Heading fontSize={"md"}>
              <Text textAlign={"center"}>Weekly Test</Text>
            </Heading>
          </Box>
          <Box
            bg={"navy.600"}
            p={3}
            w={"210px"}
            h={"120px"}
            borderRadius={"md"}
            onClick={() => history.push("/student/aptitudetest")}
          >
            <Heading fontSize={"md"}>
              <Text textAlign={"center"}>Aptitude Test</Text>
            </Heading>
          </Box>
          <Box
            bg={"navy.600"}
            p={3}
            w={"210px"}
            h={"120px"}
            borderRadius={"md"}
            onClick={() => history.push("/student/community")}
          >
            <Heading fontSize={"md"}>
              <Text textAlign={"center"}>Student Community</Text>
            </Heading>
          </Box>
        </HStack>
      </Box>
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
