import {render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('should renders without crashing',()=>{
  render(<NewBoxForm/>);
})

it('should match snapshot',()=>{
const {asFragment} = render(<NewBoxForm/>);
expect(asFragment()).toMatchSnapshot();
})
