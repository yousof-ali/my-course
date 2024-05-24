import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";

const Courses = () => {
    const [courses, setCourses]=useState([]);

    useEffect(() => {
        fetch("course.json")
       .then(res=>res.json())
       .then(data=> setCourses(data))}
        ,[]);  
    return (
        <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map((course,indx)=><Course course={course} key={indx}></Course>)
                }
            </div>
        </div>
    );
};
 
export default Courses;