// AssignStockForm.js
import React from 'react';
// import CommonForm from './CommonForm';
import ReusableForm from '../ReusableComponents/ReusableForm';

const AssignStockForm = () => {
  const fields = [
    {
      name: 'itemName',
      type: 'select',
      placeholder: 'Select Item Name',
      label: 'Item Name',
      isRequired: true,
      options: [
        { label: 'Dress', value: 'dress' },
        { label: 'Tie-Belt', value: 'tie-belt' },
        { label: 'Books', value: 'books' },
      ],
    },
    { name: 'assignedTo', type: 'text', label: 'Assign To', isRequired: true },
    { name: 'fatherName', type: 'text', label: "Father's Name", isRequired: true },
    { name: 'mobile', type: 'tel', label: 'Mobile Number', isRequired: true },
    {
      name: 'class',
      type: 'select',
      placeholder: 'Select Class',
      label: 'Class',
      isRequired: true,
      options: [
        { label: '10th', value: '10th' },
        { label: '11th', value: '11th' },
        { label: '12th', value: '12th' },
      ],
    },
    {
      name: 'stream',
      type: 'select',
      placeholder: 'Select Stream',
      label: 'Stream',
      isRequired: true,
      options: [
        { label: 'Science', value: 'science' },
        { label: 'Commerce', value: 'commerce' },
        { label: 'Arts', value: 'arts' },
      ],
    },
    {
      name: 'section',
      type: 'select',
      placeholder: 'Select Section',
      label: 'Section',
      isRequired: true,
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
      ],
    },
    {
      name: 'gender',
      type: 'select',
      placeholder: 'Select Gender',
      label: 'Gender',
      isRequired: true,
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
    { name: 'quantity', type: 'number', label: 'Enter Quantity', isRequired: true },
    { name: 'date', type: 'date', label: 'Date', isRequired: true },
    { name: 'assignedBy', type: 'text', label: 'Assign By', isRequired: true },
  ];

  const handleSubmit = (data) => {
    console.log('Assigned Stock Data: ', data);
  };

  return <ReusableForm fields={fields} onSubmit={handleSubmit} />;
};

export default AssignStockForm;
