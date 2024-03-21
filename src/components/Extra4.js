import React from 'react';
import Card4 from './Card4';
 
const Extras = [
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/egg-peach-dessert9890.png',
    name: 'ТООРТОЙ ДЕССЕРТ',
    description: "Өндөгний шар, Сүүн крем, Гурил, Тоор",
    price: '9,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/melts-pepperoni1645.png',
    name: 'МЕЛТС ПЕППЕРОНИ',
    description: "Нимгэн, шаржигнуур гурилтай, бяслаг",   
    price: '11,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/melts-meat-lovers9752.png',
    name: 'МЕЛТС МАХАНД ДУРЛАГСАД',
    description: "Нимгэн, шаржигнуур гурилтай, бяслаг",
    price: '11,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/wedges1093.png',
    name: 'САРАН ТӨМС',
    description: "САРАН ТӨМС",
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/popcorn-chicken9728.png',
    name: 'ПОПКОРН ТАХИА',
    description: "Халуун ногоотой шаржигнуур тахиа 200гр",
    price: '8,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/chicken-drummets-6-pcs2299.png',
    name: 'ТАХИАНЫ ДАЛАВЧНЫ БУГАЛГА',
    description: "Барбекью соусаар амталсан тахианы бугалга 6ш",
    price: '15,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/chicken-drumstick4974.png',
    name: 'ТАХИАНЫ МӨЧ',
    description: "Терияаки соусаар амталсан тахианы мөч",
    price: '13,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/chicken-nuggets-12-pcs2186.png',
    name: 'НАГГЕТ',
    description: "Шарж болгосон амтат тахиан махан наггет",
    price: '8,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/cheesy-roll3555.png',
    name: 'БЯСЛАГТАЙ ОРООМОГ',
    description: "Бяслаг, Пепперони болон Сармисны түрхлэгтэй",
    price: '9,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/calzone-bbq-chicken1110.png',
    name: 'КАЛЗОНЕ BBQ ТАХИА',
    description: "BBQ тахиатай эвхэмэл пицца",
    price: '10,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/calzone-meat-lovers9203.png',
    name: 'КАЛЗОНЕ МАХАНД ДУРЛАГСАД',
    description: "Махны цуглуулга бүхий эвхэмэл пицца",
    price: '10,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/skewers-8-pcs5616.png',
    name: 'ШОРЛОГ',
    description: "8ш Тахиан махан шорлог",
    price: '13,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/rich-wedges4496.png',
    name: 'БАЯЛАГ ТӨМС',
    description: "Халапено соус, пепперонитой шарсан төмс",
    price: '8,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/french-fries1270.png',
    name: 'ШАРСАН ТӨМС',
    description: "Амтат шарсан төмс лоолийн сүмстэй",
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/dessert-pizza7615.png',
    name: 'ДЕССЕРТ ПИЦЦА',
    description: "Олон төрлийн амттан болон бяслагаар баялаг",
    price: '7,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/choco-pops8036.png',
    name: 'ЧОКО ПОПС',
    description: "8 ширхэг амтат чоко попс",
    price: '5,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/cinnamon-twist3464.png',
    name: 'СИННАМОН ТВИСТ',
    description: "Синнамонтой мушгиа талх",
    price: '2,500',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/sausage-rolls8730.png',
    name: 'ЗАЙДАСТАЙ ОРООМОГ',
    description: "Зайдастай ороомог лоолийн сүмстэй",
    price: '6,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/onion-rings-8-pcs2666.png',
    name: 'БҮРЖ ШАРСАН СОНГИНО',
    description: "Бүрж шарсан сонгино 8ш",
    price: '5,000',
  }
];
 
export default function Extra4() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen overflow-scroll bg-[url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg')] bg-center bg-cover bg-no-repeat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 p-3 gap-3">
        {Extras.map((extra, index) => (
          <Card4
            key={index}
            cardImage={extra.cardImage}
            description={extra.description}
            name={extra.name}
            price={extra.price}
          />
        ))}
      </div>
    </div>
  );
}