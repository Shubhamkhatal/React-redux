import { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,useParams} from 'react-router-dom';
import { getSingleUsers, putUser } from '../redux/actions';

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

export default function Edituser() {
  let history = useHistory();
  type userparams = {
    id: string;
  };
  let {id} = useParams<userparams>();
  
  const dispatch = useDispatch()
  const classes = useStyles();
  useEffect(() => {
    dispatch(getSingleUsers(id))
  }, [])
  const {user} = useSelector((state:any)=>state.users)
  console.log(user)
  useEffect(() => {
    if(user){
      setstate({...user})
    }
  }, [user])
  const [state, setstate] = useState({
      name:"",
      email:"",
      contact:"",
      address:"",
  })
  const {name,email,contact,address} = state
  

  const handleInputChange =(e:any)=>{
    let {name,value}=e.target;
    setstate({...state , [name]:value})
  }
  const [error,setError] = useState();
  console.log(state)
  const handleSubmit =(e:any)=>{
    e.preventDefault();
    dispatch(putUser(id,state))
    
  }


    
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" name="name" value={state.name}  type="text" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Email" name="email" value={email}   type="email" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Contact" name="contact" value={contact}  type="number" onChange={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Address" name="address" value={address}  type="text" onChange={handleInputChange}/><br/>
      <Button variant='contained' color='primary' type='submit' style={{width:"150px",marginTop:'10px'}}>
        Update
      </Button>
      <Button variant='contained' color='primary' style={{width:"150px",marginTop:'10px'}} onClick={()=>history.push('/')}>
        View
      </Button>
    </form>
  );
}
