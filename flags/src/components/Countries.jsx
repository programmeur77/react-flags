import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max={data.length}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data.slice(0, rangeValue).map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
