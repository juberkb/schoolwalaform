// App.js
import React from 'react';
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  IconButton
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const data = [
  {
    srNo: 1,
    itemName: 'School Dress',
    studentName: 'Akshay Mathur',
    fatherName: 'VB Mathur',
    contact: '1234567890',
    class: 5,
    stream: 'Science',
    section: 'A',
    quantity: 2,
    dateAssigned: '2024-09-01',
    assignedBy: 'VB Mathur',
  },
  {
    srNo: 2,
    itemName: 'Tie-Belt',
    studentName: 'Aarohi Mathur',
    fatherName: 'Sumit Mathur',
    contact: '9876543210',
    class: 6,
    stream: 'Commerce',
    section: 'B',
    quantity: 1,
    dateAssigned: '2024-09-02',
    assignedBy: 'Sumit Mathur',
  },
  {
    srNo: 3,
    itemName: 'Books',
    studentName: 'Rohit Mathur',
    fatherName: 'K.B. Mathur',
    contact: '5432167890',
    class: 10,
    stream: 'Arts',
    section: 'C',
    quantity: 5,
    dateAssigned: '2024-09-03',
    assignedBy: 'K.B. Mathur',
  },
];

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
      
        <TableContainer border="1px solid darkgray" maxW="100%" fontSize='sm'>
      <Table size="sm"> 
        <Thead bg="blue.300" fontSize='sm' color="white">
          <Tr >
            <Th border="1px solid white">Sr. No</Th>
            <Th border="1px solid white">Item Name</Th>
            <Th border="1px solid white">Assigned To (Student Name)</Th>
            <Th border="1px solid white">Father's Name</Th>
            <Th border="1px solid white">Contact</Th>
            <Th border="1px solid white">Class</Th>
            <Th border="1px solid white">Stream</Th>
            <Th border="1px solid white">Section</Th>
            <Th border="1px solid white">Quantity</Th>
            <Th border="1px solid white">Date Assigned</Th>
            <Th border="1px solid white">Assigned By</Th>
            <Th border="1px solid white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item, index) => (
            <Tr key={item.id}>
              <Td border="1px solid darkgray">{index + 1}</Td>
              <Td border="1px solid darkgray">{item.itemName}</Td>
              <Td border="1px solid darkgray">
                <HStack spacing={4}>
                  <Avatar name={item.assignedTo} src={item.imageUrl} />
                  <span>{item.assignedTo}</span>
                </HStack>
              </Td>
              <Td border="1px solid darkgray">{item.fathersName}</Td>
              <Td border="1px solid darkgray">{item.contact}</Td>
              <Td border="1px solid darkgray">{item.class}</Td>
              <Td border="1px solid darkgray">{item.stream}</Td>
              <Td border="1px solid darkgray">{item.section}</Td>
              <Td border="1px solid darkgray">{item.quantity}</Td>
              <Td border="1px solid darkgray">{item.dateAssigned}</Td>
              <Td border="1px solid darkgray">{item.assignedBy}</Td>
              <Td border="1px solid darkgray">
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FiMoreVertical />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Update</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
      </Box>
    </ChakraProvider>
  );
}

export default App;
