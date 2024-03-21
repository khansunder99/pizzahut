import React from 'react';
import Card1 from './Card1';
 
const Sets = [
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-combo6293.png',
    name: 'ХАТ ДОГ БАГЦ',
    description: "Пицца Хат-н онцгой Хат Дог багц : Дунд хэмжээтэй зайдсан дэлбээт захтай Хат Дог",
    price: '48,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/party-combo5035.png',
    name: 'ПАРТИ БАГЦ',
    description: "Дунд хэмжээтэй 3ш (8 зүсэм), Наггетс 18ш, Шарсан төмс, Зайдастай ороомог 12ш",
    price: '140,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/triple-box2455.png',
    name: 'ГУРВАН САЙХАН',
    description: "Дунд хэмжээтэй 2ш (8 зүсэм), Попкорн тахиа, Наггетс, дессерт пицца, Шарсан төмс",
    price: '90,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/friends-combo4149.png',
    name: 'НАЙЗУУД БАГЦ',
    description: "Найзууд багц Дунд хэмжээтэй пицца (8 зүсэм), Попкорн тахиа, Наггетс (9ш)",
    price: '55,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/dream-combo7861.png',
    name: 'МӨРӨӨДЛИЙН БАГЦ',
    description: "Дунд хэмжээтэй пицца (8 зүсэм), Наггет (9ш), Шарсан төмс, Ундаа (1.25l)",
    price: '45,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/chicken-supreme-combo1207.png',
    name: 'ТАХИАТАЙ СУПРЕМ БАГЦ',
    description: "Попкорн тахиа (1.5 порц), Наггет (9ш), Тахианы бугалга, Шорлог – 6ш",
    price: '42,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/my-box8306.png',
    name: 'МИНИЙ БАГЦ',
    description: "Сонголтоор 8 жижиг пицца, эсвэл бидний шинэ мелтсийг сонгох боломжтой.",
    price: '15,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/pair-deal9918.png',
    name: 'ХОС ПИЦЦА',
    description: "Хоёр пицца илүү хэмнэлттэй үнээр худалдан аваарай",
    price: '60,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/xtreme-combo2506.png',
    name: 'ХҮЧИРХЭГ БАГЦ',
    description: "Хүчирхэг пицца (8 зүсэм), Наггет (9ш), Зайдастай ороомог (4ш)",
    price: '48,000',
  },
  {
    cardImage:
      'https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/triple-pizza2918.png',
    name: 'ГУРВАН ПИЦЦА',
    description: "Гурван пицца илүү хэмнэлттэй үнээр худалдан аваарай.",
    price: '90,000',
  }
];
 
export default function Extra1() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen overflow-scroll bg-[url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg')] bg-center bg-cover bg-no-repeat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 p-3 gap-3">
        {Sets.map((sets, index) => (
          <Card1
            key={index}
            cardImage={sets.cardImage}
            name={sets.name}
            description={sets.description}
            price={sets.price}
          />
        ))}
      </div>
    </div>
  );
}