import React, {useState} from 'react'
import './App.scss';
import Navbar from './components/menu/Navbar'
import LoginForm from './components/form/LoginForm'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({name:'', email:''});
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
    
    const Logout = () => {
      setIsSubmitted(false);
      setUser({name:"", email:""});
      setSidebar(false);
    }

    const verifyUser = (values) => {
      setUser({
        name: values.name,
        email: values.email
      })
    }

    function submitForm() {
      setIsSubmitted(true);
    }

  return (
    <div className="App">
       <Navbar Logout={Logout} showSidebar={showSidebar} sidebar={sidebar} loggedIn={isSubmitted} user={user}/>
     
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm} verifyUser={verifyUser}/>
        ) :(
          <Dashboard Logout={Logout} user={user}/>
        )}
     
    </div>
  );
}


export default App;
