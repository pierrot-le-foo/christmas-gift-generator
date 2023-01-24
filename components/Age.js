import TextField from "@mui/material/TextField";

export default function Age({ age, setAge }) {
  return (
    <TextField
      type="number"
      name="age"
      placeholder="Enter an age"
      value={age}
      onChange={(e) => setAge(Number(e.target.value))}
      label="Age"
      max={100}
      sx={{ width: 100 }}
      min={0}
    />
  );
}
