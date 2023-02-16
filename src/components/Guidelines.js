import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { userDetailsContext } from './UserDetailsContext';

export default function Guidelines() {
    const myContext=useContext(userDetailsContext);
    const navigate = useNavigate();
    return(
  <div className="alert alert-primary" role="alert" style={{width:`100vw`}} >
       <h4 className="alert-heading">!שלום {myContext.name} {myContext.family}</h4>
    <p >ברוכים הבאים לאתר שלנו
      <br/>
      עליכם למלא את הטופס לפי הנתונים הנדרשים
     
       </p>
    <hr/>
    <p className="mb-0">בהצלחה</p>
    <button className="btn btn-primary" onClick={() => {
    navigate(`/form`)
}}>למעבר לטופס</button>
  </div>

      );



}