import React,{useState} from 'react'


const Form = () => {

    

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');    

  function handleSubmit(evt) {

    evt.preventDefault();
    
     setName(evt.target[0].value);
     setEmail(evt.target[1].value);
     setPassword(evt.target[2].value);

  }

  return (
    <>
   <div className="form-container">

    <form onSubmit={(evt)=>handleSubmit(evt)}>

    <div class="form-group">
    <label for="exampleInputName1">Name:</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/> 
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>

 

  <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="button">
  <button type="submit" className="btn btn-dark">Enviar</button>
  </div>
</form>
</div>

<div className="table-container2">
          <table className="table">
                  <thead >
                    <tr className="table-dark">
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        
                    </tr>
                  </thead>
                <tbody>
                 <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                 </tr>
                </tbody>
            </table>
    </div>

    </>
  )
}

export default Form