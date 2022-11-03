import styled from 'styled-components';
import Switch from '../common/Switch';
import { category } from '../../utils/constants';

const Switches = () => {
  return (
    <Div>
      {category.map((item) => (
        <Switch key={item.segment} {...item} />
      ))}
    </Div>
  );
};

export default Switches;

const Div = styled.div`
  border-bottom: 1px solid;
`;
