import { useContext,useState} from 'react';
import { useForm } from 'react-hook-form';
import { userDetailsContext } from './UserDetailsContext';
import AddChild from './AddChild';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Test from './Exel';
export default function Form() {
  const userCtx = useContext(userDetailsContext);
  
  const [finish, setFinish] = useState(false);

  const navigate = useNavigate();
  var fatherId;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddServer = (e) => {
    setFinish(true);
    var hmo;
    e.preventDefault();
    switch (userCtx.hmo) {
      case 'מכבי':
        console.log('מכבי')
        hmo = 1;
        break;
      case 'מאוחדת':
        console.log('מאוחדת')
        hmo = 2;
        break;
      case 'כללית':
        console.log('כללית')
        hmo = 3;
        break;
      case 'לאומית':
        console.log('לאומית')
        hmo = 4;
        break;
      default:
        hmo = 5;
        break;
    }


    axios.post(`https://localhost:7094/api/Users`, { family: userCtx.family, name: userCtx.name, birthDate: userCtx.birthDate, identity: userCtx.id, isMale: userCtx.isMale, userHmoId: hmo })
      .then((res) => {
        console.log(res)
        axios.get(`https://localhost:7094/api/Users`)
          .then((res) => {
            console.log(res)
            res.data.forEach(element => {
              if (element.identity === userCtx.id) {
                fatherId = element.id;

              }
            });

            AddChildrenToServer(fatherId);
          })
          .catch((req) => { console.log(req) })

      })
      .catch((req) => { console.log(req) })

  }

  function AddChildrenToServer(fatherId) {
    console.log(fatherId)
    userCtx.childrenArr.forEach(element => {
      element.parentId = fatherId;

      axios.post(`https://localhost:7094/api/Child`, element)
        .then((res) => { console.log(res) })
        .catch((req) => { console.log(req) })
    });

  }



  function AddFormChild(count) {
    let children = [...userCtx.childrenArr]
    for (let index = children.length; index < count; index++) {
      children.push({ nameChild: "", idChild: "", birthDateChild: new Date(), key: index })
    }
    children.splice(count)
    userCtx.setChildrenArr(children)
  }

  return (!finish?<>


    <form className="row g-3 needs-validation" onSubmit={(e) => { handleSubmit(AddServer(e)); }} >




      <div className="col-md-4">
        <label className="form-label">שם פרטי</label>
        <input type="text" className="form-control" id="validationCustom03" required maxLength="30" defaultValue={userCtx.name} onChange={(e) => { userCtx.setName(e.target.value) }} />


      </div>


      <div className="col-md-4">
        <label className="form-label">שם משפחה</label>
        <input type="text" className="form-control" id="validationCustom04" defaultValue={userCtx.family} required maxLength="20" onChange={(e) => { userCtx.setFamily(e.target.value); console.log(userCtx.name) }} />


      </div>






      <div className="col-md-4">
        <label className="form-label">תעודת זהות</label>
        <div className="input-group has-validation">
          <input pattern="[0-9]+" type="text" className="form-control" id="we" aria-describedby="inputGroupPrepend" defaultValue={userCtx.id} required minLength="5" maxLength="9" onChange={(e) => userCtx.setId(e.target.value)} />
        </div>
      </div>
      <div className="col-md-3">
        <label className="form-label">תאריך לידה</label>
        <div className="input-group has-validation">
          <input type="date" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" defaultValue={userCtx.birthDate} required onChange={(e) => userCtx.setBirthDate(e.target.value)} />

        </div>
      </div>

      <div className="col-md-3">
        <label className="form-label">מין</label>
        <select className="form-select" id="validationCustom04" defaultValue={userCtx.isMale} required onChange={(e) => userCtx.setIsMale(e.target.value === 'זכר' ? true : false)}>
          <option>זכר</option>
          <option>נקבה</option>
        </select>

      </div>
      <div className="col-md-3">
        <label className="form-label">קופת חולים</label>
        <select className="form-select" id="validationCustom05" defaultValue={userCtx.hmo} required onChange={(e) => userCtx.setHmo(e.target.value)}>
          <option>מכבי</option>
          <option>כללית</option>
          <option>מאוחדת</option>
          <option>לאומית</option>
          <option>אחר</option>
        </select>

      </div>
      <div className="col-md-3">
        <label className="form-label">כמות ילדים</label>
        <div className="input-group has-validation">
          <input required defaultValue={userCtx.children} type="number" className="form-control" id="c" aria-describedby="inputGroupPrepend" onChange={(e) => { AddFormChild(e.target.value); userCtx.setChildren(e.target.value) }} />
        </div>
      </div>
      <div style={{ width: `100vw` }} >

        {
          userCtx.childrenArr.map((c, index) =>

            <AddChild key={index} i={index} />
          )
        }

      </div>
      <div  className="btn-group,col-md-3" role="group" aria-label="Basic example">
        
          <button type="submit" className="btn btn-primary" >לאישור טופס</button>
    

        
          <button className="btn btn-primary" onClick={() => {
            navigate('/')
          }}>לדף ההוראות</button>
       
      </div>
    </form>



  </>:     <Test></Test>

  );
}
