import React, { useState, useContext } from 'react';
import { setCommentsID } from '../utils/utils';
import { useStyles } from '../styles';

import { Avatar } from '@material-ui/core';
import ProductForm from './modal_productForm';

import { List } from './provider';

const ProductDetailsPage = ({ product, closeDetails }) => {

  const { comments } = useContext(List);

  const [listOfComment, setListOfComment] = useState(comments);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [openEditPage, setOpenEditPage] = useState(false);

  const classes = useStyles();

  const commetsList = listOfComment.filter(item => {
    return item.productId === product.id
  }
  ).map(el => (
    <div className={classes.comment} key={el.id}>
      <span>
        {el.description}
      </span>
      <br />
      <span>
        {el.date}
      </span>
    </div>
  ));

  const setComment = () => {
    setListOfComment([...comments, {
      id: String(setCommentsID()),
      productId: product.id,
      description: textAreaValue,
      date: String(new Date),
    }]);
    setTextAreaValue('');
  }

  const addTextAreaValue = (e) => {
    e.preventDefault();
    setTextAreaValue(e.target.value);
  }

  const handleOpenEditPage = () => {
    setOpenEditPage(true);
  }

  const handleCloswEditPage = () => {
    setOpenEditPage(false);
  }

  return (
    <div className={classes.cover}>
      <div className={classes.content}>
        <Avatar className={classes.avatar} alt="Product" src={product.imageUrl} />
        <div>Name: {product.title}</div>
        <div>Description: {product.title}</div>
        <div>In stock: {product.amount}</div>
        <div>Color: {product.color}</div>
        <div>Width: {product.size.width}</div>
        <div>Height {product.size.height}</div>
        <div className={classes.comments}>
          Comments:
          {commetsList}
        </div>
        <textarea name="addComment" id="addComment" cols="30" rows="10" onChange={(e) => addTextAreaValue(e)}></textarea>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={setComment}>Add comment</button>
          <button className={classes.button} onClick={closeDetails}>Close</button>
          <button className={classes.button} onClick={handleOpenEditPage}>Edit</button>
        </div>
      </div>
      {openEditPage && <ProductForm handleCloswEditPage={handleCloswEditPage} editProduct={product} />}
    </div>
  )
}

export default ProductDetailsPage;