import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Head from "next/head";

import Age from "../components/Age";
import Form from "../components/Form";
import Gender from "../components/Gender";
import Header from "../components/Header";
import Hobbies from "../components/Hobbies";
import Line from "../components/Line";
import PriceRange from "../components/PriceRange";
import Results from "../components/Results";
import Sentence from "../components/Sentence";
import Stacker from "../components/Stacker";
import Submit from "../components/Submit";
import { useGiftGenerator } from "../hooks";
import { sentences } from "../sentences";

export default function Home() {
  const {
    priceRange,
    setPriceRange,
    gender,
    setGender,
    age,
    setAge,
    loading,
    ready,
    hobbies,
    setHobbies,
    setLoading,
    result,
    setResult
  } = useGiftGenerator();

  return (
    <div>
      <Head>
        <title>Christmas gift generator 🎁🎄</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main>
        <Stack sx={{ padding: 3 }}>
          <Stacker>
            <Header />

            <Form
              priceRange={priceRange}
              gender={gender}
              age={age}
              hobbies={hobbies}
              setLoading={setLoading}
              setResult={setResult}
            >
              <Stacker>
                <Line>
                  <Sentence sentence={sentences[0]} />
                </Line>

                <Line />

                <PriceRange
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />

                <Line>
                  <Sentence sentence={sentences[2]} />

                  <Gender gender={gender} setGender={setGender} />
                </Line>

                <Line>
                  <Sentence sentence={sentences[3]} />

                  <Age age={age} setAge={setAge} />

                  <Sentence sentence={sentences[4]} />
                </Line>

                <Line>
                  <Sentence sentence={sentences[5]} />
                </Line>

                <Box sx={{ alignSelf: "stretch" }}>
                  <Hobbies hobbies={hobbies} setHobbies={setHobbies} />
                </Box>

                <Submit loading={loading} ready={ready} />
              </Stacker>
            </Form>
          </Stacker>

          <Stacker>{result.length > 0 && <Results result={result} />}</Stacker>
        </Stack>
      </main>
    </div>
  );
}
