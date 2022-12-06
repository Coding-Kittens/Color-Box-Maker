import {render} from '@testing-library/react';
import Box from './Box';

it('should renders without crashing',()=>{
  render(<Box/>);
})

it('should match snapshot',()=>{
const {asFragment} = render(<Box/>);
expect(asFragment()).toMatchSnapshot();
})
