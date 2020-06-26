import React,{Component} from 'react';
import  './Page.module.scss';
import Popup from "reactjs-popup";

interface IData{
  id:string;
  title:string;
  description:string;
}
interface IDataState{
  data1:{};
}
 const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);
const dialog= () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);
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
 return <dialog/>;
  // return(<ul  className="header">{this.Iterate()}</ul>);
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

