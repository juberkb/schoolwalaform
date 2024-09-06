import React, { useState } from 'react';
import { Box, Grid, FormControl, FormLabel, Input, Select, Button, Heading, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import "./AssignStock.css";  // Import the updated CSS

const AssignStockForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    assignedTo: '',
    fatherName: '',
    mobile: '',
    class: '',
    stream: '',
    section: '',
    gender: '',
    quantity: '',
    date: '',
    assignedBy: '',
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // The submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert formData object to FormData format
    const formDataToSend = new FormData();
    
    // Append each form data field to formDataToSend
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    
    try {
      // Post the form data using Axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for FormData format
        },
      });

      console.log('Response:', response.data); // Log the response data for debugging

      // Show success toast
      toast({
        title: "Stock Assigned.",
        description: "The stock has been successfully assigned.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset form data after submission
      setFormData({
        itemName: '',
        assignedTo: '',
        fatherName: '',
        mobile: '',
        class: '',
        stream: '',
        section: '',
        gender: '',
        quantity: '',
        date: '',
        assignedBy: '',
      });
      
    } catch (error) {
      console.error('Error posting data:', error); // Log any errors
      toast({
        title: "Submission Failed.",
        description: "There was an error assigning the stock. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="itemName"
              placeholder="Select ItemName"
              value={formData.itemName}
              onChange={handleInputChange}
            >
              <option value="dress">Dress</option>
              <option value="tie-belt">Tie-Belt</option>
              <option value="books">Books</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="assignedTo"
              placeholder=" "
              value={formData.assignedTo}
              onChange={handleInputChange}
            />
            <FormLabel>Assign To</FormLabel>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="fatherName"
              placeholder=" "
              value={formData.fatherName}
              onChange={handleInputChange}
            />
            <FormLabel>Father's Name</FormLabel>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="mobile"
              type="tel"
              placeholder=" "
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <FormLabel>Mobile Number</FormLabel>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="class"
              placeholder="Select Class"
              value={formData.class}
              onChange={handleInputChange}
            >
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="stream"
              placeholder="Select Stream"
              value={formData.stream}
              onChange={handleInputChange}
            >
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="section"
              placeholder="Select Section"
              value={formData.section}
              onChange={handleInputChange}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="gender"
              placeholder="Select Gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="quantity"
              placeholder=" "
              value={formData.quantity}
              onChange={handleInputChange}
            />
            <FormLabel>Enter Quantity</FormLabel>
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
              name="assignedBy"
              placeholder=" "
              value={formData.assignedBy}
              onChange={handleInputChange}
            />
            <FormLabel>Assign By</FormLabel>
          </FormControl>
        </Grid>

        <Stack mt={6} direction="row" justifyContent='space-between'>
          <Button variant='outline' mr={3} type='reset' width="full">
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

export default AssignStockForm;
