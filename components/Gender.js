import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Gender({ gender, setGender }) {
  return (
    <Select
      label="Gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      name="gender"
      sx={{ width: 130 }}
    >
      <MenuItem value="man">man</MenuItem>
      <MenuItem value="woman">woman</MenuItem>
    </Select>
  );
}
