import React, { useContext } from 'react';
import { List } from './provider';

import { useStyles } from '../styles';

const DeleteModalWindow = ({ id, handleDeleteClose  }) => {
  console.log(id);

  const { deleteProduct } = useContext(List);


  const classes = useStyles();

  return (
    <div className={classes.cover}>
      <div className={classes.content}>
        <span>Are you sure?</span>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={() => {deleteProduct(id); handleDeleteClose();}}>YES</button>
          <button className={classes.button} onClick={handleDeleteClose}>NO</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModalWindow;
