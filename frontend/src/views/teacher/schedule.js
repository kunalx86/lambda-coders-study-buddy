import { Box } from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";

export default function ScheduleView() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <InlineWidget url={"https://calendly.com/mail-kunaljoshi"} />
    </Box>
  )
}