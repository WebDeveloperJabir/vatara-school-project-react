import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import SimpleLoader from "../components/SimpleLoader";

// Component to show each teacher
function InformationTeacher({ image, name, position, mobile, teacherID }) {
  const formattedPosition = position.replace(" ", "-").toLowerCase();

  return (
    <div className="teacher">
      <div className="image-section">
        <img src={image} alt="teacher" />
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p>
          <mark className={formattedPosition}>{position}</mark>
        </p>
        <p className="contact">{mobile}</p>
        <p title="Teacher ID">
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
  const result = res.json();
  return result;
};

export default function InformationTeachers() {
  // Query to fetch teacher data with caching and staleTime set to 24 hours
  const {
    data: teachers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: fetchTeachers,
    staleTime: Infinity, // 24 hours
    cacheTime: 0, // Keep in memory for 24 hours
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  // Memoize the teachers list to prevent unnecessary re-rendering
  const memoizedTeachersList = useMemo(() => {
    return teachers.map((teacher) => (
      <Link
        to={`/information/teachers/profile-info/${teacher.teacherID}`}
        key={teacher.teacherID}
        style={{ textDecoration: "none", color: "inherit" }}
        target="_blank"
      >
        <InformationTeacher {...teacher} />
      </Link>
    ));
  }, [teachers]);

  // Handle errors and loading states
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="teachers-section">
      <Loading trigger={isLoading} />
      <div className="search-place fixed-input">
        <div className="name-search">
          <input type="search" placeholder="Search by name" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <div className="code-search">
          <input type="search" placeholder="Search by code" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>
      <div className="teachers-place">
        {memoizedTeachersList}
        <SimpleLoader />
      </div>
    </div>
  );
}
