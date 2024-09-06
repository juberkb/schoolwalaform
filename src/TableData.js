import React,{useState} from 'react';
import "./TableData.css"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    GridItem,
    Button,
    Drawer,
    DrawerBody,
 
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    // DrawerFooter,
    // FormControl,
    // FormLabel,
    // Grid,
    // Select,
   
  } from '@chakra-ui/react';
import Myform from './Myform';
  
const TableData = () => {

  const [students, setStudents] = useState([
    {
      firstName: 'Anmol',
      lastName: 'Singh',
      gender: 'male',
      class: '3rd Year',
      course: 'CS',
      dateOfBirth:'5 Aug 1999',
      mobileNumber: '1234567890',
      emailAddress: 'anmol1999@gmail.com',
      address: 'Kota, Rajasthan, India',
     
      section: 'A'
    }
  ]);
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleInputChange = (index, field, value) => {
      const newStudents = [...students];
      newStudents[index][field] = value;
      setStudents(newStudents);
    };
  
    // const handleSubmit = () => {
    //   console.log(students);
    //   onClose();
    // };
  
    return (
      <TableContainer className='TableContainer'>
        <Table variant="striped" colorScheme="white" border="1px" borderColor="Black.200">
          <Thead>
            <Tr>
              <Th border="1px" borderColor="gray.200">first Name</Th>
              <Th border="1px" borderColor="gray.200">Last Name</Th>
              <Th border="1px" borderColor="gray.200">Gender</Th>
              <Th border="1px" borderColor="gray.200">Class</Th>
              <Th border="1px" borderColor="gray.200">Course</Th>
              <Th border="1px" borderColor="gray.200">Date of Birth</Th>
              <Th border="1px" borderColor="gray.200">Email</Th>
              <Th border="1px" borderColor="gray.200">Mobile Number</Th>
              <Th border="1px" borderColor="gray.200">Address</Th>
         
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.firstName}
                    onChange={(e) =>
                      handleInputChange(index, 'firstName', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.lastName}
                    onChange={(e) =>
                      handleInputChange(index, 'lastname', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.gender}
                    onChange={(e) =>
                      handleInputChange(index, 'gender', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.class}
                    onChange={(e) =>
                      handleInputChange(index, 'class', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.course}
                    onChange={(e) =>
                      handleInputChange(index, 'course', e.target.value)
                    }
                  />
                </Td>
                     <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange(index, 'dateOfBirth', e.target.value)
                    }
                  />
                </Td>
<Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.emailAddress}
                    onChange={(e) =>
                      handleInputChange(index, 'emailAddress', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.mobileNumber}
                    onChange={(e) =>
                      handleInputChange(index, 'mobileNumber', e.target.value)
                    }
                  />
                </Td>
                
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.address}
                    onChange={(e) =>
                      handleInputChange(index, 'address', e.target.value)
                    }
                  />
                </Td>
             
           
              </Tr>
            ))}
          </Tbody>
        </Table>
        <GridItem colSpan={2}>
          <Button colorScheme="blue" width="full" mt={20} onClick={onOpen}>
            Register Now
          </Button>
        </GridItem>
  
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader>Register Student</DrawerHeader>

    <DrawerBody>
      <Myform />
    </DrawerBody>

    {/* <DrawerFooter>
      <Button variant="outline" mr={7} onClick={onClose}>
        Cancel
      </Button>
      <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
    </DrawerFooter> */}
  </DrawerContent>
</Drawer>


      </TableContainer>
    );
  };
  
  export default TableData;
  