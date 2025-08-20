import { Box, styled } from '@mui/material';

const StyledLabel = styled('label')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.checked ? '#0b5ed7' : 'transparent',
  color: ownerState.checked ? 'white' : ownerState.checked ? 'inherit' : '#0b5ed7', // Mimics btn-outline-primary
  border: `1px solid #0b5ed7`, // Mimics btn-outline-primary
  padding: theme.spacing(1),
  cursor: 'pointer',
  display: 'inline-block',
  borderRadius: '4px', // Mimics Bootstrap btn
}));

const HiddenRadio = styled('input')({
  display: 'none',
});

export const FilterBtnn = ({ index, name, items, task, setPages }) => {
  const handleChange = (event) => {
    // Call task with the expected parameters (adjust based on your task function)
    if (task) {
      task(event.target.checked, name, index);
    }
    // Reset pagination
    if (setPages) {
      setPages(1);
    }
  };

  return (
    <Box component="div" className="form-check">
      <HiddenRadio
        type="radio"
        id={`${name}-${index}`}
        name={name}
        className="form-check-input x"
        checked={items?.includes(name)} // Assumes items is an array of selected values
        onChange={handleChange}
      />
      <StyledLabel
        htmlFor={`${name}-${index}`}
        ownerState={{ checked: items?.includes(name) }}
        className="btn btn-outline-primary"
      >
        {name} {/* Use name instead of items for the label */}
      </StyledLabel>
    </Box>
  );
};