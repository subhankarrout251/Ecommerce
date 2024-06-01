import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>policy 1</p>
          <p>policy 2</p>
          <p>policy 3</p>
          <p>policy 4</p>
          <p>policy 5</p>
          <p>policy 6</p>
          <p>policy 7</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
