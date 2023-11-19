import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse, createModule } from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleAddMoudule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const dispatch = useDispatch();
  return (
    <div class="row">


    <ul className="list-group">
    <li className="list-group-item">
    <button class="btn btn-success "onClick={handleAddMoudule}>
           Add
        </button>
        <button class="btn btn-primary"    onClick={handleUpdateModule}>

                Update
        </button>
        <div class="form-group">
        <div class="row">
        <div class="col-5">
        <input className="form-control" c value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        </div>
        </div>
        <div class="row">
        <div class="col-7 200">
        <textarea rows="5" className="form-control" value={module.description}
          onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>
        </div>
        </div>
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
              onClick={() => handleDeleteModule(module._id)}>
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