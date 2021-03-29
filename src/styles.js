import { makeStyles } from '@material-ui/core/styles';
import upload from './images/upload.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },

  head: {
    marginLeft: '40px'
  },

  sorter: {
    transition: '0.5s',
    '&:hover': {
      cursor: 'pointer',
      background: '#fff',
    }
  },  

  cover: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    zIndex: 2,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
  },

  avatar: {
    width: '50px'
  },

  comments: {
    marginTop: "20px"
  },

  comment: {
    marginBottom: "20px"
  },

  content: {
    color: 'white',
    border: '2px dashed',
    padding: '30px',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px'
  },

  button: {
    minWidth: '50px',
    width: 'fit-content',
    height: '50px',
    background: 'none',
    color: '#fff',
    '&:hover': {
      background: '#fff',
      color: '#000',
      cursor: 'pointer'
    }
  },
  labelWithBack: {
    display: 'inline-block',
    width: '200px',
    height: '200px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${upload})`,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.7
    }
  },
  labelWithoutBack: {
    display: 'inline-block',
    width: '200px',
    height: '200px',
    '&:hover': {
      backgroundImage: `url(${upload})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    '&:hover > img': {
      opacity: 0,
      cursor: 'pointer'
    }
  },
  image: {
    width: '200px',
    height: '200px'
  },
  input: {
    display: 'none'
  },
  editForm: {
    border: '1px solid black',
    background: 'white',
    display: 'flex',
    flexDirection: 'column'
  }
}));