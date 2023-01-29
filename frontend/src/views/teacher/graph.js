import { Box, Stack } from "@chakra-ui/react";
import Conversion from "views/admin/default/components/PieCard";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

export default function GraphView() {
  return (
    <Stack spacing={3} pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <TotalSpent />
      <WeeklyRevenue />
      <Conversion />
    </Stack>
  );
}
