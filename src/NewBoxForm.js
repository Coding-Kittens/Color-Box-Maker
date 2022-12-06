import {useState} from 'react';
import './NewBoxForm.css'
const NewBoxForm = ({handleSubmit})=>{

const initState ={
  width:'',
  height:'',
  color:'#000000'
}
const [inputFilds,setInputFilds] = useState(initState);

const handleChange=(event)=>{
  const {name,value} = event.target;
  setInputFilds({...inputFilds,[name]:value});
}

const addBox =(event)=>{
  handleSubmit(event,{...inputFilds});
  setInputFilds(initState);
}


return <form className='NewBoxForm' onSubmit={addBox} className="NewBoxForm" >
  <label>Width<input type="text" name="width" value={inputFilds.width} onChange={handleChange} placeholder="100px"/></label>
  <label>Height<input type="text" name="height" value={inputFilds.height} onChange={handleChange} placeholder="30%"/></label>
  <label>Color<input type="color" name="color" value={inputFilds.color} onChange={handleChange} /></label>
  <button type="submit">Add Box</button>
</form>
}
export default NewBoxForm;
