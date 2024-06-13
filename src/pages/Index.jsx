import { Box, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, VStack, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Cash Flow",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cash Flow Trends',
      },
    },
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Cashflow Monitoring Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Stat>
            <StatLabel>Total Income</StatLabel>
            <StatNumber>$50,000</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Total Expenses</StatLabel>
            <StatNumber>$30,000</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Net Cash Flow</StatLabel>
            <StatNumber>$20,000</StatNumber>
          </Stat>
        </SimpleGrid>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h2" size="md" mb={4}>
            Recent Transactions
          </Heading>
          <VStack spacing={2} align="stretch">
            <Box p={2} borderWidth="1px" borderRadius="lg">
              <Text>Transaction 1: $500</Text>
            </Box>
            <Box p={2} borderWidth="1px" borderRadius="lg">
              <Text>Transaction 2: $1,200</Text>
            </Box>
            <Box p={2} borderWidth="1px" borderRadius="lg">
              <Text>Transaction 3: $300</Text>
            </Box>
          </VStack>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Line data={data} options={options} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;