// import { Box, Flex, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, Grid, Divider, } from "@chakra-ui/react";
// import dayjs from "dayjs";
// import { map } from "lodash";
// import { useEffect } from "react";

// export const PrintMarkSheet = ({ setPrintProps }) => {
//     const rotate = { transform: 'rotate(-90deg)' }
//     // const rotate = {}

//     useEffect(() => {
//         return () => setPrintProps(null)
//     }, [setPrintProps])

//     return (

//         <Box maxW={"595pt"} maxH={"842pt"}
// border={"none"}
// borderColor={"white"}
// borderRadius={10}
// bgImage={"url('/assets/bgborder.jpg')"}
// bgPosition="center"
// bgRepeat="no-repeat"
// bgSize="cover"
// style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
// >
  
// <Box textAlign="center" mb={1}>
//     <Text fontSize="2xl" fontWeight="bold">Paathshala Group of School</Text>
//     <Text>Affiliated To: CBSE Board / Affiliation No: 2512A4S200</Text>
//     <Text>Ph +91 8808498469, Email: info@yourschoolname.com</Text>
//     <Text>Visit us: www.paathshala.com</Text>
//   </Box>

//   <Divider my={4} />

// {/* logo */}
//   <Grid templateColumns="1fr 2fr 1fr" gap={4} mt={"-1pt"} >
//     <Box textAlign="center">
//       <Image boxSize="100px" src="/assets/SmartPaathshala.png" alt="School Logo" mx="auto" />
//     </Box>

//     <Box textAlign="center">
//       <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
//       <Text>Academic Session : 2019-2020</Text>
//       <Text>Class : 11th</Text>
//     </Box>

//     {/* Student Photo */}
//     <Box textAlign="center">
//       <Image boxSize="100px" src="/assets/studenpic.jpg" alt="Student Photo" mx="auto" border={"1px solid red"}/>
//     </Box>
//   </Grid>

//   {/* Student Information */}
//   <Box pl={8}>
//     <Grid templateColumns="2fr 1fr" gap={6}>
//       <Box>
//         <Text><strong>Name of Student:</strong> SHAHVEZ</Text>
//         <Text><strong>Mother's Name:</strong> MRS. HEENA</Text>
//         <Text><strong>Father's Name:</strong> MR. RAJBEER</Text>
//         <Text><strong>Address:</strong> NOIDA SECTOR 52, UTTAR-PRADESH</Text>
//       </Box>
//       <Box>
//         <Text><strong>Roll No:</strong> N01</Text>
//         <Text><strong>Admission No:</strong> 122</Text>
//         <Text><strong>Date of Birth:</strong> 24/09/2014</Text>
//       </Box>
//     </Grid>
//   </Box>
  
//   <Box w="100%" p={4} borderRadius="md">
//         <Table size="sm">
//             <Thead>
//                 <Tr>
//                     <Th rowSpan={2} border={"1px solid black"} >Subject</Th>
//                     <Th colSpan={5} border={"1px solid black"} textAlign="center" >Term I (50)</Th>
//                     <Th colSpan={5} border={"1px solid black"} textAlign="center">Term II (50)</Th>
//                     <Th colSpan={2} border={"1px solid black"} textAlign="center">Overall</Th>
//                 </Tr>
//                 <Tr >
//                     <Th border={"1px solid black"}>FA-1</Th>
//                     <Th border={"1px solid black"}>SA-1</Th>
//                     <Th border={"1px solid black"}>FA-2</Th>
//                     <Th border={"1px solid black"}>FA-3</Th>
//                     <Th border={"1px solid black"}>Total</Th>
//                     <Th border={"1px solid black"}>FA-3</Th>
//                     <Th border={"1px solid black"}>SA-2</Th>
//                     <Th border={"1px solid black"}>AC+BW</Th>
//                     <Th border={"1px solid black"}>Total</Th>
//                     <Th border={"1px solid black"}>Grand Total</Th>
//                     <Th border={"1px solid black"}>Grade</Th>
//                 </Tr>
//             </Thead>
//             <Tbody>
//                 <Tr>
//                     <Td border={"1px solid black"}>HINDI</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>100</Td>
//                     <Td border={"1px solid black"}>C1</Td>
//                 </Tr>
//                 <Tr>
//                     <Td border={"1px solid black"}>English</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>100</Td>
//                     <Td border={"1px solid black"}>C1</Td>
//                 </Tr>
//                 <Tr>
//                     <Td border={"1px solid black"}>Social Science</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>100</Td>
//                     <Td border={"1px solid black"}>C1</Td>
//                 </Tr>
//                 <Tr>
//                     <Td border={"1px solid black"}>Science</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>100</Td>
//                     <Td border={"1px solid black"}>C1</Td>
//                 </Tr>
//                 <Tr>
//                     <Td border={"1px solid black"}>Math</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>10</Td>
//                     <Td border={"1px solid black"}>50</Td>
//                     <Td border={"1px solid black"}>100</Td>
//                     <Td border={"1px solid black"}>C1</Td>
//                 </Tr>
//             </Tbody>
//         </Table>

//         <Box display="flex" justifyContent="space-between" mt={1} p={2}>
//             <Box>
//                 <Text>OVERALL MARKS: <strong>600/1200</strong></Text>
//             </Box>
//             <Box>
//                 <Text>PERCENTAGE: <strong>87%</strong></Text>
//             </Box>
//             <Box>
//                 <Text>RESULT: <strong>Pass</strong></Text>
//             </Box>
//         </Box>

// {/* Attendance Table */}
// <Table variant="simple" size="sm" mb={4}>
//     <Tbody>
//       {/* Attendance */}
//       <Tr>
//         <Td border={"1px solid black"}>Attendance</Td>
//         <Td border={"1px solid black"}>TERM I</Td>
//         <Td border={"1px solid black"}>TERM II</Td>
//       </Tr>
//       <Tr>
//         <Td border={"1px solid black"}>Total Working Days</Td>
//         <Td border={"1px solid black"}>100</Td>
//         <Td border={"1px solid black"}>100</Td>
//       </Tr>
//       <Tr>
//         <Td border={"1px solid black"}>Total Attendance</Td>
//         <Td border={"1px solid black"}>83</Td>
//         <Td border={"1px solid black"}>90</Td>
//       </Tr>
//     </Tbody>
//   </Table>

//   {/* <Divider my={4} />


//   <Box mb={4}>
//     <Text>Promoted to Class: 12th</Text>
//     <Text>SCHOOL WILL RE-OPEN ON: ………………… AT ………………………</Text>
//   </Box>

//   <Divider my={4} /> */}

//   {/* <Grid templateColumns="2fr 3fr" gap={4} mb={4}>
//     <Box>
//       <Text fontWeight="bold">CLASS TEACHER'S REMARKS</Text>
//     </Box>
//     <Box>
//       <Text>Remarks of Class Teacher Should Put Here</Text>
//     </Box>
//   </Grid> */}

//         <Box  mt={"0pt"}>
// <Text>RULE :</Text>
//             <Box>
//                 <Text>1: Students are suppossed to keep this card neet and clean</Text>
//             </Box>
//             <Box>
//                 <Text>2: In case of the card is lost duplacate card is issued with extra payment fee</Text>
//             </Box>
//             <Box>
//                 <Text>3: For any complaint kindly meet personal at school</Text>
//             </Box>
//         </Box>
//         <Box >
//      <Table variant="simple" mt={"12pt"}>
//        <Thead>
//          <Tr>
//            <Th border={"1px solid black"}>Marking range (%)</Th>
//            <Td border={"1px solid black"}>91-100</Td>
//            <Td border={"1px solid black"}>81-90</Td>
//            <Td border={"1px solid black"}>71-80</Td>
//            <Td border={"1px solid black"}>61-70</Td>
//            <Td border={"1px solid black"}>51-60</Td>
//            <Td border={"1px solid black"}>41-50</Td>
//            <Td border={"1px solid black"}>32-40</Td>
//          </Tr>
//        </Thead>
//        <Tbody>
//          <Tr>
//            <Td border={"1px solid black"}>Grade</Td>
//            <Td border={"1px solid black"}>A+</Td>
//            <Td border={"1px solid black"}>A</Td>
//            <Td border={"1px solid black"}>B+</Td>
//            <Td border={"1px solid black"}>B</Td>
//            <Td border={"1px solid black"}>C+</Td>
//            <Td border={"1px solid black"}>C</Td>
//            <Td border={"1px solid black"}>D</Td>
//          </Tr>
//        </Tbody>
//      </Table>
// </Box>

//     </Box>


//   <Divider my={1} />


//   <Grid templateColumns="1fr 2fr 2fr" gap={3} mt={1} textAlign="center">
//     {/* Date */}
//     <Box>
//       <Text fontWeight="bold">DATE</Text>
//       <Text>24-05-2021</Text>
//     </Box>


//     <Box>
//       <Text fontWeight="bold">SIGNATURE OF CLASS TEACHER</Text>
//     </Box>

//     <Box>
//       <Text fontWeight="bold">SIGNATURE OF PRINCIPAL</Text>
//     </Box>
//   </Grid>


// </Box>

//         // <Box m={2} h={"390pt"} border={"1px solid"} borderColor={"gray.200"} borderRadius={5}>
//         //     <Flex h={"100%"} flexDir={"column"} w={"100%"} justify={"space-between"}>
//         //         <Flex flexDir={"column"} w={"100%"} >
//         //             <Flex flexDir={"column"} h="fit-content">
//         //                 <Flex mt={"4pt"} borderBottom={"1px solid"} borderColor={"gray.200"} align={"center"}>
//         //                     <Box w={"25%"} align={"flex-start"}>
//         //                         <Image w="70%" src="/assets/SmartPaathshala.png" alt="" />
//         //                     </Box>
//         //                     <Box w={"50%"} align={"center"}>
//         //                         <Text fontSize={24} fontWeight={"semibold"}>Paathshala Smart</Text>
//         //                         <Text fontSize={10}>{"311,3rd Floor, Center Tower, Central Spine, Vidhyadhar Nagar, Jaipur-302023"}</Text>
//         //                         <Text mt={2} fontSize={20} fontWeight={"semibold"}>Progress Report</Text>
//         //                         <Text fontSize={13} fontWeight={"semibold"}>Session: 2024-25</Text>
//         //                     </Box>
//         //                     <Box w={"25%"}>
//         //                         <Text fontSize={12} textAlign={"right"}></Text>
//         //                     </Box>
//         //                 </Flex>

//         //                 <Flex p={2} h={"74pt"} borderBottom={"1px solid"} borderColor={"gray.200"}>
//         //                     <Box w="50%" fontSize={11}>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Roll No. </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>: </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Student Name </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>: </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Father&apos;s Name </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>:  </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Mother&apos;s Name </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>:  </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">DOB </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>: </Text>
//         //                         </Flex>
//         //                     </Box>
//         //                     <Box w="35%" fontSize={12}>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Sr No. </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>: </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Class </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>: </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Stream </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>:  </Text>
//         //                         </Flex>
//         //                         <Flex align={"center"}>
//         //                             <Text w="40%">Section </Text>
//         //                             <Text ml={2} fontWeight={"semibold"}>:  </Text>
//         //                         </Flex>
//         //                     </Box>
//         //                     <Box w="15%" fontSize={12} align="center">
//         //                         <Flex w={"fit-content"} h={"100%"} border={"1px solid"} borderColor={"gray.200"}>
//         //                             <Image h={"100%"} src="/assets/login1.png" alt={""} />
//         //                         </Flex>
//         //                     </Box>
//         //                 </Flex>

//         //                 <Flex flexDir={"column"} borderBottom={"1px solid"} borderColor={"gray.200"} py={1}>
//         //                     <table>
//         //                         <thead>
//         //                             <tr>
//         //                                 <th className="table-th" rowSpan={2}>Subject</th>
//         //                                 <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//         //                                 <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//         //                                 <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//         //                                 <th className="table-th" rowSpan={2}>Grade</th>
//         //                                 <th className="table-th">Total</th>
//         //                             </tr>
//         //                             <tr>
//         //                                 <th className="table-th" textAlign={"center"}>Max Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>Max Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>Max Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//         //                                 <th className="table-th" textAlign={"center"}>300</th>
//         //                             </tr>
//         //                         </thead>
//         //                         <tbody>
//         //                             {map(new Array(3), (s, i) => (
//         //                                 <tr>
//         //                                     <td className="table-td" style={{ textAlign: "left", paddingLeft: 2 }}>Mathematics</td>
//         //                                     <td className="table-td" textAlign={"center"}>100</td>
//         //                                     <td className="table-td" textAlign={"center"}>70</td>
//         //                                     <td className="table-td" textAlign={"center"}>100</td>
//         //                                     <td className="table-td" textAlign={"center"}>70</td>
//         //                                     <td className="table-td" textAlign={"center"}>100</td>
//         //                                     <td className="table-td" textAlign={"center"}>70</td>
//         //                                     <td className="table-td" textAlign={"center"}>C</td>
//         //                                     <td className="table-td" textAlign={"center"}>210</td>
//         //                                 </tr>
//         //                             ))}
//         //                         </tbody>
//         //                     </table>

//         //                     <Flex p={1} fontSize={11} fontWeight={"semibold"} flexWrap={"wrap"}>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Result: </Text>
//         //                             <Text ml={2}>Pass</Text>
//         //                         </Flex>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Grade: </Text>
//         //                             <Text ml={2}>C</Text>
//         //                         </Flex>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Percentage: </Text>
//         //                             <Text ml={2}>70%</Text>
//         //                         </Flex>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Rank In Class: </Text>
//         //                             <Text ml={2}>3</Text>
//         //                         </Flex>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Attendance: </Text>
//         //                             <Text ml={2}>187 Out of 232</Text>
//         //                         </Flex>
//         //                         <Flex w={"33.33%"}>
//         //                             <Text fontWeight={"bold"}>Result Date: </Text>
//         //                             <Text ml={2}>{dayjs().format("DD-MMM-YYYY")}</Text>
//         //                         </Flex>
//         //                     </Flex>
//         //                 </Flex>

//         //                 {/* <Flex p={2} borderBottom={"1px solid"} borderColor={"gray.200"}>
//         //     <Flex flexWrap={"wrap"} border={"1px solid"} borderColor={"gray.300"} fontSize={12} fontWeight={"semibold"}>
//         //         <Flex w={"50%"} bg={"gray.100"} px={2} borderRight={"1px solid"} borderBottom={"1px solid"} borderColor={"gray.300"}>
//         //             <Text w={"45%"}>Subject</Text>
//         //             <Text w={"55%"} pl={2}>Date & Time</Text>
//         //         </Flex>
//         //         <Flex w={"50%"} bg={"gray.100"} px={2} borderRight={"1px solid"} borderBottom={"1px solid"} borderColor={"gray.300"}>
//         //             <Text w={"45%"}>Subject</Text>
//         //             <Text w={"55%"} pl={2}>Date & Time</Text>
//         //         </Flex>
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //         <SubjectUI />
//         //     </Flex>
//         // </Flex> */}
//         //                 {/* <Flex p={2}>
//         //     <Text>Note:- </Text>
//         //     <Box textAlign={"justify"}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Box>
//         // </Flex> */}
//         //             </Flex>
//         //         </Flex>
//         //         <Flex h={"fit-content"} justify={"space-between"} mt={20} p={2} fontSize={13} fontWeight={"semibold"}>
//         //             <Text borderTop={"1px solid"} borderColor={"gray.200"} px={3}>Class Teacher Signature</Text>
//         //             <Text borderTop={"1px solid"} borderColor={"gray.200"} px={3}>Principal Signature</Text>
//         //         </Flex>
//         //     </Flex>
//         // </Box >
//     );
// }
// const SubjectUI = () => {
//     return (
//         <Flex w={"50%"} px={2} borderRight={"1px solid"} borderColor={"gray.300"} >
//             <Text w={"45%"}>Subject</Text>
//             <Text w={"55%"}>: &nbsp;{dayjs(new Date()).format("DD-MM-YYYY")}&nbsp; {dayjs(new Date()).format("hh:mm A")}</Text>
//         </Flex>
//     )
// }