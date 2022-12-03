import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data';
import '../../App.css';
import Footer from '../Footer';

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
        <div className="title-con">
          <h2 className="nation-title">Air Pollution in European Nations</h2>
          <h3 className="subtitle">Stats by Countries</h3>
        </div>
        <div className="states">
          {info.map((nation) => (
            <div className="nation" key={nation.alpha3}>
              <Link to={`/${nation.country}`}>
                <div className="map-con">
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
      <Footer />
    </div>
  );
}

export default Nations;
