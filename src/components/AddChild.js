import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userDetailsContext } from './UserDetailsContext';

export default function AddChild(props) {
  const { i } = props;
  const userCtx = useContext(userDetailsContext);
  const [nameChild, setNameChild] = useState(userCtx.childrenArr[i].name);
  const [idChild, setIdChild] = useState(userCtx.childrenArr[i].identity);
  const [birthDateChild, setBirthDateChild] = useState(userCtx.childrenArr[i].birthDate);


  function SetChild() {
    var children = userCtx.childrenArr;
    children[i] = { name: nameChild, birthDate: birthDateChild, identity: idChild ,parentId:1}
    userCtx.setChildrenArr(children);

  }




  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    
    <div>
      <h4>ילד מספר {i + 1}</h4>
      <div className="row g-3 needs-validation"  >
        <div className="col-md-4">
          <label className="form-label" >שם פרטי</label>
          <input maxLength="20" required defaultValue={nameChild} type="text" name='validationCustom03' className="form-control" id="validationCustom03" defaultValue={nameChild} onChange={(e) => { setNameChild(e.target.value) }} onBlur={SetChild} />

        </div>
    
        <div className="col-md-4">
          <label className="form-label">תאריך לידה</label>
          <div className="input-group has-validation">

            <input required defaultValue={birthDateChild} type="date" className="form-control" id="bd" aria-describedby="inputGroupPrepend" defaultValue={birthDateChild} onChange={(e) => { setBirthDateChild(e.target.value) }} onBlur={SetChild}/>

          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">תעודת זהות</label>
          <div className="input-group has-validation">
            <input pattern= "[0-9]+" minLength="6" maxLength="9" required defaultValue={idChild} type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" defaultValue={idChild} onBlur={SetChild} onChange={(e) => { setIdChild(e.target.value) }} />

          </div>
        </div>


      </div> </div>
  );
}