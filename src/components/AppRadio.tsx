import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export const AppRadio = (Titulo: string, value1: string, value2: string, setFieldValue: any, values: any, name: string) => {
  return (
    <FormControl>
      <FormLabel>{Titulo}</FormLabel>
      <RadioGroup name={name} value={values.radio} onChange={(e: any) => setFieldValue(name, e.target.value)}>
        <FormControlLabel value={value1} control={<Radio />} label={value1} />
        <FormControlLabel value={value2} control={<Radio />} label={value2} />
      </RadioGroup>
    </FormControl>
  );
};
