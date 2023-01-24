import Slider from "@mui/material/Slider";

export default function PriceRange({ priceRange, setPriceRange }) {
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

  return (
    <Slider
      valueLabelDisplay="on"
      disableSwap
      value={priceRange}
      onChange={handlePriceRange}
      valueLabelFormat={(value) => `${value}€`}
    />
  );
}
