import React from "react";

const data = [
  {
    name: "Musa al- Khwarizmi",
    link: "/images/Musa-al-Khwarizmi.jfif",
    post: "Head Teacher",
    sentences: {
      firstSentence: "In the name of almighty Allah",
      wholeSentence:
        "Our institution stands as a shining example of academic excellence, discipline, and dedication, earning a distinguished reputation for its innovative teaching techniques, well-structured curriculum, and student-friendly environment, which collectively contribute to its recognition as one of the leading educational institutions in the country; as a result, our students consistently achieve remarkable success in national and international examinations, securing top positions and bringing honor to both the institution and the nation.",
      last: [
        "Thanks",
        "Musa al- Khwarizmi",
        "Head Teacher",
        "Managing Directory",
      ],
    },
    phone: "0193472942",
    "e-mail": "musakhwarizmi123@gmail.com",
    id: 1,
  },
  {
    name: "Muhammad Qudrat-A-Khuda",
    link: "/images/Muhammad_Qudrat-i-Khuda.jpg",
    post: "Chairman",
    sentences: {
      firstSentence: "All prayers is for Allah",
      wholeSentence:
        "With a strong emphasis on character building, intellectual growth, and extracurricular development, the school has nurtured generations of students who have excelled in various fields, including science, technology, arts, and sports, while also actively participating in national competitions, government programs, and social initiatives, showcasing their talent, discipline, and leadership qualities, which further strengthen the institution’s standing as a pioneer in holistic education across the country.",
      last: [
        "Thanks",
        "Muhammad Qudrat-A-Khuda",
        "Chairman",
        "Vatara Model School",
      ],
    },
    phone: "0194382745",
    "e-mail": "qudratakhuda675@gmail.com",
    id: 2,
  },
  {
    name: "Ibn Sina",
    link: "/images/Ibn-Sina.jfif",
    post: "Vice Principal",
    sentences: {
      firstSentence: "All prayers is for Allah",
      wholeSentence:
        "Due to its well-equipped facilities, highly qualified faculty members, and modern educational strategies, the institution has consistently maintained a record of academic brilliance, securing top results in all public examinations and earning widespread recognition from the education board, government authorities, and parents alike, making it a model of success in both regional and national educational rankings, further proving its commitment to the highest standards of learning and student development.",
      last: ["Thanks", "Ibn Sina", "Vice Principal", "Vatara Model School"],
    },
    phone: "0193927145",
    "e-mail": "ibnsina999@yahoo.com",
    id: 3,
  },
  {
    name: "Jabir Ibn Hayyan",
    link: "/images/Jabir-Ibn-Hayyan.jfif",
    post: "Vice Chancellor",
    sentences: {
      firstSentence: "In the name of Allah",
      wholeSentence:
        "Beyond academic success, the school takes pride in fostering a culture of creativity, innovation, and social responsibility among its students, who regularly participate in science fairs, debate competitions, cultural programs, and voluntary activities organized by government and non-government organizations, thereby making meaningful contributions to society, while at the same time reinforcing the school’s identity as a premier institution that not only educates but also inspires the youth to become future leaders and changemakers.",
      last: [
        "Thanks",
        "Jabir Ibn Hayyan",
        "Vice Principal",
        "Vatara Model School",
      ],
    },
    phone: "0193776490",
    "e-mail": "jabiribnhayyan@yahoo.com",
    id: 4,
  },
];

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
      </div>
    </div>
  );
}
