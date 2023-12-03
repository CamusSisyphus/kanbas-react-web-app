import Home from "./home" ;
import Signup from "./users/signup" ;
import Profile from "./profile" ;
import Signin from "./users/signin";
import Account from "./users/account";
import {Routes, Route} from "react-router";
import UserTable from "./users/table";
import Navigation from "./nav";

function Project() {
  return (
    <div className="container-fluid">
        <h1>Project</h1>

        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/"         element={<Home/>}/>
              <Route path="/signup"    element={<Signup/>}/>
              <Route path="/profile"   element={<Profile/>}/>
              <Route path="/signin" element={<Signin />} />
              <Route path="/account" element={<Account />} />
              <Route path="/admin/users" element={<UserTable />} />
              <Route path="/account/:id" element={<Account />} />

            </Routes>
          </div>
        </div>
   </div>
  );
}
export default Project;