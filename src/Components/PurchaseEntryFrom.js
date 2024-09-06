// PurchaseEntryForm.js
import React from 'react';
// import ReusableForm from './ReusableForm';
import ReusableForm from '../ReusableComponents/ReusableForm';

const PurchaseEntryForm = () => {
  const fields = [
    {
      type: 'text',
      name: 'expenseType',
      placeholder: ' ',
      label: 'Expense Type',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'number',
      name: 'amount',
      placeholder: ' ',
      label: 'Amount',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'date',
      name: 'date',
      placeholder: 'Date',
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'text',
      name: 'issuedBy',
      placeholder: ' ',
      label: 'Issued By',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'text',
      name: 'department',
      placeholder: ' ',
      label: 'Department',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'text',
      name: 'purchaseReportBy',
      placeholder: ' ',
      label: 'Purchase Report By',
      isRequired: true,
      className: 'floating-label',
    },
  ];

  const initialData = {
    expenseType: "",
    amount: "",
    date: "",
    issuedBy: "",
    department: "",
    purchaseReportBy: "",
  };

  const handleSubmit = (formData) => {
    // Handle form submission
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Send formData to server if needed
  };

  return (
    <ReusableForm
      fields={fields}
      initialData={initialData}
      onSubmit={handleSubmit}
      submitButtonText="Add Expense"
      cancelButtonText="Cancel"
      onCancel={() => { /* Handle cancel action */ }}
    />
  );
};

export default PurchaseEntryForm;
