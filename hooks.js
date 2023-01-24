import { useEffect, useState } from "react";
import { listOfHobbies } from "./hobbies";

export function useGiftGenerator() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [hobbies, setHobbies] = useState([
    listOfHobbies[3],
  ]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const [result, setResult] = useState([]);

  useEffect(() => {
    setReady(gender && age && hobbies.length);
  }, [gender, age, hobbies]);

  return {
    age,
    gender,
    hobbies,
    loading,
    priceRange,
    ready,
    result,
    setAge,
    setGender,
    setHobbies,
    setLoading,
    setPriceRange,
    setReady,
    setResult,
  };
}
