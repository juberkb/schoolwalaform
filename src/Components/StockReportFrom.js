import React, { useState } from 'react';
import { Box, Grid, FormControl, FormLabel, Input, Select, Button, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import "./AssignStock.css";  // Import the updated CSS

const StockReportForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemInStock: "",
    order: "",
    quantityOforder: "",
    dateOfOrder: "",
    stockReportBy: "",
    orderFrom: "",
    suppliername: "",
    suppliercontact: "",
    orderStatus:"",
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

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="itemInStock"
              placeholder="Item In Stock"
              value={formData.itemInStock}
              onChange={handleInputChange}
            >
              <option value="A">1000</option>
              <option value="B">500</option>
              <option value="C">100</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="order"
              placeholder="Order"
              value={formData.order}
              onChange={handleInputChange}
            >
              <option value="male">Yes</option>
              <option value="female">Not</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="quantityOforder"
              placeholder=" "
              value={formData.quantityOforder}
              onChange={handleInputChange}
            />
            <FormLabel>Enter Quantity</FormLabel>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
          <Input
           name="dateOfOrder"
            type="date"
            placeholder="Date Of order"
            value={formData.dateOfOrder}
            onChange={handleInputChange}
          />
        </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="orderFrom"
              placeholder=" "
              value={formData.orderFrom}
              onChange={handleInputChange}
            />
            <FormLabel>Order From</FormLabel>
          </FormControl>
      
          <FormControl isRequired className="floating-label">
            <Input
              name="suppliername"
              placeholder=" "
              value={formData.suppliername}
              onChange={handleInputChange}
            />
            <FormLabel>Supplier Name</FormLabel>
          </FormControl>

          <FormControl isRequired className="floating-label">
            <Input
              name="suppliercontact"
              type="tel"
              placeholder=" "
              value={formData.suppliercontact}
              onChange={handleInputChange}
            />
            <FormLabel>Supplier Contact Number</FormLabel>
          </FormControl>

          <FormControl isRequired className="dropdownsSelect">
            <Select
              name="orderStatus"
              placeholder="Order Status"
              value={formData.orderStatus}
              onChange={handleInputChange}
            >
              <option value="recieved">recieved</option>
              <option value="pending">pending</option>
              <option value="pending">Not orderd</option>
            </Select>
          </FormControl>

          <FormControl isRequired className="floating-label" >
            <Input
              name="stockReportBy"
              placeholder=" "
              value={formData.stockReportBy}
              onChange={handleInputChange}
            />
            <FormLabel>Stock Report By</FormLabel>
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

export default StockReportForm;
