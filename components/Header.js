import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <Stack spacing={3}>
      <Typography variant="h3" align="center">
        Christmas gift generator 🎁
      </Typography>

      <Typography variant="h6" align="center">
        Use this generator to find the perfect gift for your loved ones.
      </Typography>
    </Stack>
  );
}
