import LoginForm from "components/LoginForm";

function Login() {

  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <LoginForm />
    </div>
  ); 
};

export default Login;