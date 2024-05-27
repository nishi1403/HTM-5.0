import React from "react";

const Schedule = () => {
  return (
    <div className="schedule">
      <br />
      <h1>SCHEDULE</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="date">
              <h1>25</h1>
              <h3>AUG</h3>
            </div>
          </div>
          <div className="col">
            <div className="desc">
              9 AM
              <br />
              HACKATHON BEGINS
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="date">
              <h1>25</h1>
              <h3>AUG</h3>
            </div>
          </div>
          <div className="col">
            <div className="desc">
              7 PM
              <br />
              SESSION By <br />
              SPEAKER 1
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="date">
              <h1>26</h1>
              <h3>AUG</h3>
            </div>
          </div>
          <div className="col">
            <div className="desc">
              7 PM
              <br />
              SESSION By <br />
              SPEAKER 2
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="date">
              <h1>28</h1>
              <h3>AUG</h3>
            </div>
          </div>
          <div className="col">
            <div className="desc">
              9 AM <br />
              HACKATHON ENDS
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <button className="button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCELhom1Xe3ANk42K5V6PJSZzvtY6bKo1JbsBzeSRfBOdSRQ/viewform?vc=0&c=0&w=1&flr=0">
         
          Register
        </a>
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Schedule;
