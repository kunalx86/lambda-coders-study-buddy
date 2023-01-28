import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
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
// const { roll, name, gender, isApproved } = props;
const students = [
  {
    standard: 1,
    name: "First",
    classTeacher: "ABC",
    isApproved: true
  },
  {
    standard: 2,
    name: "Second",
    classTeacher: "MNO",
    isApproved: true
  },
  {
    standard: 3,
    name: "Third",
    classTeacher: "PQR",
    isApproved: true
  },
  {
    standard: 4,
    name: "Fourth",
    classTeacher: "XYZ",
    isApproved: true
  },
  {
    standard: 5,
    name: "Fifth",
    classTeacher: "JKL",
    isApproved: true
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
          A look at all the classes of the institute
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
          View the classes and edit/create entries..
        </Text>
      </Flex>
      <Button mt={4} colorScheme='teal' size='md' onClick={() => setOpen(true)} leftIcon={<AddIcon />}>
        Create Class
      </Button>
      {students.map(({ standard, name, classTeacher, isApproved }) => (

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
                    {standard}
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
                    Class Teacher = {classTeacher}
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
                  Class Grade<Text color={brandStars}>*</Text>
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
                  Class Name <Text color={brandStars}>*</Text>
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
                  Class Teacher <Text color={brandStars}>*</Text>
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
