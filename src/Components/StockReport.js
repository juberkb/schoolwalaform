import React, { useState } from "react";
import StockReportForm from "./StockReportFrom";
import './AssignStock.css';
import { ChevronRightIcon, ArrowBackIcon, AddIcon } from '@chakra-ui/icons';
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
    itemName: "School Dress",
    itemInStock: "low",
    order: "Yes",
    quantityOforder: "500",
    dateOfOrder: "2024-09-01",
    stockReportBy: "VB Mathur",
    orderFrom: "A2Z School Dress",
    suppliername: "Anmol tanwer",
    suppliercontact: "9876543210",
    orderStatus:"Recievd",
    imageUrl: "https://bit.ly/dan-abramov", // Sample image URL
  },
  {
    srNo: 2,
    itemName: "Books",
    itemInStock: "medium",
    order: "No",
    quantityOforder: "",
    dateOfOrder: "2024-09-01",
    stockReportBy: "VB Mathur",
    orderFrom: "",
    suppliername: "",
    suppliercontact: "",
    orderStatus:"not orderd",
    imageUrl: "https://bit.ly/dan-abramov", // Sample image URL
  },
  {
    srNo: 3,
    itemName: "stationaries",
    itemInStock: "low",
    order: "Yes",
    quantityOforder: "500",
    dateOfOrder: "2024-09-01",
    stockReportBy: "VB Mathur",
    orderFrom: "A2Z stationaries",
    suppliername: "hemant agarwal",
    suppliercontact: "0987654321",
    orderStatus:"pending",
    imageUrl: "https://bit.ly/dan-abramov", // Sample image URL
  },
  {
    srNo: 4,
    itemName: "Tie-Belt",
    itemInStock: "High",
    order: "No",
    quantityOforder: "",
    dateOfOrder: "2024-09-01",
    stockReportBy: "VB Mathur",
    orderFrom: "",
    suppliername: "",
    suppliercontact: "",
    orderStatus:"not orderd",
    imageUrl: "https://bit.ly/dan-abramov", // Sample image URL
  },
  // Add more data as necessary
];

const StockReport = () => {
  const [students, setStudents] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Data with Safety Checks for Undefined Values
  const filteredData = students.filter((student) =>
    (student.itemName && student.itemName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (student.itemEfficiency && student.itemEfficiency.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (student.suppliername && student.suppliername.toLowerCase().includes(searchQuery.toLowerCase()))
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider>
      <Box p={5} mt="5rem" className="AssignStockContainer">
        <Box display="flex" alignItems="center">
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Go back"
            variant="ghost"
            mr={4}
          />

          <Box borderBottom="1px solid lightgrey" mb="2rem">
            <Heading as="h2" size="lg" mb={2}>
              Stock Report
            </Heading>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
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
            <Button
              ref={btnRef}
              onClick={onOpen}
              leftIcon={<AddIcon />}
              colorScheme="blue"
              mt="-4rem"
              ml="67rem"
            >
              Add Assign Stock report
            </Button>
          </Box>
        </Box>

        {/* Drawer for Add Stock Form */}
        <Drawer
          size="lg"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add Stock Report</DrawerHeader>
            <DrawerBody mt="5rem">
       <StockReportForm/>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>

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
              <span>Reset</span>
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
              <IconButton
                icon={<FiChevronLeft />}
                aria-label="Previous Page"
                isDisabled={false}
                bg="blue.100"
                height="30px"
              />
              <Text>1 - 2</Text>
              <IconButton
                icon={<FiChevronRight />}
                aria-label="Next Page"
                isDisabled={false}
                bg="blue.400"
                height="30px"
              />
            </HStack>
          </HStack>
        </HStack>

        {/* Table */}
        <Table size="sm" p="20px">
          <Thead>
            <Tr bg="blue.500">
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">SR. NO</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ITEM NAME</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ITEM IN STOCKk</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ORDER</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">QUANTITY OF ORDER</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">DATE OF ORDER</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">STOCK REPORT BY</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ORDER FROM</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">SUPPLIER NAME</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">SUPPLIER MOBILE NO.</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">Order Status</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((student, index) => (
              <Tr key={index}>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.srNo}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.itemName}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.itemInStock}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.order}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.quantityOforder}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.dateOfOrder}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  <HStack>
                    <Avatar size="sm" src={student.imageUrl} />
                    <Text fontSize="11px" ml={2}>{student.stockReportBy}</Text>
                  </HStack>
                </Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.orderFrom}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.suppliername}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.suppliercontact}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{student.orderStatus}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        aria-label="Options"
                        icon={<BsThreeDotsVertical />}
                        variant="outline"
                        size="sm"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Options</PopoverHeader>
                      <PopoverBody>
                        <Stack>
                          <Button size="sm" colorScheme="blue" onClick={() => handleEdit(student)}>Edit</Button>
                          <Button size="sm" colorScheme="red" onClick={() => handleDelete(student.srNo)}>Delete</Button>
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

export default StockReport;
