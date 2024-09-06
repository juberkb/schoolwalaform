// Enquiry.js
import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";

function Enquiry() {
  return (
    <VStack p={5}>
      <Box as={FaQuestionCircle} size="40px" />
      <Text fontSize="xl">Enquiry Page</Text>
      <Text>This is the Enquiry page content.</Text>
    </VStack>
  );
}

export default Enquiry;
