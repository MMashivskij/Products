import React, { useState, useContext } from 'react';
import {
  TextField,
} from '@material-ui/core';

import { useStyles } from '../styles';
import ImageUploadContainer from './image_upload';
import { List } from './provider';

const ProductForm = ({ editProduct }) => {

  console.log(editProduct);

  const { listOfProducts } = useContext(List);

  const classes = useStyles();

  const [image, setImage] = useState('');
  const [upload, setUpload] = useState({});


  let ids = []

  const setId = () => {
    if (ids) {
      return 0;
    }
    ids = [...ids.push(ids[ids.lenght])]
    return ids[ids.lenght - 1]
  }

  const handleImageLoad = (e, callback) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        callback(event);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleLoadMainImage = (e) => {
    handleImageLoad(e, (event) => {
      setImage(event.target.result);
    });
    setUpload(e.target.files[0]);
  };

  return (
    <form className={classes.editForm}>
      <ImageUploadContainer
        handler={handleLoadMainImage}
        src={image}
        id={setId()}
      />
      <TextField id="descrition" label="Description" value={editProduct.description} />
      <TextField id="color" label="Color" value={editProduct.color} />
      <TextField id="amount" label="In stock" value={editProduct.amount} />
      <TextField id="width" label="Width" value={editProduct.size.width} />
      <TextField id="width" label="Height" value={editProduct.size.height} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button className={classes.button} style={{ color: 'black' }}>Submit</button>
        <button className={classes.button} style={{ color: 'black' }}>Back</button>
      </div>
    </form>
  )
}

export default ProductForm;