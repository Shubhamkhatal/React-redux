import  { useEffect } from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { loadUsers,deleteUser} from '../redux/actions';
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function Home() {
  let history = useHistory();
    let dispatch = useDispatch();
    const classes = useStyles();
    const buttonStyle = useButtonStyles();
    const handleDelete =(id: number)=>{
      if(window.confirm("Do you really want to delete")){
      dispatch(deleteUser(id))
      }
    }
  
    useEffect(() => {
      dispatch(loadUsers())
    }, [])
    const { users } = useSelector((state:{users:any})=>state.users);
    
    
    return (<>
  
      <Button variant='contained' color='primary' className={buttonStyle.root} onClick={()=>history.push('/adduser')} >
        ADD USER
      </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Address </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user:any) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.contact}</StyledTableCell>
                  <StyledTableCell align="center">{user.address}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonStyle.root}>
                  <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button style={{marginRight:'5px'}} color='primary'onClick={()=> history.push(`/edituser/${user.id}`)}>Edit</Button>
                    <Button color='secondary' onClick={()=> handleDelete(user.id)}>Delete</Button>
                  </ButtonGroup>
                  </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody> 
          </Table>
        </TableContainer>
        </>
      );
    }

export default Home
