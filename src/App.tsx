// App.tsx
import React, { FormEvent, useState } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import { UserForm } from './UserForm';
import { AddressForm } from './AddressForm';
// import { AccountForm } from './AccountForm';
import { ComplaintForm } from './Complaint';
import MyChoiceGroup from './Selection';
import { IncidentAddressForm } from './AccountForm';

type FormData = {
  title: string;
  firstName: string;
  lastName: string;
  postalAddress: string;
  address: string;
  suburb: string;
  country: string;
  preferredContact: string;
  landline: string;
  mobile: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  //complaint-page
  supplier: string;
  service: string;
  accountNumber: string;
  complaintDescription: string;
  resolutionDescription: string;
  //Incident-page
  // address: string;
  address1: string;
  // city: string;
  postcode: string;
  // state: string;
};

const INITIAL_DATA: FormData = {
  title: '',
  firstName: '',
  lastName: '',
  postalAddress: '',
  address: '',
  suburb: '',
  country: '',
  preferredContact: '',
  landline: '',
  mobile: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
  //complaint-page
  supplier: '',
  service: '',
  accountNumber: '',
  complaintDescription: '',
  resolutionDescription: '',
  //Incident-page
  // address: '',
  address1: '',
  // city: '',
  postcode: '',
  // state: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const steps = [
    <MyChoiceGroup/>,
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <IncidentAddressForm {...data} updateFields={updateFields} />,
    // <AccountForm {...data} updateFields={updateFields} />,
    <ComplaintForm {...data} updateFields={updateFields}/>
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  const step = steps[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert('Successful Account Creation');
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        style={{
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '.5rem',
          fontFamily: 'Arial',
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ textAlign: 'right' }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div style={{ marginTop: '1rem', marginLeft: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            {!isFirstStep && (
              <Button type="button" onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>{isLastStep ? 'Finish' : 'Next'}</Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
