import React from 'react';
import Card2 from './Card2';
 
const Pizzas = [
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-pizza-with-parmesan-cheese1498.png',
    name: 'ПАРМЕЗАН БЯСЛАГТАЙ ХАТДОГ',
    description: "Пицца болон Хот-дог хоёулаа",
    price: '37,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-pizza-with-jalapeno-sauce5286.png',
    name: 'ХАЛАПЕНО СОУСТОЙ ХАТДОГ',
    description: "Пицца болон Хот-дог хоёулаа",   
    price: '37,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/veggie-lovers8436.png',
    name: 'ХҮЧИРХЭГ',
    description: "Бөөрөнхий мах, Тахианы мах, Зайдас",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/meat-lovers-2242.png',
    name: 'МАХАНД ДУРЛАГСАД',
    description: "Бөөрөнхий мах, гахайн мах, пепперони",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/super-supreme-5056.png',
    name: 'СУПЕР СУПРЕМ',
    description: "Пепперони, гахайн утсан мах, тахиан мах",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pepperioni-6084.png',
    name: 'ПЕППЕРОНИ',
    description: "Пепперони 2 дахин орсон, Лоолийн соус",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/bbq-chicken3165.png',
    name: 'BBQ ТАХИА',
    description: "Барбекью соусаар амталсан тахианы мах",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hawaiin-1188.png',
    name: 'ХАВАЙН',
    description: "Хан боргоцой, Гахайн мах, Лоолийн соус",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/cheese-pizza9428.png',
    name: 'БЯСЛАГТ',
    description: "Улаан лоолийн соус, моццарелла бяслаг",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/veggie-lovers8436.png',
    name: 'НОГООНД ДУРЛАГСАД',
    description: "Мөөг, Хоёр төрлийн амтат чинжүү",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ml-&-pepperioni8219.png',
    name: 'МАХ & ПЕППЕРОНИ',
    description: "Нэг пиццанаас хоёр өөр амтыг мэдрээрэй",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pepperioni-&-cheese6018.png',
    name: 'ПЕППЕРОНИ & БЯСЛАГТ',
    description: "Нэг пиццанаас хоёр өөр амтыг мэдрээрэй",
    price: '32,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ss-&-cheese4595.png',
    name: 'СУПЕР СУПРИМ & БЯСЛАГТ',
    description: "Нэг пиццанаас хоёр өөр амтыг мэдрээрэй",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/ss-&-pepperioni8302.png',
    name: 'СУПЕР СУПРЕМ & ПЕППЕРОНИ',
    description: "Нэг пиццанаас хоёр өөр амтыг мэдрээрэй",
    price: '34,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/meat-lover-&-cheese9456.png',
    name: 'МАХАНД ДУРЛАГСАД & БЯСЛАГТ',
    description: "Нэг пиццанаас хоёр өөр амтыг мэдрээрэй",
    price: '34,000',
  }
];
 
export default function Extra2() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen overflow-scroll bg-[url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg')] bg-center bg-cover bg-no-repeat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 p-3 gap-3">
        {Pizzas.map((pizza, index) => (
          <Card2
            key={index}
            cardImage={pizza.cardImage}
            description={pizza.description}
            name={pizza.name}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}