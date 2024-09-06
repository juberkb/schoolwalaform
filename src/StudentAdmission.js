import { Box, VStack, HStack, Text, IconButton} from "@chakra-ui/react";
import { FaChartBar, FaUsers, FaBoxes, FaTruckLoading, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

function StudentAdmission() {
    const [isStudentSidebarOpen, setStudentSidebarOpen] = useState(false);

 
  

    return ( 
        <div className="StudentAdmissionConatiner">
   <VStack bg="blue.800" color="white" w="20%" h="100vh" spacing={6}>
        <Box fontSize="2xl" fontWeight="bold">Meri School</Box>

        <VStack spacing={1}>
          <IconButton aria-label="Students Admission" icon={<FaChartBar />} />
          <Text>Dashboard</Text>
        </VStack>

        <VStack spacing={1} onClick={() => setStudentSidebarOpen(true)}>
          <IconButton aria-label="Students list" icon={<FaUsers />} />
          <Text>Students</Text>
        </VStack>

        <VStack spacing={1}>
          <IconButton aria-label="Student Attendence" icon={<FaBoxes />} />
          <Text>Stock</Text>
        </VStack>

        <VStack spacing={1}>
          <IconButton aria-label="Attendence Report" icon={<FaTruckLoading />} />
          <Text>Supplier</Text>
        </VStack>
      </VStack>

      {/* Secondary Sidebar for Students */}
      {/* {isStudentSidebarOpen && (
        <VStack bg="red.700" color="white"  w="10%" h="100vh" spacing={4} >
          <HStack justify="space-between" w="full" >
            <Text fontSize="xl" fontWeight="bold">Students</Text>
            <IconButton aria-label="Close Sidebar" icon={<FaTimes />} onClick={() => setStudentSidebarOpen(false)} />
          </HStack>
          <VStack spacing={3} align="start">
            <Text>Student Admission</Text>
            <Text>Students List</Text>
            <Text>Student Attendance</Text>
            <Text>Attendance Report</Text>
            <Text>Custom Report</Text>
            <Text>Category Report</Text>
            <Text>Manage SR</Text>
            <Text>SR List</Text>
            <Text>Student TC</Text>
          </VStack>
        </VStack>
      )} */}
        </div>
     );
}

export default StudentAdmission;