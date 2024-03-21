import React from 'react';
import Card3 from './Card3';
 
const Drinks = [
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pepsi-1.25l8690.png',
    name: 'PEPSI 1.25',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-lemon-1.25l2398.png',
    name: 'ICE TEA LEMON 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-strawberry-1.25l7023.png',
    name: 'ICE TEA STRAWBERRY 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-green-tea-1.25l4667.png',
    name: 'ICE TEA GREEN TEA 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/seven-up-1.25l4091.png',
    name: 'SEVEN UP 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/bonaqua-0.5l1750.png',
    name: 'ЦЭВЭР УС 0.5Л',
    price: '2,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pepsi-1.25l8690.png',
    name: 'PEPSI 1.25',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-lemon-1.25l2398.png',
    name: 'ICE TEA LEMON 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-strawberry-1.25l7023.png',
    name: 'ICE TEA STRAWBERRY 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-green-tea-1.25l4667.png',
    name: 'ICE TEA GREEN TEA 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/seven-up-1.25l4091.png',
    name: 'SEVEN UP 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/bonaqua-0.5l1750.png',
    name: 'ЦЭВЭР УС 0.5Л',
    price: '2,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pepsi-1.25l8690.png',
    name: 'PEPSI 1.25',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-lemon-1.25l2398.png',
    name: 'ICE TEA LEMON 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-strawberry-1.25l7023.png',
    name: 'ICE TEA STRAWBERRY 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ice-tea-green-tea-1.25l4667.png',
    name: 'ICE TEA GREEN TEA 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/seven-up-1.25l4091.png',
    name: 'SEVEN UP 1.25L',
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/bonaqua-0.5l1750.png',
    name: 'ЦЭВЭР УС 0.5Л',
    price: '2,000',
  },
];
 
export default function Extra1() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen overflow-scroll bg-[url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg')] bg-center bg-cover bg-no-repeat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 p-3 gap-3">
        {Drinks.map((drink, index) => (
          <Card3
            key={index}
            cardImage={drink.cardImage}
            name={drink.name}
            price={drink.price}
          />
        ))}
      </div>
    </div>
  );
}