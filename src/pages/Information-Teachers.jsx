import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import SimpleLoader from "../components/SimpleLoader";

// import data from "../datas/teachers_database.json";
// console.log(data);

function InformationTeacher(props) {
  let position = props.position.replace(" ", "-").toLowerCase();
  return (
    <div className="teacher">
      <div className="image-section">
        <img src={props.image} alt="image" />
      </div>
      <div className="details">
        <p className="name">{props.name}</p>
        <p>
          <mark className={position}>{props.position}</mark>
        </p>
        <p className="contact">{props.mobile}</p>
        <p title="Teacher ID">
          <code>{props.teacherID}</code>
        </p>
      </div>
    </div>
  );
}

export default function InformationTeachers() {
  let baseURL = "/teachers_database.json";
  const [teachers, setTeachers] = useState([]);
  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
        setTrigger(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTrigger(false);
      });
  }, []);

  return (
    <div className="teachers-section">
      <Loading trigger={trigger} />

      <div className="search-place fixed-input">
        <div className="name-search">
          <input type="search" placeholder="Search by name" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <div className="code-search">
          <input type="search" name="" id="" placeholder="Search by code" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>
      <div className="teachers-place">
        {teachers.map((element) => {
          return (
            <Link
              to={`/information/teachers/profile-info/${element.teacherID}`}
              key={element.teacherID}
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <InformationTeacher
                image={element.image}
                key={element.teacherID}
                name={element.name}
                position={element.position}
                mobile={element.mobile}
                teacherID={element.teacherID}
              />
            </Link>
          );
        })}
        <SimpleLoader />
      </div>
    </div>
  );
}
