import { Box, Flex, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, Grid, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { map } from "lodash";

export const PrintMarkSheet = ({ schoolData, studentData, markSheetData, setPrintProps }) => {
    const rotate = { transform: 'rotate(-90deg)' };

    useEffect(() => {
        return () => setPrintProps(null);
    }, [setPrintProps]);

    return (
        <Box maxW={"595pt"} maxH={"842pt"} border={"none"} borderColor={"white"} borderRadius={10}
            bgImage={"url('/assets/bgborder.jpg')"} bgPosition="center" bgRepeat="no-repeat" bgSize="cover"
            style={{ pageBreakInside: "avoid", breakInside: "avoid", pageBreakAfter: "auto" }}
        >
            <Box textAlign="center" mb={1}>
                <Text fontSize="2xl" fontWeight="bold">{schoolData.name}</Text>
                <Text>Affiliated To: {schoolData.affiliation}</Text>
                <Text>Ph {schoolData.phone}, Email: {schoolData.email}</Text>
                <Text>Visit us: {schoolData.website}</Text>
            </Box>
    
            <Divider my={4} />
    
            <Grid templateColumns="1fr 2fr 1fr" gap={4} mt={"-1pt"} >
                <Box textAlign="center">
                    <Image boxSize="100px" src={schoolData.logoUrl} alt="School Logo" mx="auto" />
                </Box>
    
                <Box textAlign="center">
                    <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
                    <Text>Academic Session: {markSheetData.session}</Text>
                    <Text>Class: {studentData.class}</Text>
                </Box>
    
                <Box textAlign="center">
                    <Image boxSize="100px" src={studentData.photoUrl} alt="Student Photo" mx="auto" border={"1px solid red"} />
                </Box>
            </Grid>
    
            <Box pl={8}>
                <Grid templateColumns="2fr 1fr" gap={6}>
                    <Box>
                        <Text><strong>Name of Student:</strong> {studentData.name}</Text>
                        <Text><strong>Mother's Name:</strong> {studentData.motherName}</Text>
                        <Text><strong>Father's Name:</strong> {studentData.fatherName}</Text>
                        <Text><strong>Address:</strong> {studentData.address}</Text>
                    </Box>
                    <Box>
                        <Text><strong>Roll No:</strong> {studentData.rollNo}</Text>
                        <Text><strong>Admission No:</strong> {studentData.admissionNo}</Text>
                        <Text><strong>Date of Birth:</strong> {studentData.dob}</Text>
                    </Box>
                </Grid>
            </Box>
    
            <Box w="100%" p={4} borderRadius="md">
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th rowSpan={2} border={"1px solid black"}>Subject</Th>
                            <Th colSpan={5} border={"1px solid black"} textAlign="center">Term I (50)</Th>
                            <Th colSpan={5} border={"1px solid black"} textAlign="center">Term II (50)</Th>
                            <Th colSpan={2} border={"1px solid black"} textAlign="center">Overall</Th>
                        </Tr>
                        <Tr>
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
                        {map(markSheetData.subjects, (subject, index) => (
                            <Tr key={index}>
                                <Td border={"1px solid black"}>{subject.name}</Td>
                                <Td border={"1px solid black"}>{subject.term1.fa1}</Td>
                                <Td border={"1px solid black"}>{subject.term1.sa1}</Td>
                                <Td border={"1px solid black"}>{subject.term1.fa2}</Td>
                                <Td border={"1px solid black"}>{subject.term1.fa3}</Td>
                                <Td border={"1px solid black"}>{subject.term1.total}</Td>
                                <Td border={"1px solid black"}>{subject.term2.fa3}</Td>
                                <Td border={"1px solid black"}>{subject.term2.sa2}</Td>
                                <Td border={"1px solid black"}>{subject.term2.acBw}</Td>
                                <Td border={"1px solid black"}>{subject.term2.total}</Td>
                                <Td border={"1px solid black"}>{subject.grandTotal}</Td>
                                <Td border={"1px solid black"}>{subject.grade}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
    
                <Box display="flex" justifyContent="space-between" mt={1} p={2}>
                    <Box>
                        <Text>OVERALL MARKS: <strong>{markSheetData.overallMarks}</strong></Text>
                    </Box>
                    <Box>
                        <Text>PERCENTAGE: <strong>{markSheetData.percentage}%</strong></Text>
                    </Box>
                    <Box>
                        <Text>RESULT: <strong>{markSheetData.result}</strong></Text>
                    </Box>
                </Box>
            </Box>
    
            {/* Attendance Table */}
            <Table variant="simple" size="sm" mb={4}>
                <Tbody>
                    <Tr>
                        <Td border={"1px solid black"}>Attendance</Td>
                        <Td border={"1px solid black"}>TERM I</Td>
                        <Td border={"1px solid black"}>TERM II</Td>
                    </Tr>
                    <Tr>
                        <Td border={"1px solid black"}>Total Working Days</Td>
                        <Td border={"1px solid black"}>{markSheetData.attendance.term1.totalDays}</Td>
                        <Td border={"1px solid black"}>{markSheetData.attendance.term2.totalDays}</Td>
                    </Tr>
                    <Tr>
                        <Td border={"1px solid black"}>Total Attendance</Td>
                        <Td border={"1px solid black"}>{markSheetData.attendance.term1.attendance}</Td>
                        <Td border={"1px solid black"}>{markSheetData.attendance.term2.attendance}</Td>
                    </Tr>
                </Tbody>
            </Table>
    
            <Box mt={"0pt"}>
                <Text>RULES:</Text>
                {map(markSheetData.rules, (rule, index) => (
                    <Box key={index}>
                        <Text>{index + 1}: {rule}</Text>
                    </Box>
                ))}
            </Box>
    
            <Divider my={1} />
    
            <Grid templateColumns="1fr 2fr 2fr" gap={3} mt={1} textAlign="center">
                <Box>
                    <Text fontWeight="bold">DATE</Text>
                    <Text>{markSheetData.date}</Text>
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
