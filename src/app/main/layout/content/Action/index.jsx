import { memo } from "react";
import { useLocation, Link } from "react-router-dom";

function Action() {
  const location = useLocation();
  const isSignIn = location.pathname === "/sign-in";
  const isSignUp = location.pathname === "/sign-up";

  return (
    <div>
      {isSignIn && (
        <>
          <div>
            Don't have an account? <Link to='/sign-up'>Register</Link>
          </div>
        </>
      )}
      {isSignUp && (
        <>
          <div>
            Already have an account? <Link to='/sign-in'>Login</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(Action);
