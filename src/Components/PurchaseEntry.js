import React, { useState } from "react";
import { ChevronRightIcon, ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  HStack,
  Select,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
} from "@chakra-ui/react";
import { FiSearch, FiRefreshCcw, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import PurchaseEntryForm from "./PurchaseEntryFrom";

const initialExpenses = [
  {
    srNo: 1,
    expenseType: "Dress",
    amount: 200,
    date: "2024-09-01",
    issuedBy: "Akshay Mathur",
    department: "Finance",
    purchaseReportBy:"Rohit agarwal",
  },
  {
    srNo: 2,
    expenseType: "Books",
    amount: 500,
    date: "2024-09-02",
    issuedBy: "Aarohi Mathur",
    department: "Library",
    purchaseReportBy:"Rohit agarwal",
  },
];

const PurchaseEntry = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = expenses.filter(
    (expense) =>
      expense.expenseType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.issuedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setExpenses(filteredData);
  };

  const handleReset = () => {
    setSearchQuery("");
    setExpenses(initialExpenses); 
  };

  const handleEdit = (expense) => {
    console.log("Edit expense:", expense);
  };

  const handleDelete = (srNo) => {
    setExpenses(expenses.filter((expense) => expense.srNo !== srNo));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider>
      <Box p={5} mt='5rem'>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton icon={<ArrowBackIcon />} aria-label="Go back" variant="ghost" mr={4} />
            <Box>
              <Heading as="h2" size="lg" mb={2}>Purchase Report</Heading>
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
            </Box>
          </Box>
          <Button ref={btnRef} onClick={onOpen} leftIcon={<AddIcon />} colorScheme="blue">
            Add Expense
          </Button>
        </Box>

        {/* Drawer for Adding Expense */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="lg">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add New Purchase Items</DrawerHeader>
            <DrawerBody>
  <PurchaseEntryForm/>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* Search and Pagination Bar */}
        <HStack justifyContent="space-between" alignItems="center" mb="10px" mt="20px">
          <HStack>
            <Input
              height="30px"
              placeholder="Search By Type/Issuer"
              width="300px"
              borderRadius="none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleSearch} height="30px">Search</Button>
            <HStack>
              <IconButton icon={<FiRefreshCcw />} aria-label="Reset" colorScheme="gray" onClick={handleReset} size="sm" />
              <span>Reset</span>
            </HStack>
          </HStack>
          <HStack>
            <Select width="200px" defaultValue="20" borderRadius="none" height="30px" fontSize="16px">
              <option value="10">10 Per Page</option>
              <option value="20">20 Per Page</option>
              <option value="50">50 Per Page</option>
            </Select>
            <HStack>
              <IconButton icon={<FiChevronLeft />} aria-label="Previous Page" isDisabled={false} bg="blue.100" height="30px" />
              <Text>1 - 2</Text>
              <IconButton icon={<FiChevronRight />} aria-label="Next Page" isDisabled={false} bg="blue.400" height="30px" />
            </HStack>
          </HStack>
        </HStack>

        {/* Table */}
        <Table size="sm" p="20px">
          <Thead>
            <Tr bg="blue.500">
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">SR. NO</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">EXPENSE TYPE</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">AMOUNT</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">DATE</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ISSUED BY</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">DEPARTMENT</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">Purchase Report</Th>
              <Th border="1px solid lightgray" p={1} fontSize="11px" color="white">ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((expense, index) => (
              <Tr key={index}>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.srNo}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.expenseType}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.amount}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.date}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  {expense.issuedBy}
                </Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.department}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">{expense.purchaseReportBy}</Td>
                <Td border="1px solid lightgray" p={1} fontSize="11px">
                  <Popover>
                    <PopoverTrigger>
                      <IconButton icon={<BsThreeDotsVertical />} variant="outline" aria-label="Actions" size="sm" />
                    </PopoverTrigger>
                    <PopoverContent width="100px">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Actions</PopoverHeader>
                      <PopoverBody>
                        <Stack spacing={3}>
                          <Button onClick={() => handleEdit(expense)} size="sm">Edit</Button>
                          <Button onClick={() => handleDelete(expense.srNo)} size="sm">Delete</Button>
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

export default PurchaseEntry;
