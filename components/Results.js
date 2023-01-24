import Typography from "@mui/material/Typography";
import Line from "./Line";
import Sentence from "./Sentence";
import Stacker from "./Stacker";

export default function Results({ result }) {
  return (
    <Stacker sx={{ marginTop: 3 }}>
      {result.map((line, index) => (
        <Line key={index}>
          <Sentence sentence={line} />
        </Line>
      ))}
    </Stacker>
  );
}
