import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data/data';
import back from '../images/back-arrow.png';
import { getPollutionData } from '../../redux/Slice/slice';
import '../../App.css';

function Detail() {
  const { country } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    data.forEach((e) => {
      if (e.country === country) {
        setMap(e.map);
        setName(e.country);
        const endPoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latitude}&lon=${e.longitude}&appid=0dbad6356ef49815329c4c3638a175f7`;
        dispatch(getPollutionData(endPoint));
      }
    });
  }, [country, dispatch]);
  const pollutionData = useSelector((state) => state.pollution.data);
  const loading = useSelector((state) => state.pollution.loading);
  return (
    <div className="details">
      <div>
        <button className="back-button" type="button" onClick={() => navigate('/')}>
          <img className="backbutton-img" src={back} alt="back button" />
          Back
        </button>
      </div>
      {!loading ? (
        <div className="country-details">
          <div className="country-info">
            <h1>{name}</h1>
            <img src={map} alt="Map" />
          </div>
          <div className="pollution-data">
            <ul className="pollution-table">
              {pollutionData
                && pollutionData.map((data) => (
                  <li className="data-item" key={data[0]}>
                    <p className="text">
                      Gas:
                      {' '}
                      {data[0]}
                    </p>
                    <p className="text">
                      {data[1]}
                      {' '}
                      µg/m3
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
