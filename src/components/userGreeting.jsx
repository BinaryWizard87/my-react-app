import PropType from "prop-types";

function UserGreeting(props) {
  /*  return props.isLoggIn ? (
    <h2 className="welcome-message">Welcome {props.username} to our website</h2>
  ) : (
    <h2 className="login-prompit">Please log in to continue</h2>
  );
  */
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username} </h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.prototype = {
  isLoggedIn: PropType.bool,
  username: PropType.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
