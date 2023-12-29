import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
  Paper,
  Container,
  FormControl,
  FormLabel,
} from '@mui/material';

const MyChoiceGroup: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState<string | undefined>('');
  const [selectedOption2, setSelectedOption2] = useState<string | undefined>('');
  const [showWarning, setShowWarning] = useState(false);
  const [showOption2, setShowOption2] = useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSelectedOption1(value);

    setShowWarning(false);
    setSelectedOption2(undefined);
    setShowOption2(false);

    if (value === 'yes1') {
      setShowWarning(true);
    } else {
      setShowOption2(true);
    }
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSelectedOption2(value);

    setShowWarning(false);

    if (value === 'no2') {
      setShowWarning(true);
    }
  };

  const handleNext = () => {
    // You can perform any additional logic before navigating to the next step
    console.log('Next button clicked');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Questionnaire:
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Are you without electricity, gas or water?</FormLabel>
          <RadioGroup row aria-label="question1" name="question1" value={selectedOption1} onChange={handleChange1}>
            <FormControlLabel value="yes1" control={<Radio />} label="Yes" />
            <FormControlLabel value="no1" control={<Radio />} label="No" />
          </RadioGroup>
          {showWarning && (
            <Typography color="error" variant="body2">
              Please contact with your foreman +376423926719
            </Typography>
          )}
        </FormControl>

        {showOption2 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Have you contacted your provider to try to resolve your complaint?</FormLabel>
            <RadioGroup row aria-label="question2" name="question2" value={selectedOption2} onChange={handleChange2}>
              <FormControlLabel value="yes2" control={<Radio />} label="Yes" />
              <FormControlLabel value="no2" control={<Radio />} label="No" />
            </RadioGroup>
            {showWarning && (
              <Typography color="error" variant="body2">
                Please contact with your foreman +00393946334
              </Typography>
            )}
            {selectedOption2 === 'yes2' && (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </FormControl>
        )}
      </Paper>
    </Container>
  );
};

export default MyChoiceGroup;
