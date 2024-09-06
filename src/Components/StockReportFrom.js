// StockReportForm.js
import React from 'react';
// import ReusableForm from './ReusableForm';
import ReusableForm from '../ReusableComponents/ReusableForm';
import { useDisclosure } from '@chakra-ui/react';

const StockReportForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fields = [
    {
      type: 'select',
      name: 'itemName',
      placeholder: 'Select ItemName',
      options: [
        { label: 'Dress', value: 'dress' },
        { label: 'Tie-Belt', value: 'tie-belt' },
        { label: 'Books', value: 'books' },
      ],
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'select',
      name: 'itemInStock',
      placeholder: 'Item In Stock',
      options: [
        { label: '1000', value: 'A' },
        { label: '500', value: 'B' },
        { label: '100', value: 'C' },
      ],
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'select',
      name: 'order',
      placeholder: 'Order',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'Not', value: 'not' },
      ],
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'text',
      name: 'quantityOforder',
      placeholder: ' ',
      label: 'Enter Quantity',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'date',
      name: 'dateOfOrder',
      placeholder: 'Date Of order',
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'text',
      name: 'orderFrom',
      placeholder: ' ',
      label: 'Order From',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'text',
      name: 'suppliername',
      placeholder: ' ',
      label: 'Supplier Name',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'tel',
      name: 'suppliercontact',
      placeholder: ' ',
      label: 'Supplier Contact Number',
      isRequired: true,
      className: 'floating-label',
    },
    {
      type: 'select',
      name: 'orderStatus',
      placeholder: 'Order Status',
      options: [
        { label: 'Received', value: 'received' },
        { label: 'Pending', value: 'pending' },
        { label: 'Not Ordered', value: 'not_ordered' },
      ],
      isRequired: true,
      className: 'dropdownsSelect',
    },
    {
      type: 'text',
      name: 'stockReportBy',
      placeholder: ' ',
      label: 'Stock Report By',
      isRequired: true,
      className: 'floating-label',
    },
  ];

  const initialData = {
    itemName: "",
    itemInStock: "",
    order: "",
    quantityOforder: "",
    dateOfOrder: "",
    stockReportBy: "",
    orderFrom: "",
    suppliername: "",
    suppliercontact: "",
    orderStatus: "",
  };

  const handleSubmit = (formData) => {
    // Example: Logging FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Example: Sending FormData to an API endpoint
    // fetch('/api/stock-report', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
  };

  return (
    <ReusableForm
      fields={fields}
      initialData={initialData}
      onSubmit={handleSubmit}
      submitButtonText="Submit"
      cancelButtonText="Cancel"
      onCancel={onClose} // Example: Close a modal or reset form
    />
  );
};

export default StockReportForm;
