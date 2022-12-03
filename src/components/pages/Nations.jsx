import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data';
import '../../App.css';

function Nations() {
  const [info, setInfo] = useState([]);
  // const [search, setSearch] = useState('');
  // const array = [];

  useEffect(() => {
    setInfo(data);
  }, []);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   data.forEach((item) => {
  //     const name = item.country.toLowerCase();
  //     if (name.includes(search.toLowerCase())) {
  //       array.push(item);
  //     }
  //   });
  //   setInfo(array);
  // };
  return (
    <div className="nations">
      <div className="cardgroup">
        <div>
          <h1>Air Pollution in European Nations</h1>
          <h3>Stats by Countries</h3>
        </div>
        <div className="states">
          {info.map((nation) => (
            <div className="nation" key={nation.alpha3}>
              <Link to={`/${nation.country}`}>
                <div>
                  <img className="map" src={nation.map} alt="map" />
                  <div>
                    <h4>{nation.country}</h4>
                  </div>
                  <div>
                    <small className="abreviation">
                      ABR:
                      {' '}
                      {nation.alpha3}
                    </small>
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
