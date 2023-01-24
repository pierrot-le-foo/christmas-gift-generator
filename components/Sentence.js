import Typography from "@mui/material/Typography";

export default function Sentence({ sentence }) {
  return (
    <Typography variant="h5" align="center">
      {sentence}
    </Typography>
  );
}
