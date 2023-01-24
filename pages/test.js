import Head from "next/head";
import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

const listOfHobbies = [
  "acting",
  "baking",
  "camping",
  "coding",
  "cooking",
  "cycling",
  "dancing",
  "drawing",
  "fishing",
  "gaming",
  "gardening",
  "hiking",
  "hunting",
  "knitting",
  "meditation",
  "painting",
  "photography",
  "reading",
  "running",
  "singing",
  "sports",
  "swimming",
  "traveling",
  "walking",
  "writing",
  "yoga",
];

export default function Home() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [hobbies, setHobbies] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const [result, setResult] = useState([]);

  const minDistance = 10;

  const handlePriceRange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  useEffect(() => {
    setReady(gender && age && hobbies);
  }, [gender, age, hobbies]);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/generate-gifts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gender, age, hobbies, priceRange }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>Christmas gift generator 🎁🎄</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main>
        <Stack spacing={4} sx={{ padding: 4 }}>
          <Typography variant="h3">Christmas gift generator 🎁🎄</Typography>

          <Typography variant="h5">
            Use this generator to find the perfect gift for your loved ones.
          </Typography>

          <form onSubmit={onSubmit}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5">Suggest me gift ideas for a</Typography>

              <Select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
              >
                <MenuItem value="man">Man</MenuItem>
                <MenuItem value="woman">Woman</MenuItem>
              </Select>

              <Typography variant="h5">who is</Typography>

              <TextField
                type="number"
                name="age"
                placeholder="Enter an age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                label="Age"
                max={100}
                sx={{ width: 100 }}
              />

              <Typography variant="h5">years old and who likes</Typography>

              <Slider
                valueLabelDisplay="on"
                disableSwap
                value={priceRange}
                onChange={handlePriceRange}
              />

              <div style={{ flex: 1 }}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={listOfHobbies}
                  getOptionLabel={(option) => option}
                  // defaultValue={[listOfHobbies[0]]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Hobbies"
                      placeholder="List of hobbies"
                    />
                  )}
                />
              </div>
            </Stack>

            <Stack sx={{ paddingTop: 3 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading || !ready}
              >
                <Typography variant="h4">Generate gift ideas</Typography>
              </Button>
            </Stack>
          </form>

          <Stack>
            {result.map((gift, index) => (
              <Typography key={index}>{gift}</Typography>
            ))}
          </Stack>
        </Stack>
      </main>
    </div>
  );
}
