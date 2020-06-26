import React,{Component} from 'react';
import  './Page.module.scss';

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
   
 readonly state={data1:{}}
componentDidMount() {
  this.loaddata();  
}

 Iterate()
{
  const items=[];  
  for(let temp of this.state.data1)
  {items.push(<li>{temp.title} - {temp.id}  </li>);}    
  return items;
}

render(){  
  //<div>Data : {JSON.stringify(this.state.data1)}</div>   
   return(<ul className="header">{this.Iterate()}</ul>);
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

