// import React from 'react';
// import { Box, Text, Grid, Image, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// const Marksheet = () => {
//   return (
//     <Box border="1px solid black" maxW="800px" mx="auto" p={4} mt={"6rem"}>
      
//       {/* School Name */}
//       <Box textAlign="center" p={2} mb={4}>
//         <Text fontSize="xl" fontWeight="bold">School Name</Text>
//       </Box>
      
//       {/* Exam Info and Student Photo */}
//       <Grid templateColumns="2fr 1fr" gap={4} mb={4}>
//         <Box p={4}>
//           <Text>Info about the Exam, Year, Board</Text>
//         </Box>
//         <Box border="1px solid black" p={4} textAlign="center">
//           <Image boxSize="100px" src="student-photo-url" alt="Student Photo" />
//           <Text mt={2}>Student Photo</Text>
//         </Box>
//       </Grid>

//       {/* Roll No, Codes, etc. */}
//       <Box p={2} mb={4}>
//       <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Roll No.</Th>
//               <Th>Center</Th>
//               <Th>district</Th>
//               <Th>Regular/Private</Th>
//               <Th>Category</Th>
//               <Th>Group name</Th>
//               <Th>Ref. No</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             <Tr>
//             <Td>100</Td>
//               <Td>English</Td>
//               <Td>100</Td>
//               <Td>85</Td>
//               <Td>1</Td>
//               <Td>35</Td>
//               <Td>35</Td>
//             </Tr>
//             {/* Add more rows as needed */}
//           </Tbody>
//         </Table>
//       </Box>

//       {/* Student and Parent Details */}
//       <Box p={2} mb={4}>
       
//         <Table variant="simple">
//         <Tr>
//               <Td>English</Td>
//               <Td>100</Td>
//             </Tr>
//             <Tr>
//               <Td>English</Td>
//               <Td>100</Td>
//             </Tr>
//             <Tr>
//               <Td>English</Td>
//               <Td>100</Td>
//             </Tr>
//         </Table>
//         <Text>Student Name, Mother's Name, Father's Name, School Name</Text>
//       </Box>

//       {/* Marks Table */}
//       <Box p={4} mb={4}>
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Subject</Th>
//               <Th>Max Marks</Th>
//               <Th>Marks Obtained</Th>
//               <Th>Materials</Th>
//               <Th>Practical</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             <Tr>
//               <Td>English</Td>
//               <Td>100</Td>
//               <Td>85</Td>
//               <Td>50</Td>
//               <Td>35</Td>
//             </Tr>
//           </Tbody>
//         </Table>
//       </Box>

//       {/* Total Marks, Percentage, Division */}
//       <Box p={2} mb={4}>
//         <Text>All Total, Percentage, Division</Text>
//         {/* <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Subject</Th>
//               <Th>Max Marks</Th>
//               <Th>Marks Obtained</Th>
//               <Th>Materials</Th>
//               <Th>Practical</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             <Tr>
//               <Td>English</Td>
//               <Td>100</Td>
//             </Tr>
//           </Tbody>
//         </Table> */}
//       </Box>

//       {/* Extra Subject */}
//       <Box p={2} mb={4}>
//         <Text>Extra Subject</Text>
//       </Box>

//       {/* Board Info, Date, and Signature */}
//       <Box  p={2}>
//         <Text>Board Info, Date, and Signature</Text>
//       </Box>

//     </Box>
//   );
// };

// export default Marksheet;
import React from 'react';
import { Box, Text, Grid, Image, Divider,Table,Td,Tr,Th,Thead,Tbody } from '@chakra-ui/react';

const SchoolMarksheet = () => {
  return (
    <Box maxW="900px" mx="auto" p={4} mt={"9rem"} 
    border={"1px solid"}
    borderColor={"white"}
    borderRadius={10}
    bgImage={"url('bgborder.jpg')"}
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
    >
      
    <Box textAlign="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">UDAY   NARAYAN   SIKSHAN   SANSTHAN</Text>
        <Text>Affiliated To: CBSE Board / Affiliation No: 2512A4S200</Text>
        <Text>Ph +91 8808498469, Email: info@yourschoolname.com</Text>
        <Text>Visit us: www.yourschoolwebsite.com</Text>
      </Box>

      <Divider my={4} />

{/* logo */}
      <Grid templateColumns="1fr 2fr 1fr" gap={4} mb={4} >
        <Box textAlign="center">
          <Image boxSize="100px" src="logo192.png" alt="School Logo" mx="auto" />
        </Box>

        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
          <Text>Academic Session : 2019-2020</Text>
          <Text>Class : 4</Text>
        </Box>

        {/* Student Photo */}
        <Box textAlign="center">
          <Image boxSize="100px" src="logo512.png" alt="Student Photo" mx="auto" border={"1px solid red"}/>
        </Box>
      </Grid>

      <Divider my={4} />

      {/* Student Information */}
      <Box p={4}>
        <Grid templateColumns="2fr 1fr" gap={6}>
          <Box>
            <Text><strong>Name of Student:</strong> SHAHVEZ</Text>
            <Text><strong>Mother's Name:</strong> MRS. HEENA</Text>
            <Text><strong>Father's Name:</strong> MR. RAJBEER</Text>
            <Text><strong>Address:</strong> NOIDA SECTOR 52, UTTAR-PRADESH</Text>
          </Box>
          <Box>
            <Text><strong>Roll No:</strong> N01</Text>
            <Text><strong>Admission No:</strong> 122</Text>
            <Text><strong>Date of Birth:</strong> 24/09/2014</Text>
          </Box>
        </Grid>
      </Box>
      

      <Box w="100%" p={4} borderRadius="md">
            <Table size="sm">
                <Thead border={"1px solid grey"}>
                    <Tr>
                        <Th rowSpan={2} >Subject</Th>
                        <Th colSpan={5} textAlign="center" >Term I (50)</Th>
                        <Th colSpan={5} textAlign="center">Term II (50)</Th>
                        <Th colSpan={2} textAlign="center">Overall</Th>
                    </Tr>
                    <Tr>
                        <Th>FA-1</Th>
                        <Th>SA-1</Th>
                        <Th>FA-2</Th>
                        <Th>FA-3</Th>
                        <Th>Total</Th>
                        <Th>FA-3</Th>
                        <Th>SA-2</Th>
                        <Th>AC+BW</Th>
                        <Th>Total</Th>
                        <Th>Grand Total</Th>
                        <Th>Grade</Th>
                    </Tr>
                </Thead>
                <Tbody border={"1px solid grey"}>
                    <Tr>
                        <Td>HINDI</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>100</Td>
                        <Td>C1</Td>
                    </Tr>
                    <Tr>
                        <Td>English</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>100</Td>
                        <Td>C1</Td>
                    </Tr>
                    <Tr>
                        <Td>Science</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>100</Td>
                        <Td>C1</Td>
                    </Tr>
                    <Tr>
                        <Td>Math</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>100</Td>
                        <Td>C1</Td>
                    </Tr>
                    <Tr border={"1px solid grey"}>
                        <Td >Social Science</Td>
                        <Td>9</Td>
                        <Td>9</Td>
                        <Td>8</Td>
                        <Td>7</Td>
                        <Td>50</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>10</Td>
                        <Td>50</Td>
                        <Td>100</Td>
                        <Td>C1</Td>
                    </Tr>
                </Tbody>
            </Table>

            <Box display="flex" justifyContent="space-between" mt={4} p={2}>
                <Box>
                    <Text>OVERALL MARKS: 600/1200</Text>
                </Box>
                <Box>
                    <Text>PERCENTAGE: 87%</Text>
                </Box>
                <Box>
                    <Text>RESULT: Pass</Text>
                </Box>
            </Box>
            <Box  p={2}>
<Text>RULE :</Text>
                <Box>
                    <Text>1: Students are suppossed to keep this card neet and clean</Text>
                </Box>
                <Box>
                    <Text>2: In case of the card is lost duplacate card is issued with extra payment fee</Text>
                </Box>
                <Box>
                    <Text>3: For any complaint kindly meet personal at school</Text>
                </Box>
            </Box>
            <Box >
         <Table variant="simple">
           <Thead>
             <Tr>
               <Th border={"1px solid black"}>Marking range (%)</Th>
               <Td border={"1px solid black"}>91-100</Td>
               <Td border={"1px solid black"}>81-90</Td>
               <Td border={"1px solid black"}>71-80</Td>
               <Td border={"1px solid black"}>61-70</Td>
               <Td border={"1px solid black"}>51-60</Td>
               <Td border={"1px solid black"}>41-50</Td>
               <Td border={"1px solid black"}>32-40</Td>
             </Tr>
           </Thead>
           <Tbody>
             <Tr>
               <Td border={"1px solid black"}>Grade</Td>
               <Td border={"1px solid black"}>A+</Td>
               <Td border={"1px solid black"}>A</Td>
               <Td border={"1px solid black"}>B+</Td>
               <Td border={"1px solid black"}>B</Td>
               <Td border={"1px solid black"}>C+</Td>
               <Td border={"1px solid black"}>C</Td>
               <Td border={"1px solid black"}>D</Td>
             </Tr>
           </Tbody>
         </Table>
    </Box>

        </Box>


    </Box>
  );
};

export default SchoolMarksheet;
