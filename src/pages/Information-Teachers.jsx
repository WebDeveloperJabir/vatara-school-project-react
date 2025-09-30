import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import SimpleLoader from "../components/SimpleLoader";

function InformationTeacher({ image, name, position, mobile, teacherID }) {
  const formattedPosition = position.replace(" ", "-").toLowerCase();
  return (
    <div className='teacher'>
      <div className='image-section'>
        <img src={image} alt='teacher' />
      </div>
      <div className='details'>
        <p className='name'>{name}</p>
        <p>
          <mark className={formattedPosition}>{position}</mark>
        </p>
        <p className='contact'>{mobile}</p>
        <p title='Teacher ID'>
          <code>{teacherID}</code>
        </p>
      </div>
    </div>
  );
}

export default function InformationTeachers() {
  const [currentTeacherNumber, setCurrentTeacherNumber] = useState(1);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const elementRef = useRef(null);
  const fetchTeachers = async () => {
    const res = await fetch("/datas/teachers_database.json");
    if (!res.ok) throw new Error("Failed to fetch teacher data");
    return res.json();
  };
  const { data: teachers = [], isLoading, error } = useQuery({ queryKey: ["teachers"], queryFn: fetchTeachers, staleTime: Infinity, cacheTime: 0, refetchOnWindowFocus: false });
  const teacherNumber = Math.ceil(teachers.length / 20);

  useEffect(() => {
    if (!teachers.length) return;
    const newSlice = teachers.slice(visibleTeachers.length, visibleTeachers.length + 20);
    if (newSlice.length > 0) setVisibleTeachers((prev) => [...prev, ...newSlice]);
  }, [teachers, currentTeacherNumber]);

  useEffect(() => {
    if (currentTeacherNumber >= teacherNumber) return;
    const element = elementRef.current;
    if (!element) return;
    let initialLoad = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (initialLoad) {
          initialLoad = false;
          return;
        }
        if (entry.isIntersecting && currentTeacherNumber < teacherNumber) setTimeout(() => setCurrentTeacherNumber((prev) => prev + 1), 500);
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [currentTeacherNumber, teacherNumber, teachers]);

  if (error) return <div className='error'>Error: {error.message}</div>;
  if (isLoading) return <Loading hide='' />;

  return (
    <div className='teachers-section'>
      <div className='search-place fixed-input'>
        <div className='name-search'>
          <input type='search' placeholder='Search by name' />
          <button>
            <i className='bx bx-search-alt-2'></i>
          </button>
        </div>
        <div className='code-search'>
          <input type='search' placeholder='Search by code' />
          <button>
            <i className='bx bx-search-alt-2'></i>
          </button>
        </div>
      </div>
      <div className='teachers-place'>
        {visibleTeachers.map((teacher) => (
          <Link to={`/information/teachers/profile-info/${teacher.teacherID}`} key={teacher.teacherID} style={{ textDecoration: "none", color: "inherit" }} target='_blank'>
            <InformationTeacher {...teacher} />
          </Link>
        ))}
      </div>
      {currentTeacherNumber < teacherNumber && <SimpleLoader ref={elementRef} />}
    </div>
  );
}
