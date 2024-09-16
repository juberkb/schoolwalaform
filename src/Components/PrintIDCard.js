// import { URL } from "@/services/apis"
// import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
// import { map } from "lodash";
// import { useEffect } from "react"
// import Barcode from "react-barcode";

// export const PrintIdCard = ({ allData, school, setAllPrintProps }) => {

//     useEffect(() => {
//         return () => setAllPrintProps()
//     }, [setAllPrintProps])

//     return (
//         <Flex p={4}
//             gap={4}
//             // h={"595pt"}
//             w={"842pt"}
//             flexWrap={"wrap"}
//             style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
//         >
//             {map(allData, (student, i) => (
//                 student ?
//                     <Box
//                         mt={"10pt"}
//                         key={i}
//                         className="no-break"
//                         h={"243.78pt"}
//                         w={"153pt"}
//                         px={"10pt"}
//                         py={"5pt"}
//                         border={"1px solid"}
//                         borderColor={"gray.200"}
//                         borderRadius={10}
//                         bgImage={"url('/assets/id_bg.jpg')"}
//                         bgPosition="center"
//                         bgRepeat="no-repeat"
//                         bgSize="cover"
//                         style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
//                     >
//                         <Flex align={"center"} mx={"-7pt"}>
//                             <Avatar size={"sm"} src={`${URL}${school.logo}`} />
//                             <Box ml={1}>
//                                 <Text textAlign={"center"} fontSize={school.name?.length > 30 ? 11 : school.name?.length > 20 ? 12 : 14} fontWeight={"bold"} letterSpacing={-1}>{school.name}</Text>
//                                 <Text fontSize={10} letterSpacing={-1} textAlign={"center"}>{school.address}</Text>
//                             </Box>
//                         </Flex>
//                         <Box align={"center"} my={2}>
//                             <Avatar size={"lg"} src={`${URL}${student.student_master.photo}`} />
//                             <Text mt={"5pt"} fontSize={14} fontWeight={"bold"}>{student.student_master.studentName}</Text>
//                             <Text fontSize={11} fontWeight={"semibold"}>{student.student_master.fatherName}</Text>
//                         </Box>
//                         <Flex display={"flex"} flexDir={"column"} fontSize={11}>
//                             <Flex>
//                                 <Text w={"30%"} fontWeight={"semibold"}>SR No.</Text>
//                                 <Text w={"70%"} fontWeight={"bold"}>:&nbsp;{student.student_master.srNo}</Text>
//                             </Flex>
//                             <Flex>
//                                 <Text w={"30%"} fontWeight={"semibold"}>Contact</Text>
//                                 <Text w={"70%"} fontWeight={"bold"}>:&nbsp;{student.student_master.fatherContact}</Text>
//                             </Flex>
//                             <Flex>
//                                 <Text w={"30%"} fontWeight={"semibold"}>Class</Text>
//                                 <Text w={"70%"} fontWeight={"bold"}>:&nbsp;{student.class_master.name}&nbsp;&nbsp;({student.stream_master.name})</Text>
//                             </Flex>
//                             <Flex>
//                                 <Text w={"30%"} fontWeight={"semibold"}>Address</Text>
//                                 <Text w={"70%"} fontWeight={"bold"}>:&nbsp;{student.student_master.address}</Text>
//                             </Flex>
//                         </Flex>
//                         <Flex mt={"5pt"} justify={"flex-end"}>
//                             <Box align={"center"}>
//                                 <Image w={"40pt"} h={"15"} src="/assets/sign.png" alt={""} />
//                                 <Text fontSize={10}>Authorised Signature</Text>
//                             </Box>
//                         </Flex>
//                         <Flex justify={"center"}>
//                             <Barcode height={"18"} displayValue={"false"} value={student.student_master.srNo} />
//                         </Flex>
//                     </Box>
//                     :
//                     null
//             ))}
//         </Flex>
//     )
// }