import { Box, Flex, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Divider, Grid } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export const PrintMarkSheet = ({
  studentInfo,
  marks,
  attendance,
  overallMarks,
  percentage,
  result,
  date,
  teacherRemarks,
  principalRemarks
}) => {
  
  return (
    <Box
      maxW={"595pt"} maxH={"842pt"}
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

      <Grid templateColumns="1fr 2fr 1fr" gap={4} mt={"-1pt"}>
        <Box textAlign="center">
          <Image boxSize="100px" src="/assets/SmartPaathshala.png" alt="School Logo" mx="auto" />
        </Box>

        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">Academic Report</Text>
          <Text>Academic Session : {studentInfo.session}</Text>
          <Text>Class : {studentInfo.class}</Text>
        </Box>

        <Box textAlign="center">
          <Image boxSize="100px" src={studentInfo.photoUrl} alt="Student Photo" mx="auto" border={"1px solid red"} />
        </Box>
      </Grid>

      <Box pl={8}>
        <Grid templateColumns="2fr 1fr" gap={6}>
          <Box>
            <Text><strong>Name of Student:</strong> {studentInfo.name}</Text>
            <Text><strong>Mother's Name:</strong> {studentInfo.motherName}</Text>
            <Text><strong>Father's Name:</strong> {studentInfo.fatherName}</Text>
            <Text><strong>Address:</strong> {studentInfo.address}</Text>
          </Box>
          <Box>
            <Text><strong>Roll No:</strong> {studentInfo.rollNo}</Text>
            <Text><strong>Admission No:</strong> {studentInfo.admissionNo}</Text>
            <Text><strong>Date of Birth:</strong> {studentInfo.dob}</Text>
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
            {marks.map((subject, index) => (
              <Tr key={index}>
                <Td border={"1px solid black"}>{subject.name}</Td>
                <Td border={"1px solid black"}>{subject.term1.fa1}</Td>
                <Td border={"1px solid black"}>{subject.term1.sa1}</Td>
                <Td border={"1px solid black"}>{subject.term1.fa2}</Td>
                <Td border={"1px solid black"}>{subject.term1.fa3}</Td>
                <Td border={"1px solid black"}>{subject.term1.total}</Td>
                <Td border={"1px solid black"}>{subject.term2.fa1}</Td>
                <Td border={"1px solid black"}>{subject.term2.sa2}</Td>
                <Td border={"1px solid black"}>{subject.term2.acBw}</Td>
                <Td border={"1px solid black"}>{subject.term2.total}</Td>
                <Td border={"1px solid black"}>{subject.overall.total}</Td>
                <Td border={"1px solid black"}>{subject.grade}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Box display="flex" justifyContent="space-between" mt={1} p={2}>
          <Box>
            <Text>OVERALL MARKS: <strong>{overallMarks}</strong></Text>
          </Box>
          <Box>
            <Text>PERCENTAGE: <strong>{percentage}</strong></Text>
          </Box>
          <Box>
            <Text>RESULT: <strong>{result}</strong></Text>
          </Box>
        </Box>

        <Table variant="simple" size="sm" mb={4}>
          <Tbody>
            <Tr>
              <Td border={"1px solid black"}>Attendance</Td>
              <Td border={"1px solid black"}>TERM I</Td>
              <Td border={"1px solid black"}>TERM II</Td>
            </Tr>
            <Tr>
              <Td border={"1px solid black"}>Total Working Days</Td>
              <Td border={"1px solid black"}>{attendance.term1.totalDays}</Td>
              <Td border={"1px solid black"}>{attendance.term2.totalDays}</Td>
            </Tr>
            <Tr>
              <Td border={"1px solid black"}>Total Attendance</Td>
              <Td border={"1px solid black"}>{attendance.term1.attendance}</Td>
              <Td border={"1px solid black"}>{attendance.term2.attendance}</Td>
            </Tr>
          </Tbody>
        </Table>

        <Box mt={"0pt"}>
          <Text>RULE :</Text>
          <Box>
            <Text>1: Students are supposed to keep this card neat and clean</Text>
          </Box>
          <Box>
            <Text>2: In case of the card is lost duplicate card is issued with extra payment fee</Text>
          </Box>
          <Box>
            <Text>3: For any complaint kindly meet personnel at school</Text>
          </Box>
        </Box>

        <Box>
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

        <Divider my={1} />

        <Grid templateColumns="1fr 1fr 1fr" gap={4} mt={"12pt"}>
          <Box textAlign="center">
            <Text fontWeight="bold">Signature of Parent / Guardian</Text>
            <Text>................................................</Text>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="bold">Signature of Class Teacher</Text>
            <Text>................................................</Text>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="bold">Principal's Signature</Text>
            <Text>................................................</Text>
          </Box>
        </Grid>

        <Box>
          <Text fontSize="sm" textAlign="right" mt={4}>Date: {date}</Text>
          <Text fontSize="sm" textAlign="right">Teacher's Remarks: {teacherRemarks}</Text>
          <Text fontSize="sm" textAlign="right">Principal's Remarks: {principalRemarks}</Text>
        </Box>
      </Box>
    </Box>
  );
};

PrintMarkSheet.propTypes = {
  studentInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    motherName: PropTypes.string.isRequired,
    fatherName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rollNo: PropTypes.string.isRequired,
    admissionNo: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    session: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
  marks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    term1: PropTypes.shape({
      fa1: PropTypes.number,
      sa1: PropTypes.number,
      fa2: PropTypes.number,
      fa3: PropTypes.number,
      total: PropTypes.number,
    }).isRequired,
    term2: PropTypes.shape({
      fa1: PropTypes.number,
      sa2: PropTypes.number,
      acBw: PropTypes.number,
      total: PropTypes.number,
    }).isRequired,
    overall: PropTypes.shape({
      total: PropTypes.number,
    }).isRequired,
    grade: PropTypes.string,
  })).isRequired,
  attendance: PropTypes.shape({
    term1: PropTypes.shape({
      totalDays: PropTypes.number,
      attendance: PropTypes.number,
    }).isRequired,
    term2: PropTypes.shape({
      totalDays: PropTypes.number,
      attendance: PropTypes.number,
    }).isRequired,
  }).isRequired,
  overallMarks: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  teacherRemarks: PropTypes.string.isRequired,
  principalRemarks: PropTypes.string.isRequired,
};





// When you use this component, you need to pass the required data as props:


<PrintMarkSheet
  studentInfo={{
    name: "John Doe",
    motherName: "Jane Doe",
    fatherName: "Jack Doe",
    address: "123 Main St, Springfield",
    rollNo: "12345",
    admissionNo: "67890",
    dob: "01/01/2005",
    session: "2024-25",
    class: "10",
    photoUrl: "/path/to/photo.jpg",
  }}
  marks={[
    {
      name: "Mathematics",
      term1: { fa1: 20, sa1: 30, fa2: 25, fa3: 28, total: 103 },
      term2: { fa1: 22, sa2: 30, acBw: 24, total: 76 },
      overall: { total: 179 },
      grade: "A",
    },
    // Add more subjects
  ]}
  attendance={{
    term1: { totalDays: 180, attendance: 170 },
    term2: { totalDays: 180, attendance: 175 },
  }}
  overallMarks={179}
  percentage="89.5%"
  result="Pass"
  date="15 September 2024"
  teacherRemarks="Excellent performance"
  principalRemarks="Well done"
/>
