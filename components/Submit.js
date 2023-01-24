import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Submit({ loading, ready }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={loading || !ready}
    >
      <Typography variant="h4">Generate gift ideas</Typography>
    </Button>
  );
}
