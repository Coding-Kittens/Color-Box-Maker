import {render} from '@testing-library/react';
import App from './App';

it('should renders without crashing',()=>{
  render(<App/>);
})

it('should match snapshot',()=>{
const {asFragment} = render(<App/>);
expect(asFragment()).toMatchSnapshot();
})
