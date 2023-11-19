import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import {
  setAssignment,
  addAssignment,
  updateAssignment,
} from "./assignmentsReducer";
import { createAssignment } from "./client";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";

function AssignmentEditor() {
  let assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  let isNewAssigment = assignmentId === "NEW_ASSIGNMENT";

  const hanleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const navigate = useNavigate();
  const handleSave = () => {
    console.log(assignment);
    if (isNewAssigment) {
      console.log("create");
      hanleAddAssignment();
    } else {
      console.log("update");
      handleUpdateAssignment();
    }

    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <form>
      <div class="form-group">
        <br />
        <label for="AssignmentName">Assignment Name</label>
        <input
          value={assignment.title}
          className="form-control"
          type="text"
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <br />
        <input
          value={assignment.description}
          className="form-control"
          type="text"
          placeholder="Description"
          onChange={(e) =>
            dispatch(
              setAssignment({ ...assignment, description: e.target.value })
            )
          }
        />
        <br />
        <form>
          <div class="form-group row">
            <label for="Point" class="col-sm-2 col-form-label">
              Points
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="100" />
            </div>
          </div>
        </form>
        <br />
        <div class="container">
          <div class="row align-items-center">
            <label for="assignBox" class="col-sm-2">
              Assign
            </label>
            <div class="col-sm-10">
              <div id="assignBox" class="border p-3">
                <div class="mb-3">
                  <label for="dateInput" class="form-label">
                    Due
                  </label>
                  <input
                    value={assignment.Due}
                    type="date"
                    class="form-control"
                    id="dateInput"
                    placeholder="2023-10-18"
                    onChange={(e) =>
                      dispatch(
                        setAssignment({ ...assignment, Due: e.target.value })
                      )
                    }
                  />
                </div>

                <div class="row">
                  <div class="col">
                    <label for="availableFromInput" class="form-label">
                      Available from
                    </label>
                    <input
                      value={assignment.availableFromDate}
                      type="date"
                      class="form-control"
                      id="availableFromInput"
                      placeholder="2023-10-01"
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableFromDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div class="col">
                    <label for="untilInput" class="form-label">
                      Until
                    </label>
                    <input
                      value={assignment.availableUntilDate}
                      type="date"
                      class="form-control"
                      id="untilInput"
                      placeholder="2023-10-17"
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableUntilDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light me-2"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        </div>
        <hr />
      </div>
    </form>
  );
}

export default AssignmentEditor;