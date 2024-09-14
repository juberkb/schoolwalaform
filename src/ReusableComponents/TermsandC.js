// import { PageHeader } from "@/common/PageHeader";
// import { STATUS } from "@/constant";
// import { useClassSetupStore } from "@/store/classSetup";
// import { Box, HStack, Container, Heading, Text, ListItem, UnorderedList,Checkbox } from "@chakra-ui/react";
// import { filter, find, groupBy, map, uniqBy } from "lodash";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { MdLocalPrintshop } from "react-icons/md";
// import { useReactToPrint } from "react-to-print";
// import { CustomSelect } from "@/common/CustomSelect";

// export const TermsandC = ({ themeColor, sessionMasterId }) => {
//   const [inputValue, setInputValue] = useState();

//   const { getClassSubjectAction, getClassSubjectStatus, allClassSubjects } = useClassSetupStore(s => ({
//     getClassSubjectAction: s.getClassSubjectAction,
//     getClassSubjectStatus: s.getClassSubjectStatus,
//     // allClassSubjects: s.allClassSubjects,
//   }));

//   useEffect(() => {
//     if ((getClassSubjectStatus || 1) === STATUS.NOT_STARTED) {
//       getClassSubjectAction();
//     }
//   }, [getClassSubjectAction, getClassSubjectStatus]);

//   const inputHandler = (name, val) => {
//     setInputValue(pre => ({ ...pre, [name]: val }));
//   };

//   const classes = useMemo(() => {
//     return groupBy(allClassSubjects, "classMasterId");
//   }, [allClassSubjects]);

//   const streamSec = useMemo(() => {
//     return filter(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId));
//   }, [classes, inputValue?.classMasterId, inputValue?.streamMasterId]);

//   const secSub = useMemo(() => {
//     return find(classes?.[inputValue?.classMasterId], c => c.streamMasterId === parseInt(inputValue?.streamMasterId) && c.sectionMasterId === parseInt(inputValue?.sectionMasterId));
//   }, [classes, inputValue?.classMasterId, inputValue?.sectionMasterId, inputValue?.streamMasterId]);

//   const [printProps, setPrintProps] = useState(null);
//   const printRef = useRef(null);

//   const handlePrintClick = (props) => {
//     setPrintProps(props);
//   };

//   const handlePrint = useReactToPrint({
//     content: () => printRef.current,
//   });

//   useEffect(() => {
//     if (printProps) {
//       handlePrint();
//     }
//   }, [printProps, handlePrint]);

//   const [isChecked, setIsChecked] = useState(false);
//  // Handler for checkbox state
//  const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//     console.log("User checked the box:", e.target.checked);
//   };

//   return (
   
//         <Box height="87vh" display="flex" flexDirection="column">
//           <PageHeader heading={"Exam Terms & Condition"} />
    
         
//           <Box
//             p={5}
//             bg={"white"}
//             flex={1} 
//             overflowY="auto" 
//             className="custom-scrollbar"
//             maxH="calc(100vh - 70px)" 
//             px={10}
//             sx={{
//               scrollbarWidth: "thin",
//               scrollbarColor: `${themeColor}.500 ${themeColor}.100`,
//               "&::-webkit-scrollbar": {
//                 width: "8px",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: `${themeColor}.500`,
//                 borderRadius: "4px",
//               },
//               "&::-webkit-scrollbar-track": {
//                 backgroundColor: `${themeColor}.100`,
//               },
//             }}
//           >
//             <Heading as="h1" size="xl" mb={3} textAlign="center">
//               School Examination Terms and Conditions
//             </Heading>

//             <Box mb={4}>
//               <Heading as="h2" size="md" mb={2}>
//                 1. Eligibility
//               </Heading>
//               <UnorderedList spacing={2}>
//                 <ListItem>
//                   All students must meet the prerequisites for any examination, including but not limited to attendance requirements, submission of required assignments, and any other conditions stipulated by the school.
//                 </ListItem>
//                 <ListItem>
//                   Any student found to have provided false information during the registration process will be disqualified.
//                 </ListItem>
//               </UnorderedList>
//             </Box>
    
//             <Box mb={4}>
//               <Heading as="h2" size="md" mb={2}>
//                 2. Examination Schedule
//               </Heading>
//               <UnorderedList spacing={2}>
//                 <ListItem>
//                   The examination dates, times, and venues will be communicated through official school channels. Students are responsible for checking these announcements regularly.
//                 </ListItem>
//                 <ListItem>
//                   "School Name" reserves the right to reschedule exams due to unforeseen circumstances. In such cases, students will be informed promptly.
//                 </ListItem>
//               </UnorderedList>
//             </Box>
    
//             <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           3. Exam Conduct
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             All students are expected to arrive at the examination venue at least 15 minutes before the scheduled start
//             time.
//           </ListItem>
//           <ListItem>
//             Late arrivals may be denied entry to the exam, depending on the rules set by the exam supervisor.
//           </ListItem>
//           <ListItem>
//             Students must bring their valid school identification and any required materials "e.g., pens, pencils,
//             calculators, etc".
//           </ListItem>
//           <ListItem>
//             Use of unauthorized materials or devices "e.g., mobile phones, smartwatches, etc." during the exam is strictly
//             prohibited. Any violation will result in disqualification.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           4. Cheating and Plagiarism
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             Any form of cheating, including copying from others, using unauthorized resources, or communicating with
//             others during the exam, is strictly prohibited.
//           </ListItem>
//           <ListItem>
//             Students caught cheating or plagiarizing will be subject to disciplinary action, including possible
//             disqualification from the exam and further academic consequences as per the school`s policy.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           5. Special Accommodations
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             Students requiring special accommodations for exams due to disabilities must submit a request in writing to the
//             school administration at least two weeks before the exam date.
//           </ListItem>
//           <ListItem>
//             The school will evaluate the request and make reasonable accommodations where appropriate.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           6. Exam Results
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             Exam results will be announced within the timeframe stipulated by the school. Results will be accessible
//             through official channels, including the school website or portals.
//           </ListItem>
//           <ListItem>
//             In case of disputes regarding exam results, students have the right to request a review within "number of days"
//             days of the result being published. The school`s decision following the review is final.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           7. Absence from Exams
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             Students who miss an exam without a valid reason "e.g., medical emergency" will receive a failing grade unless
//             otherwise stated by the school`s policy.
//           </ListItem>
//           <ListItem>
//             For absences due to valid reasons, students must notify the school as soon as possible and provide appropriate
//             documentation. Rescheduled exams will be at the discretion of the school.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           8. Privacy and Data Protection
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             The school ensures that all personal data related to students and their examination results will be treated
//             with confidentiality in accordance with applicable data protection laws.
//           </ListItem>
//           <ListItem>
//             Examination results may only be disclosed to the student, their legal guardian, or other authorized personnel.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Box mb={4}>
//         <Heading as="h2" size="md" mb={2}>
//           9. Amendments
//         </Heading>
//         <UnorderedList spacing={2}>
//           <ListItem>
//             "School Name" reserves the right to update or modify these Terms and Conditions at any time. Students will be
//             notified of any significant changes via official school communication channels.
//           </ListItem>
//         </UnorderedList>
//       </Box>

//       <Text mt={6}>
//         By participating in any examination conducted by "School Name", you acknowledge that you have read, understood, and
//         agree to abide by these terms and conditions.
//       </Text>

//       <Box mt={6}>
//           <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>
//             I have read and agree to the Terms and Conditions
//           </Checkbox> 
//            </Box>

//           </Box>
//         </Box>

//   );
// };
