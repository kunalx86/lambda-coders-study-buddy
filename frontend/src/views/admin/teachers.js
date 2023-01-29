import { Box, Button, Textarea, Input, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { axiosFlask, axiosFlaskCluster } from "../../axios";
import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter

} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import banner from "assets/img/nfts/NftBanner1.png";
// Assets
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
const sadVideos = [
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eBSeCp__xhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  <iframe width="560" height="315" src="https://www.youtube.com/embed/HPuD7w_TbSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  <iframe width="560" height="315" src="https://www.youtube.com/embed/HwLK9dBQn0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
]

const happyVideos = [
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6QzcF3xdoF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  <iframe width="560" height="315" src="https://www.youtube.com/embed/vUQLEZwxk9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,

]

const cluster = [
  "",
  "Studies good, Scores good",
  "Studies good, Scores bad",
  "Studies bad, Scores good",
  "Studies bad, Scores bad"
]

export function TeacherView() {
  // const { isLoading, data } = useQuery(
  //   "getAllTeachers",
  //   teacherService.getAllTeachers
  // );
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      Teacher View
      <Box minH="260px" minW="75%" mt="auto">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        <Button
          onClick={async () => {
            const { data } = await axiosFlask.post("/predict", {
              review: text,
            });
            const [code] = data;
            setStatus(code === 0 ? "Happy" : "Sad");
          }}
        >
          Predict
        </Button>
        <Text>{status}</Text>
        <Box>
          {
            status === "Sad" ?
              sadVideos.map(video => video) :
              status === "Happy" ? happyVideos.map(video => video) : null
          }
        </Box>
      </Box>
      <Box as={"form"}>
        <Input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
        <Button
          onClick={async () => {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axiosFlaskCluster.post("/csv", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setPrediction(res.data.slice(0, 9));
          }}
        >
          Upload
        </Button>
        <Box>
          {prediction?.length > 0 ? <Text>Analysis of students based on marks uploaded</Text> : null}
          <Table>
            <Thead>
              <Tr>
                <Th>Roll No</Th>
                <Th>Cluster</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prediction?.map(data => (
                <Tr>
                  <Td>{data.roll}</Td>
                  <Td>{cluster[data.cluster]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}

// const { roll, name, gender, isApproved } = props;
const students = [
  {
    roll: 1,
    name: "John Marston",
    gender: "Male",
    isApproved: true
  },
  {
    roll: 2,
    name: "Sadey Adler",
    gender: "Female",
    isApproved: true
  },
  {
    roll: 3,
    name: "Arthur Morgan",
    gender: "Male",
    isApproved: true
  },
  {
    roll: 4,
    name: "Tilly Jackson",
    gender: "Female",
    isApproved: true
  },
  {
    roll: 5,
    name: "Micah Bell",
    gender: "Male",
    isApproved: false
  },
]

export default function Banner() {
  const textColor = "white";
  const textColorSecondary = "blue";
  // const textColorBrand = useColorModeValue("brand.500", "white");
  const textColorBrand = "brand.500";
  // const brandStars = useColorModeValue("brand.500", "brand.400");
  const brandStars = "brand.500";
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // Chakra Color Mode
  return (
    <>
      <Flex
        mt='100px'
        direction='column'
        bgImage={banner}
        bgSize='cover'
        py={{ base: "30px", md: "56px" }}
        px={{ base: "30px", md: "64px" }}
        borderRadius='30px'>
        <Text
          fontSize={{ base: "24px", md: "34px" }}
          color='white'
          mb='14px'
          maxW={{
            base: "100%",
            md: "64%",
            lg: "46%",
            xl: "70%",
            "2xl": "50%",
            "3xl": "42%",
          }}
          fontWeight='700'
          lineHeight={{ base: "32px", md: "42px" }}>
          A look at all the prolific teachers of the institute
        </Text>
        <Text
          fontSize='md'
          color='#E3DAFF'
          maxW={{
            base: "100%",
            md: "64%",
            lg: "40%",
            xl: "56%",
            "2xl": "46%",
            "3xl": "34%",
          }}
          fontWeight='500'
          mb='40px'
          lineHeight='28px'>
          View the profile details of the teachers and edit/create entries..
        </Text>
      </Flex>
      <Button mt={4} colorScheme='teal' size='md' onClick={() => setOpen(true)}>
        Create Teacher
      </Button>
      {students.map(({ roll, name, gender, isApproved }) => (

        <Card p='20px' bg='#EEEADE' mt='15px'>
          <Flex direction={{ base: "column" }} justify='center'>
            <Flex flexDirection='column' justify='space-between' h='100%'>
              <Flex
                justify='space-between'
                direction={{
                  base: "row",
                  md: "column",
                  lg: "row",
                  xl: "column",
                  "2xl": "row",
                }}
                mb='auto'>
                <Flex direction='column'>
                  <Text
                    color='black'
                    fontSize={{
                      base: "xl",
                      md: "lg",
                      lg: "lg",
                      xl: "lg",
                      "2xl": "md",
                      "3xl": "lg",
                    }}
                    mb='5px'
                    fontWeight='bold'
                    me='14px'>
                    {roll}
                  </Text>
                  <Text
                    color='black'
                    fontSize={{
                      base: "xl",
                    }}
                    fontWeight='bold'
                    mb='5px'
                    me='14px'>
                    Name = {name}
                  </Text>
                  <Text
                    color='black'
                    fontSize={{
                      base: "xl",
                    }}
                    fontWeight='bold'
                    mb='5px'
                    me='14px'>
                    Gender = {gender}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      ))
      }
      <br></br>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              zIndex="2"
              direction="column"
              w={{ base: "100%", md: "420px" }}
              maxW="100%"
              background="transparent"
              borderRadius="15px"
              mx={{ base: "auto", lg: "unset" }}
              me="auto"
              mb={{ base: "20px", md: "auto" }}
              alignItems="center"
              align="center"
            >
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"

                >
                  Teacher Email Id<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="name"
                  placeholder="teacher name"
                  color={"navy.700"}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"

                >
                  Gender <Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="name"
                  placeholder="Gender"
                  color={"navy.700"}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />

                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"

                >
                  Roll No <Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="name"
                  placeholder="roll no"
                  color={"navy.700"}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />

                <Button
                  // onClick={login}
                  // disabled={isLoading}
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                >
                  {isLoading ? <Spinner /> : `Create Teacher`}
                </Button>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}
