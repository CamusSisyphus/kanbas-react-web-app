import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div class="row">


    <ul className="list-group">
    <li className="list-group-item">
    <button class="btn btn-success"onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
           Add
        </button>
        <button class="btn btn-primary"    onClick={() => dispatch(updateModule(module))}>

                Update
        </button>

        <input className="form-control" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea  className="form-control" value={module.description}
          onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (

           <li key={index} className="list-group-item list-group-item-secondary">
            <h4>
            <div class="d-flex justify-content-between">
            <div >
              
            <h3><PiDotsSixVerticalBold/>
            <AiFillCaretDown/>{module.name}  
            <button class="btn btn-warning"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button class="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            </button>
</h3>
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