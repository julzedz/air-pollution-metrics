import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/data'
import back from '../images/back-arrow.png'
import { getPollutionData } from "../../redux/Slice/slice";

function Detail() {
  const { nation } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    data.forEach((e) => {
      if (e.nation === nation) {
        setMap(e.map);
        setName(e.nation);
        const endPoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latitude}&lon=${e.longitude}&appid=0dbad6356ef49815329c4c3638a175f7`;
        dispatch(getPollutionData(endPoint))
      }
    });
  }, [nation, dispatch]);
  const pollutionData = useSelector((state) => state.pollution.data);
  const loading = useSelector((state) => state.pollution.loading)
  return (
    <div>
      <div>
        <button type="button" onClick={() => navigate('/')}>
          <img src={back} alt="back button" />
          Back
        </button>
      </div>
      <div className="back-home" />
      {!loading ? (
        <div className="country-details">
          <div className="country-info">
            <h1>{name}</h1>
            <img src={map} alt="Map" />
          </div>
          <div className="pollution-data">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Gas</th>
                  <th>Concentration</th>
                </tr>
              </thead>
              <tbody>
                {pollutionData && pollutionData.map((data, i) => (
                  <tr key={data[0]}>
                    <td>{i + 1}</td>
                    <td>{data [0]}</td>
                    <td>
                      {data[1]}
                      µg/m3
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
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