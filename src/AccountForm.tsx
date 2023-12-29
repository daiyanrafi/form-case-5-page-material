// // AccountForm.tsx
// import React from 'react';
// import { TextField, Typography, Grid } from '@mui/material';

// type AccountFormProps = {
//   email: string;
//   password: string;
//   updateFields: (fields: Partial<{ email: string; password: string }>) => void;
// };

// export function AccountForm({ email, password, updateFields }: AccountFormProps) {
//   return (
//     <div style={{ marginBottom: '16px' }}>
//       <Typography variant="h6" gutterBottom>
//         Account Information
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             autoFocus
//             label="Email"
//             required
//             type="email"
//             value={email}
//             onChange={(e) => updateFields({ email: e.target.value })}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Password"
//             required
//             type="password"
//             value={password}
//             onChange={(e) => updateFields({ password: e.target.value })}
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }


// IncidentAddressForm.tsx
import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

type IncidentAddressFormProps = {
  address: string;
  address1: string;
  city: string;
  postcode: string;
  state: string;
  updateFields: (fields: Partial<{
    address: string;
    address1: string;
    city: string;
    postcode: string;
    state: string;
  }>) => void;
};

export function IncidentAddressForm({
  address,
  address1,
  city,
  postcode,
  state,
  updateFields,
}: IncidentAddressFormProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Incident Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label="Address"
            required
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address 1"
            value={address1}
            onChange={(e) => updateFields({ address1: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            required
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postcode"
            required
            value={postcode}
            onChange={(e) => updateFields({ postcode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            required
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
