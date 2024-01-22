import React from "react";
import {
  FormHelperText,
  Stack,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const SelectMenue = ({
  label,
  name,
  data,
  handleOpen,
  selectionTitle,
  error,
  helperText,
  value,
  onBlur,
  marginRight,
  disabled,
  multiple,
  renderValue,
}) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const selectedValue = event.target.value; // Update the type if necessary
    handleOpen(selectedValue);
  };

  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 2,
        sm: 2,
        lg: 1.5,
        md: 2,
      }}
    >
      <FormControl>
        {!value && (
          <InputLabel id="demo-simple-select" style={{ paddingLeft: 10 }}>
            {label}
          </InputLabel>
        )}

        <Select
          id={"demo-simple-select"}
          value={value}
          onChange={handleChange}
          variant="outlined"
          style={{
            flexGrow: 1,
            color: theme.palette.secondary.dark,
            marginRight: marginRight ? "20px" : "0px",
            border: `.2px solid ${
              error ? theme.palette.error.main : theme.palette.secondary.dark
            }`,
          }}
          error={error}
          onBlur={onBlur}
          disabled={disabled}
          multiple={multiple}
          renderValue={renderValue}
        >
          <MenuItem value="" disabled>
            {selectionTitle}
          </MenuItem>
          {data.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormHelperText sx={{ color: theme.palette.error.main, pl: 3 }}>
        {helperText}
      </FormHelperText>
    </Stack>
  );
};

export default SelectMenue;
