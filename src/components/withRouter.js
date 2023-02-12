// import { useNavigate } from 'react-router-dom';

// export const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const navigate = useNavigate();
    
//     return (
//       <Component
//         navigate={navigate}
//         {...props}
//         />
//     );
//   };
  
//   return Wrapper;
// };

import React from 'react';
import { useParams } from 'react-router-dom';
 
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params}

    />
  );
};
 
export default withRouter;

// import { useParams, useNavigate } from "react-router-dom";

// export function withRouter(Component) {
//   return (props) => (
//     <Component
//       {...props}
//       params={useParams()}
//       navigate={useNavigate()}
//     />
// );
// }

// Tutorial implentación
// https://www.cluemediator.com/how-to-access-url-parameters-in-the-class-component-using-react-router-v6

// https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom