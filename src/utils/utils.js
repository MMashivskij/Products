export const images = {
  url: './images'
}

export const titles = {
  1: 'Rolltop red',
  2: 'Rolltop yellow',
  3: 'Shoper bag',
  4: 'Purse'
}

export const descriptions = {
  1: 'Very beautiful backpack with the perfect pattern',
  2: 'Very beautiful backpack with the perfect pattern',
  3: 'Nice cool shopper bag',
  4: 'Nice style purse'
}

export const sizes = {
  backpack: {
    width: 200,
    height: 200
  },
  bag: {
    width: 150,
    height: 150
  },
  purse: {
    width: 50,
    height: 50
  }
}

export const weight = {
  backpack: '2000g',
  bag: '1000g',
  purse: '200g'
}

export let productID = [0, 1, 2, 5];
export const setProductID = () => {
  if(!productID) {
    return 0;
  }
  productID.push(productID.length)
  productID = [...productID]
  return productID[productID.length - 1]
}

export let commentsID = [0, 1, 2, 3, 4, 5, 6, 7];
export const setCommentsID = () => {
  if(!commentsID) {
    return 0;
  }
  commentsID.push(commentsID.length)
  commentsID = [...commentsID]
  return commentsID[commentsID.length - 1]
}


