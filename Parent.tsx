import React,{Component} from 'react';
import  './Page.module.scss';
import Popup from "./Popuptest';

interface IData{
  id:string;
  title:string;
  description:string;
}
interface IDataState{
  data1:{};
}


class Header extends Component<{},{}>
{
   
 readonly state={data1:{},show:0}
componentDidMount() {
  this.loaddata();  
}
lihandler(eve)
{
console.log(eve.target.id);
this.setState({show:1});
}



 Iterate()
{
  const items=[];  
  for(let temp of this.state.data1)
  {items.push(<li onClick={()=>this.lihandler(event)}  id={temp.id}>{temp.title} - {temp.id}  </li>);}    
  return items;
}

render(){  
  //<div>Data : {JSON.stringify(this.state.data1)}</div>   
 return (<div className="example-warper"> <dialog/></div>);
 
   //return(<ul  className="header">{this.Iterate()}</ul>);
}

loadpopup(){
 {if(this.state.show ==1){
    console.log(this.state.show);
     <Popup
      trigger={<button className="button"> Right Top </button>}
      position="right top"
      on="hover"
    >
      <Card title="Right Top" />
    </Popup>}}
    
   
}

loaddata()
{
  fetch('https://ghibliapi.herokuapp.com/films').then(res => res.json()).then(res => {this.setState({data1:res});console.log('data loaded')})
      .catch(() => console.log('error'));
}
}

export default  class Parent1 extends Component
{
 

render()
{
  return (<div className='container'>
  <Header />
  </div>);
}

Test()
{
  document.write('Hi I am document write.')
}

}

export  function Parent()
{
  //return <div>I am a function..</div>;
  //document.write('Hi I am document write.');
  return null;
}

