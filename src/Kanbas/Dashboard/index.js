import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./index.css";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    
    <div class="wd-flex-grow-1 container-fluid">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({ Object.keys(courses).length})</h2>
      <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} class="btn btn-success">
        Add
      </button>
      <button onClick={updateCourse} class="btn btn-primary">
        Update
      </button>
      <hr />
      <div class="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">

          {courses.map((course, index) => (
            <div className="col">
            <div class="card h-130">
              <img src="/images/pink.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>


                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >

                  {course.name}
                </Link>

                
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div>                <button className="btn btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button></div>
              </div>
            </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default Dashboard;