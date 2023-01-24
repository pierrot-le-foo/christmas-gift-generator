
export default function Form({ children, priceRange, gender, age, hobbies, setLoading, setResult }) {

  async function onSubmit(event) {
    event.preventDefault();

    setLoading(true);

    console.log({ priceRange, gender, age, hobbies });

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
      console.error(error);
    }

    setLoading(false);
  }

  return <form onSubmit={onSubmit}>{children}</form>;
}
