import { Textarea, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { axiosFlask, axiosFlaskCluster } from "../../axios";
import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Container, Heading, Text, useColorMode } from "@chakra-ui/react";
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
  ModalFooter,
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
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/eBSeCp__xhI"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/HPuD7w_TbSc"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/HwLK9dBQn0g"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];

const happyVideos = [
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/6QzcF3xdoF8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/vUQLEZwxk9M"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];

const cluster = [
  "",
  "Studies good, Scores good",
  "Studies good, Scores bad",
  "Studies bad, Scores good",
  "Studies bad, Scores bad",
];

export default function PredictionView() {
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
          {status === "Sad"
          ? sadVideos.map((video) => <Box m={1}>{video}</Box>)
            : status === "Happy"
            ? happyVideos.map((video) => <Box m={1}>{video}</Box>)
            : null}
        </Box>
      </Box>
      {window.location.pathname.includes("prediction") ? <Box as={"form"}>
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
          {prediction?.length > 0 ? (
            <Text>Analysis of students based on marks uploaded</Text>
          ) : null}
          <Table>
            <Thead>
              <Tr>
                <Th>Roll No</Th>
                <Th>Cluster</Th>
                <Th>Weak Subject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prediction?.map((data) => (
                <Tr>
                  <Td>{data.roll}</Td>
                  <Td>{cluster[data.cluster]}</Td>
                  <Td>{data["weak-subject"]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box> : null}
    </Box>
  );
}