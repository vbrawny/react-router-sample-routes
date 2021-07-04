import React from "react";
import { render } from "react-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
// import { Home } from "./components/Home";
// import { Topics } from "./components/Topics";

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/companies">Companies</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route
//         path="/companies"
//         render={() => {
//           return <h2>Companies</h2>;
//         }}
//       />
//       <Route
//         exact
//         path="/companies"
//         render={() => (
//           <div>
//             {companies.map((company) => (
//               <div key={company.id}>
//                 <Link to={`/companies/${company.id}`}>{company.name}</Link>
//               </div>
//             ))}
//             <div>
//               <Link to={`/companies/i-dont-exist`}>
//                 A Company That Doesn't Exist
//               </Link>
//             </div>
//           </div>
//         )}
//       />
//       <Route
//         exact
//         path="/companies/:companyId"
//         render={({ match }) => {
//           const currentCompanyId = match.params.companyId;
//           const currentCompany = companies[currentCompanyId];

//           if (!currentCompany) {
//             return <CompanyNotFound />;
//           }

//           return (
//             <div>
//               <h3>Welcome to the {currentCompany.name} Detail Page</h3>
//             </div>
//           );
//         }}
//       />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );

render(<App />, document.getElementById("root"));
