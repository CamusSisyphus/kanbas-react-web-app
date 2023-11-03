import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical, FaCircleCheck} from "react-icons/fa6";
import {GoTriangleDown} from "react-icons/go";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {AiOutlinePlus} from "react-icons/ai";
import {VscNotebook} from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import "./index.css"
function Assignments() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const [deleteAssignmentId, setDeleteAssignmentId] = useState(null);

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/assignment-editor`);
    dispatch(setAssignment({
      title: "New Assignment",
      description: "New Description",
      points: 0,
      assignDate: "",
      due: "",
      availableFrom: "",
      until: "",
      course: courseId
    }));
  };

  const handleDeleteAssignment = (assignmentId) => {
    setDeleteAssignmentId(assignmentId);
  };

  const handleConfirmDelete = () => {
    if (deleteAssignmentId) {
      dispatch(deleteAssignment(deleteAssignmentId));
      setDeleteAssignmentId(null); 
    }
  };

  const handleCancelDelete = () => {
    setDeleteAssignmentId(null);
  };
  return (
    <div className="container-fluid">
        <input placeholder="Search for Assignment" className="input-field" style={{width:200}} />
        <div className="float-end">
          <button className="btn btn-light">+ Group</button>
          <button className="btn btn-danger" onClick={handleAddAssignment}>+ Assignment</button>
          <button className="btn btn-light"><FaEllipsisVertical /></button>
        </div>
      <hr style={{width: 1500, marginTop: 20, marginBottom: 20}}/>     
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <div class="list-group-item list-group-item-secondary">
          <PiDotsSixVerticalBold style={{fontSize: 20, marginRight: 5, marginLeft: 0}}/>
          <GoTriangleDown style={{fontSize: 20, marginRight: 10, marginLeft: 0}}/>
          <b>ASSIGNMENTS</b>
          <div className="float-end">
            40% of Total <AiOutlinePlus style={{marginLeft: 5}}/>
            <FaEllipsisVertical style={{marginLeft: 5}}/>
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <div className="list-group-item">
          <Link class="link"
            key={assignment._id}  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            >
            <PiDotsSixVerticalBold style={{fontSize: 20, marginRight: 8, marginLeft: 0}}/>
            <VscNotebook style={{fontSize: 20, marginRight: 12, marginLeft: 0, color:"green"}}/>
            <span >{assignment.title}</span>
            </Link>
            <div className="float-end">
                <button
                  className="btn btn-danger" style={{height: "35px", marginRight: '5px' }}
                  onClick={() => handleDeleteAssignment(assignment._id)}
                >
                  Delete
                </button>
              <FaCircleCheck style={{fontSize: 20, color: "green"}}/>
              <FaEllipsisVertical style={{marginLeft: 5}}/>
            </div>
            <div style={{marginLeft: 60, color:"red"}}>Multiple Modules</div>
          </div>
  
             ))}
          </div>
          {deleteAssignmentId && (
                  <div className="delete-confirmation-dialog">
                    <p>Are you sure you want to remove this assignment?</p>
                    <button className="btn btn-danger" onClick={handleConfirmDelete}>Yes</button>
                    <button className="btn btn-secondary" onClick={handleCancelDelete}>No</button>
                  </div>
                )}
      </div>


  );
}
export default Assignments;