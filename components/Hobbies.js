import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { listOfHobbies } from "../hobbies";

export default function Hobbies({ hobbies, setHobbies }) {
  console.log({ hobbies });
  return (
    <Autocomplete
      multiple
      options={hobbies.length < 3 ? listOfHobbies : []}
      getOptionLabel={(option) => option}
      value={hobbies}
      onChange={(event, newValue) => {
        console.log("newValue", newValue);
        setHobbies(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder="List 3 hobbies max"
          fullWidth
          disabled={hobbies.length >= 3}
        />
      )}
      filterSelectedOptions
      noOptionsText="You have reached the maximum number of hobbies"
    />
  );
}
