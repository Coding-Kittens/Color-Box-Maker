import './Box.css'
const Box = ({backgroundColor,width,height,deleteBox,id})=>{
return <div className='Box' style={{height,width,backgroundColor}}>
<button className='Box_button' id={id} type="button" onClick={deleteBox} >X</button>
</div>
}
export default Box;
