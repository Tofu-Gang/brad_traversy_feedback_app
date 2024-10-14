import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const handleChange = (event) => {
    const value = Number(event.currentTarget.value);
    setSelected(value);
    select(value);
  };

  return (
    <ul className="rating">
      {Array.from(Array(11).keys()).slice(1).map((i) =>
        <li key={i}>
          <input type="radio" id={`num${i}`} name="rating" value={i} onChange={handleChange}
                 checked={selected === i}/>
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      )}
    </ul>
  );
}

export default RatingSelect;
