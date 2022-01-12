import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }),
);


export default function Adduser() {
  let history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const [state, setstate] = useState({
      name:"",
      email:"",
      contact:"",
      address:"",
  })
  const {name,email,contact,address} = state

  const handleInputChange =(e:any)=>{
    let {name,value}=e.target;
    console.log("name",name)
    console.log("value",value)
    setstate({...state , [name]:value})
  }
  const [error,setError] = useState();
  console.log(state)
  const handleSubmit =(e:any)=>{
    e.preventDefault();
    dispatch(addUser(state))
    history.push("/")
  }


    
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" name="name"  type="text" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Email" name="email"   type="email" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Contact" name="contact"   type="number" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Address" name="address"  type="text" onChange={handleInputChange}/><br/>
      <Button variant='contained' color='primary' type='submit' style={{width:"150px",marginTop:'10px'}}>
        ADD USER
      </Button>
      <Button variant='contained' color='primary' style={{width:"150px",marginTop:'10px'}} onClick={()=>history.push('/')}>
        View
      </Button>
    </form>
  );
}
