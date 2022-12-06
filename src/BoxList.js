import Box from "./Box"
import NewBoxForm from './NewBoxForm'
import {useState} from 'react';

const BoxList = ()=>{

const [boxes,setBoxes] = useState(null);
const [newId,setNewId] = useState(0);


const handleSubmit =(event,newBox)=>{
  event.preventDefault();
  newBox.id = newId;
  setNewId((n)=> n = newId+1);
  boxes? setBoxes((n)=> n = [...boxes,newBox]): setBoxes(()=> [newBox]);
}

const deleteBox =(event)=>{
setBoxes((n)=> n = boxes.filter(box=> box.id != event.target.id));
}


return <>
<NewBoxForm handleSubmit={handleSubmit}/>
{boxes? <ul>{boxes.map(box=><Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.color} deleteBox={deleteBox}/>)}</ul> :null}
</>

}
export default BoxList;
