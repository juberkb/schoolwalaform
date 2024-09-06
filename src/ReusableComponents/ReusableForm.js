import React, { useState } from 'react';
import { Grid, FormControl, FormLabel, Input, Select, Button, Stack } from '@chakra-ui/react';

const ReusableForm = ({ fields, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputStyle = (value) => ({
    fontWeight: value ? 'bold' : 'normal',
    color: value ? '#2a4365' : 'inherit',
    borderColor: '#e7eaece0',
    borderRadius: '4px',
    padding: '1rem 0.5rem 0.5rem 0.5rem',
  });

  const selectStyle = (value) => ({
    fontWeight: value ? 'bold' : 'normal',
    color: value ? '#2a4365' : 'inherit',
    borderColor: '#e7eaece0',
    borderRadius: '4px',
    padding: '1rem 0.5rem 0.5rem 0.5rem',
    width: '100%',  // Set width to 100% of parent container
    minWidth: '150px',  // Ensure minimum width for better text visibility
    overflow: 'visible',  // Allow dropdown to expand
    whiteSpace: 'nowrap',  // Ensure the text does not wrap
  
    'option': {
      padding:'1rem 0.5rem 0.5rem 0.5rem',
      fontWeight: 'bold',
      color: '#2a4365',
    },
    '::placeholder': {
        padding:'1rem 0.5rem 0.5rem 0.5rem',
      color: '#2a4365',
      fontWeight: 'bold',
    },
  });
  
  

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
        {fields.map((field) => (
          <FormControl key={field.name} isRequired={field.isRequired} className="floating-label">
            {field.type === 'select' ? (
              <Select
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                sx={selectStyle(formData[field.name])}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value} mb="2rem">
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder || ' '}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                sx={inputStyle(formData[field.name])}
              />
            )}
            {field.label && <FormLabel>{field.label}</FormLabel>}
          </FormControl>
        ))}
      </Grid>

      <Stack mt={6} direction="row" justifyContent="space-between">
        <Button variant="outline" mr={3} type="reset" width="full">
          Cancel
        </Button>
        <Button colorScheme="blue" type="submit" width="full">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ReusableForm;
