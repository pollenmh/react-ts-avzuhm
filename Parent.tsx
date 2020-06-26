import React,{Component} from 'react';
import  './Page.module.scss';

class Header extends Component
{
  private coll:[];
  private dict:[];
  constructor(props)
  {
    super(props);
    this.state={data1:{}}
  }
componentDidMount() {
  this.loaddata();
}
render(){ return  <div>Data : {JSON.stringify(this.state.data1)}</div>

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

