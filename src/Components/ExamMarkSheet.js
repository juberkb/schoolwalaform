// import { PageHeader } from "@/common/PageHeader";
// import { STATUS } from "@/constant";
// import { useClassSetupStore } from "@/store/classSetup";
// import { Box, HStack, IconButton, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
// import { filter, find, groupBy, map, uniqBy } from "lodash";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { MdLocalPrintshop } from "react-icons/md";
// import { useReactToPrint } from "react-to-print";
// import { PrintMarkSheet } from "./PrintMarkSheet";
// import { CustomSelect } from "@/common/CustomSelect";

// export const ExamMarkSheet = ({ themeColor, sessionMasterId }) => {
//     const [inputValue, setInputValue] = useState()

//     const { getClassSubjectAction, getClassSubjectStatus, allClassSubjects } = useClassSetupStore(s => ({
//         getClassSubjectAction: s.getClassSubjectAction,
//         getClassSubjectStatus: s.getClassSubjectStatus,
//         allClassSubjects: s.allClassSubjects,
//     }))

//     useEffect(() => {
//         if ((getClassSubjectStatus || 1) === STATUS.NOT_STARTED) {
//             getClassSubjectAction()
//         }
//     }, [getClassSubjectAction, getClassSubjectStatus])

//     const inputHandler = (name, val) => {
//         setInputValue(pre => ({ ...pre, [name]: val }))
//     }

//     const classes = useMemo(() => {
//         return groupBy(allClassSubjects, "classMasterId")
//     }, [allClassSubjects])

//     const streamSec = useMemo(() => {
//         return filter(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId))
//     }, [classes, inputValue?.classMasterId, inputValue?.streamMasterId])

//     const secSub = useMemo(() => {
//         return find(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId) && c.sectionMasterId === parseInt(inputValue?.sectionMasterId))
//     }, [classes, inputValue?.classMasterId, inputValue?.sectionMasterId, inputValue?.streamMasterId])


//     const [printProps, setPrintProps] = useState(null)
//     const printRef = useRef(null);

//     const handlePrintClick = (props) => {
//         setPrintProps(props);
//     };

//     const handlePrint = useReactToPrint({
//         content: () => printRef.current,
//     });

//     useEffect(() => {
//         if (printProps) {
//             handlePrint();
//         }
//     }, [printProps, handlePrint]);

//     return (
//         <Box>
//             <PageHeader heading={"Exam MarksSheet"} />
//             <Box p={5} bg={"white"} h={"90%"}>
//                 <Box className="scrollBar" maxH={"100%"} overflowY={"scroll"}>
//                     <HStack>
//                         <CustomSelect w={"32%"} size={"sm"} name={"classMasterId"} label={"Select Class"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(classes, (d, key) => ({ value: key, name: d?.[0]?.class_master?.name }))
//                         } />
//                         <CustomSelect w={"32%"} size={"sm"} notRequire={true} name={"streamMasterId"} label={"Select Stream"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(uniqBy(classes?.[inputValue?.classMasterId], "streamMasterId"), (d, index) => ({ value: d.stream_master.id, name: d.stream_master.name }))
//                         } />
//                         <CustomSelect w={"32%"} size={"sm"} name={"sectionMasterId"} notRequire={true} label={"Select Section"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(uniqBy(streamSec, "sectionMasterId"), (d, index) => ({ value: d.section_master?.id || '', name: d.section_master?.name || '' }))
//                         } />

//                     </HStack>
//                     <TableContainer>
//                         <Table mt={7} w="100%" size={"sm"} variant={"simple"}>
//                             <Thead>
//                                 <Tr bg="gray.100">
//                                     <Th>Roll No.</Th>
//                                     <Th>Name</Th>
//                                     <Th>Father Name</Th>
//                                     <Th>Class</Th>
//                                 </Tr>
//                             </Thead>
//                             <Tbody>
//                                 {map(new Array(2), (m, index) => (
//                                     <Tr key={index} _hover={{ bg: "gray.50" }} cursor={"pointer"}>
//                                         <Td>{index + 101}</Td>
//                                         <Td>Manish Rajput</Td>
//                                         <Td>Abhishek</Td>
//                                         <Td>
//                                             <Tooltip placement="top" label={"Print Admit Card"}>
//                                                 <IconButton
//                                                     size="xs"
//                                                     variant={"ghost"}
//                                                     icon={<MdLocalPrintshop fontSize={18} />}
//                                                     onClick={() => handlePrintClick([])}
//                                                 />
//                                             </Tooltip>
//                                         </Td>
//                                     </Tr>
//                                 ))}
//                             </Tbody>
//                         </Table>
//                     </TableContainer>
//                 </Box>
//                 <Box display={"none"}>
//                     {printProps &&
//                         <Box ref={printRef}>
//                             <PrintMarkSheet setPrintProps={setPrintProps} />
//                             <PrintMarkSheet setPrintProps={setPrintProps} />
//                         </Box>
//                     }
//                 </Box>
//             </Box>
//         </Box>
//     )
// }
// import { PageHeader } from "@/common/PageHeader";
// import { STATUS } from "@/constant";
// import { useClassSetupStore } from "@/store/classSetup";
// import { Box, HStack, IconButton, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
// import { filter, find, groupBy, map, uniqBy } from "lodash";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { MdLocalPrintshop } from "react-icons/md";
// import { useReactToPrint } from "react-to-print";
// import { PrintMarkSheet } from "./PrintMarkSheet";
// import { CustomSelect } from "@/common/CustomSelect";

// export const ExamMarkSheet = ({ themeColor, sessionMasterId }) => {
//     const [inputValue, setInputValue] = useState()

//     const { getClassSubjectAction, getClassSubjectStatus, allClassSubjects } = useClassSetupStore(s => ({
//         getClassSubjectAction: s.getClassSubjectAction,
//         getClassSubjectStatus: s.getClassSubjectStatus,
//         allClassSubjects: s.allClassSubjects,
//     }))

//     useEffect(() => {
//         if ((getClassSubjectStatus || 1) === STATUS.NOT_STARTED) {
//             getClassSubjectAction()
//         }
//     }, [getClassSubjectAction, getClassSubjectStatus])

//     const inputHandler = (name, val) => {
//         setInputValue(pre => ({ ...pre, [name]: val }))
//     }

//     const classes = useMemo(() => {
//         return groupBy(allClassSubjects, "classMasterId")
//     }, [allClassSubjects])

//     const streamSec = useMemo(() => {
//         return filter(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId))
//     }, [classes, inputValue?.classMasterId, inputValue?.streamMasterId])

//     const secSub = useMemo(() => {
//         return find(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId) && c.sectionMasterId === parseInt(inputValue?.sectionMasterId))
//     }, [classes, inputValue?.classMasterId, inputValue?.sectionMasterId, inputValue?.streamMasterId])


//     const [printProps, setPrintProps] = useState(null)
//     const printRef = useRef(null);

//     const handlePrintClick = (props) => {
//         setPrintProps(props);
//     };

//     const handlePrint = useReactToPrint({
//         content: () => printRef.current,
//     });

//     useEffect(() => {
//         if (printProps) {
//             handlePrint();
//         }
//     }, [printProps, handlePrint]);

//     return (
//         <Box>
//             <PageHeader heading={"Exam MarksSheet"} />
//             <Box p={5} bg={"white"} h={"90%"}>
//                 <Box className="scrollBar" maxH={"100%"} overflowY={"scroll"}>
//                     <HStack>
//                         <CustomSelect w={"32%"} size={"sm"} name={"classMasterId"} label={"Select Class"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(classes, (d, key) => ({ value: key, name: d?.[0]?.class_master?.name }))
//                         } />
//                         <CustomSelect w={"32%"} size={"sm"} notRequire={true} name={"streamMasterId"} label={"Select Stream"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(uniqBy(classes?.[inputValue?.classMasterId], "streamMasterId"), (d, index) => ({ value: d.stream_master.id, name: d.stream_master.name }))
//                         } />
//                         <CustomSelect w={"32%"} size={"sm"} name={"sectionMasterId"} notRequire={true} label={"Select Section"} inputValue={inputValue} setInputValue={setInputValue} data={
//                             map(uniqBy(streamSec, "sectionMasterId"), (d, index) => ({ value: d.section_master?.id || '', name: d.section_master?.name || '' }))
//                         } />

//                     </HStack>
//                     <TableContainer>
//                         <Table mt={7} w="100%" size={"sm"} variant={"simple"}>
//                             <Thead>
//                                 <Tr bg="gray.100">
//                                     <Th>Roll No.</Th>
//                                     <Th>Name</Th>
//                                     <Th>Father Name</Th>
//                                     <Th>Class</Th>
//                                 </Tr>
//                             </Thead>
//                             <Tbody>
//                                 {map(new Array(2), (m, index) => (
//                                     <Tr key={index} _hover={{ bg: "gray.50" }} cursor={"pointer"}>
//                                         <Td>{index + 101}</Td>
//                                         <Td>Manish Rajput</Td>
//                                         <Td>Abhishek</Td>
//                                         <Td>
//                                             <Tooltip placement="top" label={"Print Admit Card"}>
//                                                 <IconButton
//                                                     size="xs"
//                                                     variant={"ghost"}
//                                                     icon={<MdLocalPrintshop fontSize={18} />}
//                                                     onClick={() => handlePrintClick([])}
//                                                 />
//                                             </Tooltip>
//                                         </Td>
//                                     </Tr>
//                                 ))}
//                             </Tbody>
//                         </Table>
//                     </TableContainer>
//                 </Box>
//                 <Box display={"none"}>
//                     {printProps &&
//                         <Box ref={printRef}>
//                             <PrintMarkSheet setPrintProps={setPrintProps} />
//                             <PrintMarkSheet setPrintProps={setPrintProps} />
//                         </Box>
//                     }
//                 </Box>
//             </Box>
//         </Box>
//     )
// }


// // index.js