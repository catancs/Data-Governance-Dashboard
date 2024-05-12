import React, { useEffect, useState } from 'react';

function Metrics() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setMetrics(data.metrics))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {metrics.map(metric => (
        <div key={metric.name}>
          <h2>{metric.name}</h2>
          <p>{metric.value}%</p>
        </div>
      ))}
    </div>
  );
}

export default Metrics;
