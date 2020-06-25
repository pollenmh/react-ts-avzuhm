import React,{Component} from 'react';
import  './Page.module.scss';

class Header extends Component
{
render(){ return <div className='header'></div>}
}

export default  class Parent1 extends Component
{
 

render()
{
  return (<div className='container'>
  <Header/>
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

