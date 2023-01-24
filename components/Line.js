import Stack from "@mui/material/Stack";

export default function Line({ children }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {children}
    </Stack>
  );
}
