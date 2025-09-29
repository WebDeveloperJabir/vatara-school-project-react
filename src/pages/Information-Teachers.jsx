import React, { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import SimpleLoader from "../components/SimpleLoader";

// Component to show each teacher
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

// Fetch teachers data function
const fetchTeachers = async () => {
  const baseURL = "/datas/teachers_database.json";
  const res = await fetch(baseURL);
  if (!res.ok) throw new Error("Failed to fetch teacher data");
  return res.json();
};

export default function InformationTeachers() {
  const {
    data: teachers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: fetchTeachers,
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });

  const [currentTeacherNumber, setCurrentTeacherNumber] = useState(1);
  const elementRef = useRef(null);

  const teacherNumber = Math.ceil(teachers.length / 20);

  // Memoized teacher cards
  const memoizedTeachersList = useMemo(
    () =>
      teachers.slice(0, 20 * currentTeacherNumber).map((teacher) => (
        <Link to={`/information/teachers/profile-info/${teacher.teacherID}`} key={teacher.teacherID} style={{ textDecoration: "none", color: "inherit" }} target='_blank'>
          <InformationTeacher {...teacher} />
        </Link>
      )),
    [teachers, currentTeacherNumber]
  );

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let initialLoad = true; // to ignore first observer trigger

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (initialLoad) {
          initialLoad = false;
          return;
        }
        if (entry.isIntersecting && currentTeacherNumber < teacherNumber) {
          setTimeout(() => {
            setCurrentTeacherNumber((prev) => prev + 1);
          }, 500);
        }
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [currentTeacherNumber, teacherNumber, teachers]);

  if (error) return <div className='error'>Error: {error.message}</div>;

  return (
    <div className='teachers-section'>
      <Loading trigger={isLoading} />
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
      <div className='teachers-place'>{memoizedTeachersList}</div>
      {currentTeacherNumber < teacherNumber && <SimpleLoader ref={elementRef} />}
    </div>
  );
}
