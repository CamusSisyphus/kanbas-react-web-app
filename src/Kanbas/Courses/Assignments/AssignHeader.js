import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAssignment } from "./assignmentsReducer";

function AssignHeader({ courseId }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const assignment = {
      _id: new Date().getTime().toString(),
      title: "New Assignment",
      description: "New Assignment Description",
      course: courseId,
      Due: "2023-10-18",
      availableFromDate: "2023-10-02",
      availableUntilDate: "2023-10-17",
    };
    dispatch(setAssignment(assignment));
  };

  return (
    <div className="assignment-toolbar d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Search for Assignment"
      />
      <div>
        <button className="btn btn-light mx-1">+ Group</button>
        <button className="btn btn-danger mx-1">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/Kanbas/Courses/${courseId}/Assignments/NEW_ASSIGNMENT`}
            onClick={handleOnClick}
          >
            + Assignment
          </Link>
        </button>

        <button className="btn btn-light mx-1">
          <FiMoreVertical size={20} />
        </button>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

export default AssignHeader;