import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {AiOutlineMenu} from "react-icons/ai";
import {LiaGreaterThanSolid} from "react-icons/lia";
function Courses() {
  const { courseId } = useParams();
  const  {pathname} = useLocation();
  const pathlist = pathname.split("/");
  let pathlength = pathlist.length 
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
       { pathlength <= 5 ? 
      <h1><span style={{color:"red"}}><AiOutlineMenu/> {course.name} </span> <LiaGreaterThanSolid/> {pathlist[pathlist.length-1]} </h1>
       :       <h1><span style={{color:"red"}}><AiOutlineMenu/> {course.name} <LiaGreaterThanSolid/> {pathlist[pathlist.length-2]}  </span> <LiaGreaterThanSolid/> {pathlist[pathlist.length-1]} </h1> }  

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;