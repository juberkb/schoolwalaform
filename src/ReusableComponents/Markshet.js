import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

export const MarksTable = () => {
    return (
        <Box w="100%" p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
            <Table variant="simple" size="sm">
                <Thead>
                    <Tr>
                        <Th rowSpan={2}>Subject</Th>
                        <Th colSpan={5} textAlign="center">Term I (50)</Th>
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
                <Tbody>
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
                </Tbody>
            </Table>

            <Box display="flex" justifyContent="space-between" mt={4}>
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
        </Box>
    );
};
