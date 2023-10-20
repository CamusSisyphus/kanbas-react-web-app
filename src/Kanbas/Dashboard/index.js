import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-flex-grow-1 container-fluid">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div class="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">

          {courses.map((course, index) => (
            <div className="col">
            <div class="card h-100">
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
              </div>
            </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default Dashboard;