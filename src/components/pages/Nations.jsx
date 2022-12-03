import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from '../data/data'

function Nations() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');
  const array = [];

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    data.forEach((item) => {
      const name = item.country.toLowerCase();
      if (name.includes(search.toLowerCase())) {
        array.push(item);
      }
    });
    setInfo(array);
  };
  return (
    <div>
      <div className="cardgroup">
        <div>
          <h1>Countries</h1>
          <h3>Stats by Countries</h3>
        </div>
        <div>
          {info.map((nation) => (
            <div key={nation.alpha3}>
              <Link to={`/${nation.country}`}>
              <div>
                <img src={nation.map} />
                <div>
                  <h4>{nation.country}</h4>
                </div>
                <div>
                  <small className="abreviation">ABR: {nation.alpha3}</small>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nations;