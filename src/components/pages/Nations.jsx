import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from ''

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
      <CardGroup>
        <div>
          <h1>Countries</h1>
          <h3>Stats by Countries</h3>
        </div>
        <div>
          {info.map((nation) => (
            <div key={nation.alpha3}>
              <div>
                <img src={nation.map} />
                <div>
                  <Link to={`/${nation.country}`}>
                    <h4>{nation.country}</h4>
                  </Link>
                </div>
                <div>
                  <small className="abreviation">ABR: {nation.alpha3}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardGroup>
    </div>
  );
}

export default Nations;