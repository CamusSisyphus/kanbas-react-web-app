import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
import {PiDotsSixVerticalBold} from "react-icons/pi";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class="row">


    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (

           <li key={index} className="list-group-item list-group-item-secondary">
            <h4>
            <div class="d-flex justify-content-between">
            <div >
            <h3><PiDotsSixVerticalBold/>
            <AiFillCaretDown/>{module.name}</h3>
             <p>{module.description}</p>
             </div>
              <div >
                <AiFillCheckCircle style ={{color:"green"}} /> 
                <AiOutlinePlus/>
                <FaEllipsisV/>
              </div>
            </div>

            </h4>



             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;