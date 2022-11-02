import CardItem from './CardItem';

// TODO api 통신하여 데이터 받은 뒤 map함수 사용하여 뿌리기
const CardList = () => {
  return (
    <ul className="cardList">
      <CardItem />
      <CardItem />
      <CardItem />
    </ul>
  );
};

export default CardList;
