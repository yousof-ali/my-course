import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";


const Course = ({course}) => {
    const {image_url,credit_time,course_title,course_description,price} = course;
    return (
        <div className="p-4 bg-white rounded-md">
            <div className="h-40">
                <img className="h-full rounded-md w-full" src={image_url} alt="" />
            </div>
            <h2 className="text-2xl font-semibold my-4">{course_title}</h2>
            <p>{course_description}</p>
            <div className="flex justify-center items-center gap-6 my-4">
                <p className="flex items-center "><FiDollarSign className="text-2xl" /> <span>Price: {price}</span></p>
                <p className="flex items-center gap-2"><IoBookOutline className="text-2xl" /> <span>Credit : {credit_time}hr</span> </p>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 px-8 py-2 rounded-2xl text-white ">Select</button>
            </div>
        </div>
    );
};

export default Course;