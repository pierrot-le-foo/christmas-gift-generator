import Stack from "@mui/material/Stack";

export default function Stacker({ children, sx = {} }) {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3} sx={sx}>
      {children}
    </Stack>
  );
}
