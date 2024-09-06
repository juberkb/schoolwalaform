import React, { useState } from "react";
import AssignStockForm from "./AssignStockForm";
import './AssignStock.css'
import { ChevronRightIcon,ArrowBackIcon,AddIcon } from '@chakra-ui/icons';

import {
 Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  ChakraProvider,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
  Input,
  Stack,
  HStack,
  Select,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch, FiRefreshCcw, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const initialData = [
    {
      srNo: 1,
      AddmissionNo: 1,
      itemName: "School Dress",
      assignedTo: "Akshay Mathur",
      fatherName: "VB Mathur",
      contact: "1234567890",
      class: "5",
      stream: "Science",
      section: "A",
      quantity: 2,
      dateAssigned: "2024-09-01",
      assignedBy: "VB Mathur",
      imageUrl: "https://bit.ly/dan-abramov", // Sample image URL
    },
    {
      srNo: 2,
      AddmissionNo: 2,
      itemName: "Tie-Belt",
      assignedTo: "Aarohi Mathur",
      fatherName: "Sumit Mathur",
      contact: "9876543210",
      class: "6",
      stream: "Commerce",
      section: "B",
      quantity: 1,
      dateAssigned: "2024-09-02",
      assignedBy: "Sumit Mathur",
      imageUrl: "https://bit.ly/sage-adebayo", // Sample image URL
    },
    {
      srNo: 3,
      AddmissionNo: 3,
      itemName: "Books",
      assignedTo: "Rohit Mathur",
      fatherName: "K.B. Mathur",
      contact: "5432167890",
      class: "10",
      stream: "Arts",
      section: "C",
      quantity: 5,
      dateAssigned: "2024-09-03",
      assignedBy: "K.B. Mathur",
      imageUrl: "https://bit.ly/ryan-florence", // Sample image URL
    },
  ];

const AssignStock = () => {
  const [students, setStudents] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = students.filter(
    (student) =>
      student.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.fatherName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setStudents(filteredData);
  };

  const handleReset = () => {
    setSearchQuery("");
    setStudents(initialData); 
  };

  const handleEdit = (student) => {
    console.log("Edit student:", student);
  };

  const handleDelete = (srNo) => {
    setStudents(students.filter((student) => student.srNo !== srNo));
  };
  // drawer 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    // drawer 
  return (

    <ChakraProvider>
      <Box p={5} mt='5rem' className="AssignStockContainer">
      <Box display="flex" alignItems="center">
        {/* Back Arrow */}
        <IconButton 
          icon={<ArrowBackIcon />} 
          aria-label="Go back" 
          variant="ghost" 
          mr={4} 
        />

        {/* Title and Breadcrumb */}
        <Box borderBottom='1px Solid lightgrey' mb='2rem'>
          <Heading as="h2" size="lg" mb={2}>Assign Stock Report</Heading>
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Accounts</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Expense-type</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button ref={btnRef} onClick={onOpen}  leftIcon={<AddIcon />} colorScheme="blue" mt="-4rem" ml='67rem'>
    Add Assign Stock report
      </Button>
        </Box>
     
      </Box>


    
        {/* Drawer Assign Strock Form */}

      <Drawer
      size='lg'
  
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Assigm Stock Details</DrawerHeader>
          <DrawerBody  mt='5rem'>
          <AssignStockForm />
          </DrawerBody>

          <DrawerFooter>
           
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          {/* Drawer Assign Strock Form */}
        {/* Search and Pagination Bar */}
        <HStack justifyContent="space-between" alignItems="center" width="100%" mb="10px">
          {/* Search Bar */}
          <HStack>
            <Input
              height="30px"
              placeholder="Search By Sr No/Name/Father Contact"
              width="300px"
              borderRadius="none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleSearch} height="30px">
              Get
            </Button>
            <HStack spacing={2}>
              <IconButton
                icon={<FiRefreshCcw />}
                aria-label="Reset"
                colorScheme="gray"
                onClick={handleReset}
                size="sm"
              />
              <span>Reset</span> {/* Adding the Reset text next to the icon */}
            </HStack>
          </HStack>

          {/* Select dropdown and pagination */}
          <HStack>
            <Select width="200px" defaultValue="20" borderRadius="none" height="30px" fontSize="16px">
              <option value="10">10 Per Page</option>
              <option value="20">20 Per Page</option>
              <option value="50">50 Per Page</option>
            </Select>

            {/* Pagination */}
            <HStack>
              <IconButton icon={<FiChevronLeft />} aria-label="Previous Page" isDisabled={false} bg={"blue.100"} height="30px" />
              <Text>1 - 2</Text>
              <IconButton icon={<FiChevronRight />} aria-label="Next Page" isDisabled={false} bg={"blue.400"} height="30px" />
            </HStack>
          </HStack>
        </HStack>

        {/* Table */}
        <Table size="sm" p="20px">
          <Thead>
            <Tr bg="blue.500">
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>SR. NO</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>Admission NO</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>ITEM</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>ASSIGNED TO</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>FATHER'S NAME</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>CONTACT</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>CLASS</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>STREAM</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>SECTION</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>QUANTITY</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>DATE</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>ASSIGNED BY</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color='white'>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((student, index) => (
              <Tr key={index}>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.srNo}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.AddmissionNo}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.itemName}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  <Avatar name={student.assignedTo} src={student.imageUrl} width="25px" height="25px" ml=".5rem" mr='1rem' pr=".5rem" />
                  {student.assignedTo}
                </Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.fatherName}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.contact}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.class}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.stream}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.section}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.quantity}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.dateAssigned}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.assignedBy}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        icon={<BsThreeDotsVertical />}
                        variant="outline"
                        aria-label="Actions"
                        size="sm"
                      />
                    </PopoverTrigger>
                    <PopoverContent width='100px'>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Actions</PopoverHeader>
                      <PopoverBody>
                        <Stack spacing={3}>
                          <Button  onClick={() => handleEdit(student)} size="sm">Edit</Button>
                          <Button  onClick={() => handleDelete(student.srNo)} size="sm">Update</Button>
                          <Button  onClick={() => handleDelete(student.srNo)} size="sm">Delete</Button>
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>


    </ChakraProvider>
 
  );
};

export default AssignStock;
