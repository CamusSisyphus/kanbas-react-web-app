import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import AssignmentItem from "./AssignmentItem.js";
import AssignHeader from "./AssignHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { findAssignmentsForCourse } from "./client";
import { setAssignments } from "./assignmentsReducer";
import { useDispatch } from "react-redux";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) =>
      dispatch(setAssignments(assignments))
    );
  }, [courseId, dispatch]);

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  console.log(assignments);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  console.log(courseAssignments);
  return (
    <div>
      <AssignHeader courseId={courseId} />
      <hr />
      <div className="assignment-container">
        <div>
          <h2>
            Assignments for course {courseId}
            <button className="button-total">40% of Total</button>
          </h2>
        </div>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              assignment={assignment}
              courseId={courseId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;