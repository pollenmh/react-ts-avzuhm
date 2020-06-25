import React,{Component} from 'react';
import styles from './Page.module.scss';

export default  class Parent1 extends Component
{

render()
{
  return <div className={Header}></div>;
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