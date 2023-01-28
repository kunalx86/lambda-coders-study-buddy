import { Box, Button, Textarea, Text, Input, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { axiosFlask, axiosFlaskCluster } from "../../axios";
import { useState } from "react";

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

export default function TeacherView() {
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
  );
}
