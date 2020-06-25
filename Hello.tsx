import React, { Component } from 'react';
import './style.css'

//export default ({ name }) => <h1>Hello {name}!</h1>;

interface IHello
{
  name:string;
}

export default class Hello extends Component<IHello,{}>
{
constructor(IHello)
{
  super(IHello);
}

render()
{
  return (<span>Hello {this.props.name}</span>);
}

}


