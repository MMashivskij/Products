import { images, titles, descriptions, sizes, weight } from '../utils/utils';

export const products = [
  {
    id: '0',
    imageUrl: `${images.url}/Rolltop_red.png`,
    title: titles[1],
    description: descriptions[1],
    amount: 5,
    color: 'red',
    size: {
      width: sizes.backpack.width,
      height: sizes.backpack.height
    },
    weight: weight.backpack,
  },

  {
    id: '1',
    imageUrl: `${images.url}/Rolltop_yellow.png`,
    title: titles[2],
    description: descriptions[2],
    amount: 3,
    color: 'yelow',
    size: {
      width: sizes.backpack.width,
      height: sizes.backpack.height
    },
    weight: weight.backpack,
  },

  {
    id: '2',
    imageUrl: `${images.url}/Shoper_bag.jpg`,
    title: titles[3],
    description: descriptions[3],
    amount: 3,
    color: 'pink',
    size: {
      width: sizes.bag.width,
      height: sizes.bag.height
    },
    weight: weight.bag,
  },

  {
    id: '3',
    imageUrl: `${images.url}/Purse.jpg`,
    title: titles[4],
    description: descriptions[4],
    amount: 10,
    color: 'white',
    size: {
      width: sizes.purse.width,
      height: sizes.purse.height
    },
    weight: weight.purse,
  }
]

export const comments = [
  {
    id: '0',
    productId: '0',
    description: 'Cool bagpack',
    date: `14:00 22.08.2021`
  },

  {
    id: '1',
    productId: '0',
    description: 'Cool bagpack',
    date: `14:00 22.08.2020`
  },

  {
    id: '2',
    productId: '1',
    description: 'Cool bagpack',
    date: `14:00 22.08.2020`
  },
  {
    id: '3',
    productId: '1',
    description: 'Cool bagpack',
    date: `14:00 22.08.2021`
  },

  {
    id: '4',
    productId: '2',
    description: 'Cool Shoper bag',
    date: `14:00 22.08.2021`
  },

  {
    id: '5',
    productId: '2',
    description: 'Cool Shoper bag',
    date: `14:00 22.08.2020`
  },

  {
    id: '6',
    productId: '3',
    description: 'Cool Purse',
    date: `14:00 22.08.2021`
  },

  {
    id: '7',
    productId: '3',
    description: 'Cool SPurse',
    date: `14:00 22.08.2021`
  },
]
