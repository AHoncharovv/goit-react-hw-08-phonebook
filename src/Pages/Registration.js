import RegistrationForm from '../components/RegistrationForm';

function Registration() {

  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <RegistrationForm />
    </div>
  ); 
};

export default Registration;