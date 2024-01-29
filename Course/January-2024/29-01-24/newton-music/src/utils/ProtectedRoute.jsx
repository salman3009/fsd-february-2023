// import { Redirect, Route } from "react-router-dom";
// import { useUser } from "../Provider/UserProvider";

// export function ProtectedRoute({ children, ...rest }) {
//   const { isUserLoggedIn } = useUser();

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isUserLoggedIn ? (
//           children
//         ) : (
//           <Redirect to={{ pathname: "/login", state: { from: location } }} />
//         )
//       }
//     />
//   );
// }
