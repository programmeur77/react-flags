import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input type="range" min="1" max={data.length} />
      </ul>
      <ul>
        {data.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
