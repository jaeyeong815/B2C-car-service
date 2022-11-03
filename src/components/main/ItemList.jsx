import React from 'react';
import Item from '../common/Item';
import Empty from '../common/Empty';
import { useQuery } from 'react-query';
import { getCars } from '../../apis/apis';
import { options } from '../../apis/options';

const ItemList = () => {
  const { data: allCarList, isLoading } = useQuery(['allCars'], getCars, options.eternal);

  if (isLoading) return <Empty text="불러오는 중" />;
  if (!allCarList) return <Empty text="차량이 없습니다." />;

  return (
    <div>
      {allCarList?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
