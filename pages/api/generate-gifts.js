import { Configuration, OpenAIApi } from "openai";
import { generatePrompt } from "../../sentences";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const { priceRange, gender, age, hobbies } = req.body;

  console.log({ priceRange, gender, age, hobbies });

  const prompt = generatePrompt(priceRange, gender, age, hobbies);

  console.log(prompt);

  try {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    res.status(200).json({ result: [
      '1. A subscription to a coding magazine ($20)',
      '2. A collection of coding books ($50)',
      '3. A coding-themed t-shirt ($25)'
    ] });
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: prompt,
    //   temperature: 0.6,
    //   max_tokens: 2048,
    // });
    // console.log({ result: completion.data });
    // const result = completion.data.choices[0].text.split("\n\n");
    // result.shift();
    // console.log(result);
    // res.status(200).json({ result });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
