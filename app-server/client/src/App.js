
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Button} from 'react-bootstrap';

import LoginForm from './components/loginForm';
import Welcome from './components/welcome';

function App() {

  // useEffect(()=>{
  //   console.log('useEffect()')

  //   fetch('/api/users').then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // },[])

  const [status,setStatus] = useState(false)

  const doLogin = (l,p)=>{
      console.log('doLogin()',l,p)

      fetch(`/api/login/${l}/${p}`).then(
        (response) =>{
            console.log('response',response.status)
            if (response.status === 200) setStatus(true);
            else alert('Wrong data')
        }
      )

  }
  

  const doLogout = ()=>{
    //console.log('doLogout()')
    setStatus(false);
}

  return (
    <>
    <Container>
        {(!status) && (<LoginForm login={doLogin} />)}
        {(status) && (<Welcome logout={doLogout} />)}
    </Container>
    </>
  );
}

export default App;
