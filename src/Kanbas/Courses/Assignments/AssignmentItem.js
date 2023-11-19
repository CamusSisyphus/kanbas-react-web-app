import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import "./index.css";
import { useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import * as client from "./client";

function AssignmentItem({ assignment, courseId }) {
  const dispatch = useDispatch();

  const handleDeleteAssignment = (e, assignment) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (isConfirmed) {
      client.deleteAssignment(assignment._id).then(() => {
        dispatch(deleteAssignment(assignment._id));
      });
    }
  };


  return (
    <Link
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      className="list-group-item"
      onClick={() => dispatch(setAssignment(assignment))}
    >
      <div className="assignment-item">
        <div className="assignment-title">
          <RxDragHandleDots2 />
          <TfiWrite className="write-icon" />
          {assignment.title}

          <button  
            className="btn btn-danger delete-button "
            onClick={(e) => handleDeleteAssignment(e, assignment)}
          >
            Delete
          </button>

          <div className="assignment-details">
            <div className="assignment-due-date">Due: {assignment.Due}  |  </div>
            <div className="assignment-points">
              {assignment.points || 100} pts
            </div>
            <FaCheckCircle className="check-icon" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AssignmentItem;