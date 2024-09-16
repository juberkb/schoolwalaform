
import React from 'react';
import { Box, Text, Grid, Image, Divider,Table,Td,Tr,Th,Thead,Tbody } from '@chakra-ui/react';

const SchoolMarksheet = () => {
  return (
//     <Box maxW="900px" mx="auto" p={4} mt={"7rem"} 
//     border={"1px solid"}
//     borderColor={"white"}
//     borderRadius={10}
//     bgImage={"url('bgborder.jpg')"}
//     bgPosition="center"
//     bgRepeat="no-repeat"
//     bgSize="cover"
//     style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
//     >
      
//     <Box textAlign="center" mb={4}>
//         <Text fontSize="2xl" fontWeight="bold">UDAY   NARAYAN   SIKSHAN   SANSTHAN</Text>
//         <Text>Affiliated To: CBSE Board / Affiliation No: 2512A4S200</Text>
//         <Text>Ph +91 8808498469, Email: info@yourschoolname.com</Text>
//         <Text>Visit us: www.yourschoolwebsite.com</Text>
//       </Box>

//       <Divider my={4} />

// {/* logo */}
//       <Grid templateColumns="1fr 2fr 1fr" gap={4} mb={4} >
//         <Box textAlign="center">
//           <Image boxSize="100px" src="logo192.png" alt="School Logo" mx="auto" />
//         </Box>

//         <Box textAlign="center">
//           <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
//           <Text>Academic Session : 2019-2020</Text>
//           <Text>Class : 4</Text>
//         </Box>

//         {/* Student Photo */}
//         <Box textAlign="center">
//           <Image boxSize="100px" src="logo512.png" alt="Student Photo" mx="auto" border={"1px solid red"}/>
//         </Box>
//       </Grid>

//       <Divider my={4} />

//       {/* Student Information */}
//       <Box p={4}>
//         <Grid templateColumns="2fr 1fr" gap={6}>
//           <Box>
//             <Text><strong>Name of Student:</strong> SHAHVEZ</Text>
//             <Text><strong>Mother's Name:</strong> MRS. HEENA</Text>
//             <Text><strong>Father's Name:</strong> MR. RAJBEER</Text>
//             <Text><strong>Address:</strong> NOIDA SECTOR 52, UTTAR-PRADESH</Text>
//           </Box>
//           <Box>
//             <Text><strong>Roll No:</strong> N01</Text>
//             <Text><strong>Admission No:</strong> 122</Text>
//             <Text><strong>Date of Birth:</strong> 24/09/2014</Text>
//           </Box>
//         </Grid>
//       </Box>
      
//       <Box w="100%" p={4} borderRadius="md">
//             <Table size="sm">
//                 <Thead>
//                     <Tr>
//                         <Th rowSpan={2} border={"1px solid black"} >Subject</Th>
//                         <Th colSpan={5} border={"1px solid black"} textAlign="center" >Term I (50)</Th>
//                         <Th colSpan={5} border={"1px solid black"} textAlign="center">Term II (50)</Th>
//                         <Th colSpan={2} border={"1px solid black"} textAlign="center">Overall</Th>
//                     </Tr>
//                     <Tr >
//                         <Th border={"1px solid black"}>FA-1</Th>
//                         <Th border={"1px solid black"}>SA-1</Th>
//                         <Th border={"1px solid black"}>FA-2</Th>
//                         <Th border={"1px solid black"}>FA-3</Th>
//                         <Th border={"1px solid black"}>Total</Th>
//                         <Th border={"1px solid black"}>FA-3</Th>
//                         <Th border={"1px solid black"}>SA-2</Th>
//                         <Th border={"1px solid black"}>AC+BW</Th>
//                         <Th border={"1px solid black"}>Total</Th>
//                         <Th border={"1px solid black"}>Grand Total</Th>
//                         <Th border={"1px solid black"}>Grade</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     <Tr>
//                         <Td border={"1px solid black"}>HINDI</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>100</Td>
//                         <Td border={"1px solid black"}>C1</Td>
//                     </Tr>
//                     <Tr>
//                         <Td border={"1px solid black"}>English</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>100</Td>
//                         <Td border={"1px solid black"}>C1</Td>
//                     </Tr>
//                     <Tr>
//                         <Td border={"1px solid black"}>Social Science</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>100</Td>
//                         <Td border={"1px solid black"}>C1</Td>
//                     </Tr>
//                     <Tr>
//                         <Td border={"1px solid black"}>Science</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>100</Td>
//                         <Td border={"1px solid black"}>C1</Td>
//                     </Tr>
//                     <Tr>
//                         <Td border={"1px solid black"}>Math</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>10</Td>
//                         <Td border={"1px solid black"}>50</Td>
//                         <Td border={"1px solid black"}>100</Td>
//                         <Td border={"1px solid black"}>C1</Td>
//                     </Tr>
//                 </Tbody>
//             </Table>

//             <Box display="flex" justifyContent="space-between" mt={4} p={2}>
//                 <Box>
//                     <Text>OVERALL MARKS: 600/1200</Text>
//                 </Box>
//                 <Box>
//                     <Text>PERCENTAGE: 87%</Text>
//                 </Box>
//                 <Box>
//                     <Text>RESULT: Pass</Text>
//                 </Box>
//             </Box>

//   {/* Attendance Table */}
//   <Table variant="simple" size="sm" mb={4}>
//         <Tbody>
//           {/* Attendance */}
//           <Tr>
//             <Td border={"1px solid black"}>Attendance</Td>
//             <Td border={"1px solid black"}>TERM I</Td>
//             <Td border={"1px solid black"}>TERM II</Td>
//           </Tr>
//           <Tr>
//             <Td border={"1px solid black"}>Total Working Days</Td>
//             <Td border={"1px solid black"}>100</Td>
//             <Td border={"1px solid black"}>100</Td>
//           </Tr>
//           <Tr>
//             <Td border={"1px solid black"}>Total Attendance</Td>
//             <Td border={"1px solid black"}>83</Td>
//             <Td border={"1px solid black"}>90</Td>
//           </Tr>
//         </Tbody>
//       </Table>

//       <Divider my={4} />

//       {/* Promotion Section */}
//       <Box mb={4}>
//         <Text>Promoted to Class: 12th</Text>
//         <Text>SCHOOL WILL RE-OPEN ON: ………………… AT ………………………</Text>
//       </Box>

//       <Divider my={4} />

//       <Grid templateColumns="2fr 3fr" gap={4} mb={4}>
//         <Box>
//           <Text fontWeight="bold">CLASS TEACHER'S REMARKS</Text>
//         </Box>
//         <Box>
//           <Text>Remarks of Class Teacher Should Put Here</Text>
//         </Box>
//       </Grid>

//             <Box  p={2}>
// <Text>RULE :</Text>
//                 <Box>
//                     <Text>1: Students are suppossed to keep this card neet and clean</Text>
//                 </Box>
//                 <Box>
//                     <Text>2: In case of the card is lost duplacate card is issued with extra payment fee</Text>
//                 </Box>
//                 <Box>
//                     <Text>3: For any complaint kindly meet personal at school</Text>
//                 </Box>
//             </Box>
//             <Box >
//          <Table variant="simple">
//            <Thead>
//              <Tr>
//                <Th border={"1px solid black"}>Marking range (%)</Th>
//                <Td border={"1px solid black"}>91-100</Td>
//                <Td border={"1px solid black"}>81-90</Td>
//                <Td border={"1px solid black"}>71-80</Td>
//                <Td border={"1px solid black"}>61-70</Td>
//                <Td border={"1px solid black"}>51-60</Td>
//                <Td border={"1px solid black"}>41-50</Td>
//                <Td border={"1px solid black"}>32-40</Td>
//              </Tr>
//            </Thead>
//            <Tbody>
//              <Tr>
//                <Td border={"1px solid black"}>Grade</Td>
//                <Td border={"1px solid black"}>A+</Td>
//                <Td border={"1px solid black"}>A</Td>
//                <Td border={"1px solid black"}>B+</Td>
//                <Td border={"1px solid black"}>B</Td>
//                <Td border={"1px solid black"}>C+</Td>
//                <Td border={"1px solid black"}>C</Td>
//                <Td border={"1px solid black"}>D</Td>
//              </Tr>
//            </Tbody>
//          </Table>
//     </Box>

//         </Box>


//       <Divider my={4} />


//       <Grid templateColumns="1fr 1fr 1fr" gap={4} mt={4} textAlign="center">
//         {/* Date */}
//         <Box>
//           <Text fontWeight="bold">DATE</Text>
//           <Text>24-05-2021</Text>
//         </Box>


//         <Box>
//           <Text fontWeight="bold">SIGNATURE OF CLASS TEACHER</Text>
//         </Box>

//         <Box>
//           <Text fontWeight="bold">SIGNATURE OF PRINCIPAL</Text>
//         </Box>
//       </Grid>


//     </Box>
<Box maxW={"595pt"} maxH={"842pt"}
border={"none"}
borderColor={"white"}
borderRadius={10}
bgImage={"url('/assets/bgborder.jpg')"}
bgPosition="center"
bgRepeat="no-repeat"
bgSize="cover"
style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
>
  
<Box textAlign="center" mb={1}>
    <Text fontSize="2xl" fontWeight="bold">Paathshala Group of School</Text>
    <Text>Affiliated To: CBSE Board / Affiliation No: 2512A4S200</Text>
    <Text>Ph +91 8808498469, Email: info@yourschoolname.com</Text>
    <Text>Visit us: www.paathshala.com</Text>
  </Box>

  <Divider my={4} />

{/* logo */}
  <Grid templateColumns="1fr 2fr 1fr" gap={4} mt={"-1pt"} >
    <Box textAlign="center">
      <Image boxSize="100px" src="/assets/SmartPaathshala.png" alt="School Logo" mx="auto" />
    </Box>

    <Box textAlign="center">
      <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
      <Text>Academic Session : 2019-2020</Text>
      <Text>Class : 11th</Text>
    </Box>

    {/* Student Photo */}
    <Box textAlign="center">
      <Image boxSize="100px" src="/assets/studenpic.jpg" alt="Student Photo" mx="auto" border={"1px solid red"}/>
    </Box>
  </Grid>

  {/* Student Information */}
  <Box pl={8}>
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
            <Thead>
                <Tr>
                    <Th rowSpan={2} border={"1px solid black"} >Subject</Th>
                    <Th colSpan={5} border={"1px solid black"} textAlign="center" >Term I (50)</Th>
                    <Th colSpan={5} border={"1px solid black"} textAlign="center">Term II (50)</Th>
                    <Th colSpan={2} border={"1px solid black"} textAlign="center">Overall</Th>
                </Tr>
                <Tr >
                    <Th border={"1px solid black"}>FA-1</Th>
                    <Th border={"1px solid black"}>SA-1</Th>
                    <Th border={"1px solid black"}>FA-2</Th>
                    <Th border={"1px solid black"}>FA-3</Th>
                    <Th border={"1px solid black"}>Total</Th>
                    <Th border={"1px solid black"}>FA-3</Th>
                    <Th border={"1px solid black"}>SA-2</Th>
                    <Th border={"1px solid black"}>AC+BW</Th>
                    <Th border={"1px solid black"}>Total</Th>
                    <Th border={"1px solid black"}>Grand Total</Th>
                    <Th border={"1px solid black"}>Grade</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td border={"1px solid black"}>HINDI</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>100</Td>
                    <Td border={"1px solid black"}>C1</Td>
                </Tr>
                <Tr>
                    <Td border={"1px solid black"}>English</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>100</Td>
                    <Td border={"1px solid black"}>C1</Td>
                </Tr>
                <Tr>
                    <Td border={"1px solid black"}>Social Science</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>100</Td>
                    <Td border={"1px solid black"}>C1</Td>
                </Tr>
                <Tr>
                    <Td border={"1px solid black"}>Science</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>100</Td>
                    <Td border={"1px solid black"}>C1</Td>
                </Tr>
                <Tr>
                    <Td border={"1px solid black"}>Math</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>10</Td>
                    <Td border={"1px solid black"}>50</Td>
                    <Td border={"1px solid black"}>100</Td>
                    <Td border={"1px solid black"}>C1</Td>
                </Tr>
            </Tbody>
        </Table>

        <Box display="flex" justifyContent="space-between" mt={1} p={2}>
            <Box>
                <Text>OVERALL MARKS: <strong>600/1200</strong></Text>
            </Box>
            <Box>
                <Text>PERCENTAGE: <strong>87%</strong></Text>
            </Box>
            <Box>
                <Text>RESULT: <strong>Pass</strong></Text>
            </Box>
        </Box>

{/* Attendance Table */}
<Table variant="simple" size="sm" mb={4}>
    <Tbody>
      {/* Attendance */}
      <Tr>
        <Td border={"1px solid black"}>Attendance</Td>
        <Td border={"1px solid black"}>TERM I</Td>
        <Td border={"1px solid black"}>TERM II</Td>
      </Tr>
      <Tr>
        <Td border={"1px solid black"}>Total Working Days</Td>
        <Td border={"1px solid black"}>100</Td>
        <Td border={"1px solid black"}>100</Td>
      </Tr>
      <Tr>
        <Td border={"1px solid black"}>Total Attendance</Td>
        <Td border={"1px solid black"}>83</Td>
        <Td border={"1px solid black"}>90</Td>
      </Tr>
    </Tbody>
  </Table>

  {/* <Divider my={4} />


  <Box mb={4}>
    <Text>Promoted to Class: 12th</Text>
    <Text>SCHOOL WILL RE-OPEN ON: ………………… AT ………………………</Text>
  </Box>

  <Divider my={4} /> */}

  {/* <Grid templateColumns="2fr 3fr" gap={4} mb={4}>
    <Box>
      <Text fontWeight="bold">CLASS TEACHER'S REMARKS</Text>
    </Box>
    <Box>
      <Text>Remarks of Class Teacher Should Put Here</Text>
    </Box>
  </Grid> */}

        <Box  mt={"0pt"}>
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
     <Table variant="simple" mt={"12pt"}>
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


  <Divider my={1} />


  <Grid templateColumns="1fr 2fr 2fr" gap={3} mt={1} textAlign="center">
    {/* Date */}
    <Box>
      <Text fontWeight="bold">DATE</Text>
      <Text>24-05-2021</Text>
    </Box>


    <Box>
      <Text fontWeight="bold">SIGNATURE OF CLASS TEACHER</Text>
    </Box>

    <Box>
      <Text fontWeight="bold">SIGNATURE OF PRINCIPAL</Text>
    </Box>
  </Grid>


</Box>

       
  );
};

export default SchoolMarksheet;
