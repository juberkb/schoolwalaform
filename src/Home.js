import { Box, VStack, HStack, SimpleGrid, Text, IconButton, Input, } from "@chakra-ui/react";
import { FaChartBar, FaUser,FaUsers, FaBoxes, FaTruckLoading,  } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

import "./Home.css"

function Home() {

  return (
    <HStack spacing={0} align="start" className="homeConatiner" mt={10}>
      {/* Sidebar */}
      <VStack bg="blue.800" color="white"  w="8%" h="100vh" spacing={6}  pt={20}>
        
      <VStack spacing={1} mt={20}>
      <IconButton
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<FaChartBar />}
         />
  <Text>Dashboard</Text>
  </VStack>

  <Link to="/student-admission" >
        <VStack spacing={1}>
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Stock"
            fontSize="20px"
            icon={<FaUsers />} 
          />
          <Text>Student</Text>
        </VStack>
      </Link>

  <VStack spacing={1}>
      <IconButton
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<FaBoxes />}
         />
  <Text>Stock</Text>
  </VStack>

  <VStack spacing={1}>
      <IconButton
  variant='outline'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='20px'
  icon={<FaTruckLoading />}
         />
  <Text>Supplier</Text>
  </VStack>
   </VStack>

      {/* Main Content */}
      <VStack flex="1" mt={4} >
        {/* Navbar home pGE*/}
        <HStack w="full" justify="space-between" bg="blue.800" color="white">
        <Box fontSize="2xl" fontWeight="bold">Meri School</Box>
          <HStack spacing={4}>
            <Text>Session: 2024-2025</Text>
            <Text>Organization Code: RAJTEMPRAM309</Text>
            <Input placeholder="Search Student" />
            <IconButton aria-label="User Profile" icon={<FaUser />} mr={5}/>
          </HStack>
        </HStack>
        <Text className="textWelcomeBack">Welcome Back</Text>
        {/* Warning Message */}
        

        {/* Stats Grid */}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mt={5} w="full" p={20}>
          <Box bg="blue.400" p={5} borderRadius="md" color="white">
            <Text fontSize="xl">Total Fees</Text>
            <Text fontSize="3xl">₹ 1275000</Text>
          </Box>
          <Box bg="green.400" p={5} borderRadius="md" color="white">
            <Text fontSize="xl">Total Deposit</Text>
            <Text fontSize="3xl">₹ 27200</Text>
          </Box>
          <Box bg="orange.400" p={5} borderRadius="md" color="white">
            <Text fontSize="xl">Total Discount</Text>
            <Text fontSize="3xl">₹ 6000</Text>
          </Box>
     
        </SimpleGrid>
      </VStack>
    </HStack>
   
  );
}

export default Home;

