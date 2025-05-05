import React from "react";
import data from "../datas/main-teachers.json";

function TeachersContent(props) {
  return (
    <div className="teachers-content">
      <div className="top-content">
        <div className="teacher-image">
          <img src={props.link} alt="image" />
        </div>
        <div className="details">
          <h3>{props.name}</h3>
          <h4>
            <mark>{props.post}</mark>
          </h4>
        </div>
      </div>
      <hr></hr>
      <div className="bottom-content">
        <p style={{ marginBottom: "7px" }}>{props.sentences.firstSentence}</p>
        <p style={{ marginBottom: "7px" }}>{props.sentences.wholeSentence}</p>
        <p>{props.sentences.last[0]}</p>
        <p>{props.sentences.last[1]}</p>
        <p>{props.sentences.last[2]}</p>
        <p>{props.sentences.last[3]}</p>
      </div>
    </div>
  );
}

export default function MainTeachers() {
  return (
    <div className="main-teacher-section">
      <div className="title-place">
        <h2>Our Managing Directory</h2>
      </div>
      <div className="main-teachers">
        {data.map((element) => {
          return (
            <TeachersContent
              name={element.name}
              link={element.link}
              post={element.post}
              sentences={element.sentences}
              key={element.id}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
