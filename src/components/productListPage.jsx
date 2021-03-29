import React, { useContext, useState } from 'react';
import { List } from './provider';

import { 
  Paper, 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Avatar, 
  Button
} from '@material-ui/core';

import { useStyles } from '../styles';
import DeleteModalWindow from './modal_delete';
import ProductForm from './modal_productForm';
import ProductDetailsPage from './product_details_page';


const ProductListPage = () => {

  const { listOfProducts } = useContext(List);

  const [isSortedbyName, sortByName] = useState(false);
  const [isSortedbyAmount, sortByAmount] = useState(false);
  const [chosenProduct, setChosenProduct] = useState('');
  const [openDeleteModal, setDeleteModal] = useState(false);
  const [openDetailModal, setDetailModal] = useState(false);
  const [product, setProduct] = useState({});

  const classes = useStyles();

  const columns = [
    { id: 'photo', label: 'Photo', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100, },
    {
      id: 'description',
      label: 'Description',
      minWidth: 300
    },
    {
      id: 'amount',
      label: 'In stock',
      minWidth: 50
    },
    {
      id: 'details',
      label: 'Details',
      minWidth: 50
    },
    {
      id: 'delete',
      label: 'DeleteProduct',
      minWidth: 50
    },
  ]
  

const handledDeleteOpen = () => {
  setDeleteModal(true);
};

const handleDeleteClose = () => {
  setDeleteModal(false);
};

const openDetails = (product) => {
  setDetailModal(true);
  setProduct(product)
}

const closeDetails = () => {
  setDetailModal(false);
}

let productList = [];

productList =
listOfProducts?.length
      ? listOfProducts.map((product) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={product.id} name={product.title} amount={product.amount}>
            <TableCell>
              <Avatar alt="Product" src={product.imageUrl} />
            </TableCell>
            <TableCell>
              {product.title}
            </TableCell>
            <TableCell>
              {product.description}
            </TableCell>
            <TableCell>
              {product.amount}
            </TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => openDetails(product)}>Details</Button>
            </TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => {
                handledDeleteOpen();
                setChosenProduct(product.id);
              }}>Delete</Button>
            </TableCell>
          </TableRow>
        );
      })
      : null;

    if(isSortedbyName) {
      productList = productList.sort((a, b) => {
        if (a.props.name > b.props.name) {
          return 1;
        }

        if (a.props.name < b.props.name) {
          return -1;
        }

        return 0;
      });
    }

    if(isSortedbyAmount) {
      productList = productList.sort((a, b) => {
        return a.props.amount - b.props.amount
      });
    }

  return (
    <>
      <h1 className={classes.head}>
        Our Products
      </h1>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  if(column.id === 'name') {
                    return (
                      <TableCell
                        title='Sort'
                        className={classes.sorter}
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                        onClick={() => {
                          sortByName(true);
                          sortByAmount(false);
                          }}
                      >
                        {column.label}
                      </TableCell>
                    )
                  }
                  if(column.id === 'amount') {
                    return (
                      <TableCell
                        title='Sort'
                        className={classes.sorter}
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                        onClick={() => {
                          sortByAmount(true);
                          sortByName(false);
                        }}
                      >
                        {column.label}
                      </TableCell>
                    )
                  }
                  return (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                )})}
              </TableRow>
            </TableHead>
            <TableBody>
              {productList}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {openDeleteModal && <DeleteModalWindow id={chosenProduct} handleDeleteClose={handleDeleteClose}/>}
      {openDetailModal && <ProductDetailsPage product={product} closeDetails={closeDetails} />}
    </>
  )
}

export default ProductListPage;