import React from 'react';
import Navbar from './Navbar';
import Metrics from './Metrics';
import Charts from './Charts';

function Dashboard() {
  return (
    <section className="dashboard-container">
      <Navbar />
      <article className="metrics-container">
        <Metrics />
      </article>
      <article className="charts-container">
        <Charts />
      </article>
      
    </section>
  );
}

export default Dashboard;
