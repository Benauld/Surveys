import React from "react";
import ClientPortfolio from "./clients/ClientPortfolio";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <ClientPortfolio />
      </div>
    </div>
  );
};

export default Dashboard;
