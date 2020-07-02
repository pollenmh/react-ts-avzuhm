import React,{Component} from 'react';
import  './Page.module.scss';
//import Popup from './Popup';
import Popup from 'reactjs-popup';

interface IData{
  id:string;
  title:string;
  description:string;
}
interface IDataState{
  data1:{};
  open:boolean;
}


class Header extends Component<{IData}>
{
   constructor(props) {
    super(props);
    this.state = {data1:{}, open: false,title:String,description:String };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
   
 //readonly state={data1:{},show:0}
componentDidMount() {
  this.loaddata();  
}
lihandler(eve)
{
console.log(eve.target);
this.setState({description:eve.target.getAttribute('data-desc')});
//this.setState({show:1});
this.openModal();
}

 openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

 Iterate()
{
  const items=[];  
  for(let temp of this.state.data1)
  {items.push(<li data-desc={temp.description} onClick={()=>this.lihandler(event)}  id={temp.id}>{temp.title}   </li>);}    
  return items;
}

render(){  
  //<div>Data : {JSON.stringify(this.state.data1)}</div>   
 
 
   return(<div><ul  className="header">{this.Iterate()}</ul>
      <Popup 
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            {this.state.description}          
            
          </div>
        </Popup>
   </div>);
}

loadpopup(){
 {if(this.state.show ==1){
    console.log(this.state.show);
     
      
    }}
    
   
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

