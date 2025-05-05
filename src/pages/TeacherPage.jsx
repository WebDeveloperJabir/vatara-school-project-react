import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function InformationTeachers() {
  let baseURL = "/teachers_database.json";
  let [teachers, setTeachers] = useState([]);
  const { teacherID } = useParams();
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const teacherInfo = teachers.find(
    (teacher) => teacher.teacherID === teacherID
  );

  if (!teacherInfo) {
    return <div>Teacher not found</div>;
  }
  let position = teacherInfo.position.replace(" ", "-").toLowerCase();
  let subjects = teacherInfo.subjects.join(",").replace(",", ", ");
  return (
    <div className="teachers-place">
      {/* <Loading /> */}
      <div className="teachers-div">
        <div className="image-place">
          <img src={teacherInfo.image} alt="" />
          <p className="name">{teacherInfo.name}</p>
          <p>
            <mark className={position}>{teacherInfo.position}</mark>
          </p>
        </div>
        <div className="details-place">
          <div className="field-holder">
            <p className="field">Teacher ID:</p>
            <code>{teacherInfo.teacherID}</code>
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Father's Name:</p> {teacherInfo.fatherName}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Mother's Name:</p> {teacherInfo.motherName}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Date of Birth:</p> {teacherInfo.dateOfBirth}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Address:</p> {teacherInfo.address}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Permanent Address:</p>{" "}
            {teacherInfo.permanentAddress}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Mobile:</p> {teacherInfo.mobile}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">E-Mail:</p> {teacherInfo.email}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">National ID:</p> {teacherInfo.nationalID}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Joining Date:</p> {teacherInfo.joiningDate}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Subjects:</p> {subjects}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Qualifications:</p>{" "}
            {teacherInfo.qualifications}
          </div>
          <hr />
          <div className="field-holder">
            <p className="field">Department:</p> {teacherInfo.department}
          </div>
        </div>
      </div>
    </div>
  );
}
