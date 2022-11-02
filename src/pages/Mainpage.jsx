import Header from '../components/common/Header';
import Switches from '../components/main/Switches';
import ItemList from '../components/main/ItemList';

const Mainpage = () => {
  return (
    <>
      <Header title="전체차량" />
      <Switches />
      <ItemList />
    </>
  );
};

export default Mainpage;
