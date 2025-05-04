import GoogleAuth from "./GoogleAuth";
const LoginPage = () => {
  return (
  <>
    <div className="login-page">
      <h1>Login to Stream2Notes</h1>
      <p>Stream2Notes is a web application that allows you to take notes while watching YouTube videos.</p>
      <p>Login with your Google account to get started.</p>
      <GoogleAuth />
    </div>
  </>
  );
};

export default LoginPage;
