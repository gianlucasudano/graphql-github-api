import { Controller, Control } from 'react-hook-form';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

export type TextFieldControlledProps = {
  useFormControl: Control;
  placeholder: string;
  label: string;
  required: boolean;
  name: string;
  size: 'small' | 'medium';
} & TextFieldProps;

function TextFieldControlled({
  useFormControl,
  placeholder,
  label,
  required,
  name,
  size,
  sx,
}: TextFieldControlledProps) {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          sx={sx}
          size={size}
          placeholder={placeholder}
          label={label}
          required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
        />
      )}
      name={name}
      control={useFormControl}
    />
  );
}

export default TextFieldControlled;
