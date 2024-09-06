import React, { useState } from 'react';
import { Box, Grid, FormControl, FormLabel, Input, Select, Button, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import "./AssignStock.css";  

const PurchaseEntryForm = () => {
  const [formData, setFormData] = useState({
    expenseType: "",
    amount: "",
    date: "",
    issuedBy: "",
    department: "",
    purchaseReportBy:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

   <div>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
          
        <FormControl isRequired className="dropdownsSelect">
            <Select
              name="expenseType"
              placeholder="Expense Type"
              value={formData.expenseType}
              onChange={handleInputChange}
            >
              <option value="dress">Dress</option>
              <option value="tie-belt">Tie-Belt</option>
              <option value="books">Books</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="amount"
              placeholder=" "
              value={formData.amount}
              onChange={handleInputChange}
            />
            <FormLabel>Enter Amount</FormLabel>
          </FormControl>
        
          <FormControl isRequired className="dropdownsSelect">
          
          <Input
            name="date"
            type="date"
            placeholder="Enter Date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="issuedBy"
              placeholder=" "
              value={formData.issuedBy}
              onChange={handleInputChange}
            />
            <FormLabel>Issued By</FormLabel>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option value="recieved">Libarary</option>
              <option value="pending">Dress</option>
              <option value="pending">Finance</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label" >
            <Input
              name="purchaseReportBy"
              placeholder=" "
              value={formData.purchaseReportBy}
              onChange={handleInputChange}
            />
            <FormLabel>Purchase Report By</FormLabel>
          </FormControl>

        </Grid>

        <Stack mt={6} direction="row" justifyContent='space-between'>
        
          <Button variant='outline' mr={3} onClick={onClose} type='cancel' width="full">
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit" width="full">
            Submit
          </Button>
        </Stack>
      </form>
   </div>
  );
};

export default PurchaseEntryForm;
