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

//     return (<Box m={2} h={"390pt"} border={"1px solid"} borderColor={"gray.200"} borderRadius={5}>
// <Flex h={"100%"} flexDir={"column"} w={"100%"} justify={"space-between"}>
//     <Flex flexDir={"column"} w={"100%"} >
//         <Flex flexDir={"column"} h="fit-content">
//             <Flex mt={"4pt"} borderBottom={"1px solid"} borderColor={"gray.200"} align={"center"}>
//                 <Box w={"25%"} align={"flex-start"}>
//                     <Image w="70%" src="/assets/SmartPaathshala.png" alt="" />
//                 </Box>
//                 <Box w={"50%"} align={"center"}>
//                     <Text fontSize={24} fontWeight={"semibold"}>Paathshala Smart</Text>
//                     <Text fontSize={10}>{"311,3rd Floor, Center Tower, Central Spine, Vidhyadhar Nagar, Jaipur-302023"}</Text>
//                     <Text mt={2} fontSize={20} fontWeight={"semibold"}>Progress Report</Text>
//                     <Text fontSize={13} fontWeight={"semibold"}>Session: 2024-25</Text>
//                 </Box>
//                 <Box w={"25%"}>
//                     <Text fontSize={12} textAlign={"right"}></Text>
//                 </Box>
//             </Flex>

//             <Flex p={2} h={"74pt"} borderBottom={"1px solid"} borderColor={"gray.200"}>
//                 <Box w="50%" fontSize={11}>
//                     <Flex align={"center"}>
//                         <Text w="40%">Roll No. </Text>
//                         <Text ml={2} fontWeight={"semibold"}>: </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Student Name </Text>
//                         <Text ml={2} fontWeight={"semibold"}>: </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Father&apos;s Name </Text>
//                         <Text ml={2} fontWeight={"semibold"}>:  </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Mother&apos;s Name </Text>
//                         <Text ml={2} fontWeight={"semibold"}>:  </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">DOB </Text>
//                         <Text ml={2} fontWeight={"semibold"}>: </Text>
//                     </Flex>
//                 </Box>
//                 <Box w="35%" fontSize={12}>
//                     <Flex align={"center"}>
//                         <Text w="40%">Sr No. </Text>
//                         <Text ml={2} fontWeight={"semibold"}>: </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Class </Text>
//                         <Text ml={2} fontWeight={"semibold"}>: </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Stream </Text>
//                         <Text ml={2} fontWeight={"semibold"}>:  </Text>
//                     </Flex>
//                     <Flex align={"center"}>
//                         <Text w="40%">Section </Text>
//                         <Text ml={2} fontWeight={"semibold"}>:  </Text>
//                     </Flex>
//                 </Box>
//                 <Box w="15%" fontSize={12} align="center">
//                     <Flex w={"fit-content"} h={"100%"} border={"1px solid"} borderColor={"gray.200"}>
//                         <Image h={"100%"} src="/assets/login1.png" alt={""} />
//                     </Flex>
//                 </Box>
//             </Flex>

//             <Flex flexDir={"column"} borderBottom={"1px solid"} borderColor={"gray.200"} py={1}>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th className="table-th" rowSpan={2}>Subject</th>
//                             <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//                             <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//                             <th className="table-th" textAlign={"center"} colSpan={2}>Term 1</th>
//                             <th className="table-th" rowSpan={2}>Grade</th>
//                             <th className="table-th">Total</th>
//                         </tr>
//                         <tr>
//                             <th className="table-th" textAlign={"center"}>Max Marks</th>
//                             <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//                             <th className="table-th" textAlign={"center"}>Max Marks</th>
//                             <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//                             <th className="table-th" textAlign={"center"}>Max Marks</th>
//                             <th className="table-th" textAlign={"center"}>Obt. Marks</th>
//                             <th className="table-th" textAlign={"center"}>300</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {map(new Array(3), (s, i) => (
//                             <tr>
//                                 <td className="table-td" style={{ textAlign: "left", paddingLeft: 2 }}>Mathematics</td>
//                                 <td className="table-td" textAlign={"center"}>100</td>
//                                 <td className="table-td" textAlign={"center"}>70</td>
//                                 <td className="table-td" textAlign={"center"}>100</td>
//                                 <td className="table-td" textAlign={"center"}>70</td>
//                                 <td className="table-td" textAlign={"center"}>100</td>
//                                 <td className="table-td" textAlign={"center"}>70</td>
//                                 <td className="table-td" textAlign={"center"}>C</td>
//                                 <td className="table-td" textAlign={"center"}>210</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <Flex p={1} fontSize={11} fontWeight={"semibold"} flexWrap={"wrap"}>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Result: </Text>
//                         <Text ml={2}>Pass</Text>
//                     </Flex>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Grade: </Text>
//                         <Text ml={2}>C</Text>
//                     </Flex>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Percentage: </Text>
//                         <Text ml={2}>70%</Text>
//                     </Flex>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Rank In Class: </Text>
//                         <Text ml={2}>3</Text>
//                     </Flex>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Attendance: </Text>
//                         <Text ml={2}>187 Out of 232</Text>
//                     </Flex>
//                     <Flex w={"33.33%"}>
//                         <Text fontWeight={"bold"}>Result Date: </Text>
//                         <Text ml={2}>{dayjs().format("DD-MMM-YYYY")}</Text>
//                     </Flex>
//                 </Flex>
//             </Flex>

//             {/* <Flex p={2} borderBottom={"1px solid"} borderColor={"gray.200"}>
//             <Flex flexWrap={"wrap"} border={"1px solid"} borderColor={"gray.300"} fontSize={12} fontWeight={"semibold"}>
//                 <Flex w={"50%"} bg={"gray.100"} px={2} borderRight={"1px solid"} borderBottom={"1px solid"} borderColor={"gray.300"}>
//                     <Text w={"45%"}>Subject</Text>
//                     <Text w={"55%"} pl={2}>Date & Time</Text>
//                 </Flex>
//                 <Flex w={"50%"} bg={"gray.100"} px={2} borderRight={"1px solid"} borderBottom={"1px solid"} borderColor={"gray.300"}>
//                     <Text w={"45%"}>Subject</Text>
//                     <Text w={"55%"} pl={2}>Date & Time</Text>
//                 </Flex>
//                 <SubjectUI />
//                 <SubjectUI />
//                 <SubjectUI />
//                 <SubjectUI />
//                 <SubjectUI />
//                 <SubjectUI />
//                 <SubjectUI />
//             </Flex>
//         </Flex> */}
//             {/* <Flex p={2}>
//             <Text>Note:- </Text>
//             <Box textAlign={"justify"}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Box>
//         </Flex> */}
//         </Flex>
//     </Flex>
//     <Flex h={"fit-content"} justify={"space-between"} mt={20} p={2} fontSize={13} fontWeight={"semibold"}>
//         <Text borderTop={"1px solid"} borderColor={"gray.200"} px={3}>Class Teacher Signature</Text>
//         <Text borderTop={"1px solid"} borderColor={"gray.200"} px={3}>Principal Signature</Text>
//     </Flex>
// </Flex>
// </Box >
// );
// }
// const SubjectUI = () => {
// return (
// <Flex w={"50%"} px={2} borderRight={"1px solid"} borderColor={"gray.300"} >
// <Text w={"45%"}>Subject</Text>
// <Text w={"55%"}>: &nbsp;{dayjs(new Date()).format("DD-MM-YYYY")}&nbsp; {dayjs(new Date()).format("hh:mm A")}</Text>
// </Flex>
// )
// }