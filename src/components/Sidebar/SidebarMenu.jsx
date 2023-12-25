import React from "react";
import UserHeader from "../Header/UserHeader";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/UserAction";
const SidebarMenu = () => {
  const user = useSelector((state) => state.userLogin);
  let currentUser = null;
  if (user)
    currentUser = {
      ...user.userInfo,
    };
  const history = useNavigate();
   const dispatch = useDispatch();
   const logoutHandler = () => {
     dispatch(logout());
     history("/")

   };
  return (
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>JobBud</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Welcome {currentUser.userType},</p>
        <li>
          <a href="/profile">Profile</a>
        </li>
        {currentUser.userType == "FREELANCER" ? (
          <div>
            {" "}
            <li class="active">
              <a
                class="dropdown-toggle"
                data-bs-toggle="collapse"
                href="#jobsSubMenu"
                aria-expanded="false"
                aria-controls="jobsSubMenu"
              >
                Jobs
              </a>
              <ul class="collapse list-unstyled" id="jobsSubMenu">
                <li>
                  <a href="/findjob">Find Job</a>
                </li>
                <li>
                  <a href="/myJobs">My Jobs</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-toggle"
                data-bs-toggle="collapse"
                href="#microtransactionSubMenu"
                aria-expanded="false"
                aria-controls="microtransactionSubMenu"
              >
                Micro Transactions
              </a>
              <ul class="collapse list-unstyled" id="microtransactionSubMenu">
                <li>
                  <Link to="/findmicrojobs">Find Micro Jobs</Link>
                </li>

                <li>
                  <a href="/mymicrojobs">My micro jobs</a>
                </li>
              </ul>
            </li>
          </div>
        ) : (
          <div>
            {" "}
            <li class="active">
              <a
                class="dropdown-toggle"
                data-bs-toggle="collapse"
                href="#jobsSubMenu"
                aria-expanded="false"
                aria-controls="jobsSubMenu"
              >
                Jobs
              </a>
              <ul class="collapse list-unstyled" id="jobsSubMenu">
                <li>
                  <a href="/createjob">Add New Job</a>
                </li>
                <li>
                  <a href="/myJobs">My Jobs</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-toggle"
                data-bs-toggle="collapse"
                href="#microtransactionSubMenu"
                aria-expanded="false"
                aria-controls="microtransactionSubMenu"
              >
                Micro Transactions
              </a>
              <ul class="collapse list-unstyled" id="microtransactionSubMenu">
                <li>
                  <a href="/microtransaction/create">Add Micro Job</a>
                </li>

                <li>
                  <a href="#">My Micro Jobs</a>
                </li>
              </ul>
            </li>{" "}
          </div>
        )}{" "}
        <li>
          <a href="#" onClick={logoutHandler}>
            Logout
          </a>
        </li>
      </ul>
      <label className="mx-4 fs-4">{currentUser.userType}</label>
    </nav>
  );
};

export default SidebarMenu;

/* Pages&Components should exist for customer

Job List
    -job adding
    - My jobs - added by customer- (completed jobs could be seem in same place)
 -view offers
micro transaction list
    -micro transaction adding
    -my micro transactions - added by customer- (completed micro jobs could be seem in same place)
wallet page
    -total amounts
    -history
    -offer history
edit profile

/* Pages&Components should exist for freelancer

Job List
    -job apply
    - My jobs  - assigned jobs to relevant freelancer - (completed jobs could be seem in same place)
micro transaction list
    -micro transaction adding
    -my micro transactions - assigned jobs to relevant freelancer (completed micro jobs could be seem in same place)
wallet page
    -total amounts & pending amounts
    -history
    -offer history
edit profile



Also we dont need to find freelancer. This page is unnecessary
**toggleSidebar will commit with a hook**

*/
