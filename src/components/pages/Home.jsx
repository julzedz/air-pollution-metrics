import React from 'react';
import Nations from './Nations';
import '../../App.css';

function Home() {
  return (
    <div className="Homepage">
      <div className="nations">
        <Nations />
      </div>
    </div>
  );
}

export default Home;
