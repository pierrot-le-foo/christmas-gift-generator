export const sentences = [
  "Suggest me ideas for gifts which cost between",
  "dollars",
  "for a",
  "who is",
  "years old",
  "and who likes",
];

export function generatePrompt(priceRange, gender, age, hobbies) {
  const lastHobby = hobbies.pop();

  const list =
    hobbies.length > 1 ? `${hobbies.join(", ")} and ${lastHobby}` : lastHobby;

  return `Suggest three Christmas gift ideas between $${priceRange[0]} and $${priceRange[1]} for a ${gender} who is ${age} years old that is into ${list}:`;
}
