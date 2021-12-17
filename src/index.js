import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Center, GlobalStyle } from './rootStyle';
import Table from './Table';


const columns =[
  { 
    name: 'name',
    text: 'Puan Sırası',
    filterable: false,
    editable: false,
    textAlign:'left',
    style:{
      textAlign:'left',
    },
    sortable: true,
    type: 'text',
  },
  {
    name: 'number',
    text: 'Puan Sırası',
    filterable: false,
    editable: false,
    // textAlign: 'left',
    sortable: true,
    type: 'text',
    textAlign:'left'
  },
  // {
  //   name: 'kalem',
  //   text: 'Puan Sırası',
  //   filterable: false,
  //   editable: false,
  //   // textAlign: 'left',
  //   sortable: true,
  //   type: 'text',
  //   textAlign:'left'
  // },
]

const data = [

  {
    name:'emre',
    number:4
  },
  {
    name:'fatih',
    number:3
  },
  {
    name:'ahmet',
    number:1
  },
  {
    name:'ayşe',
    number:2
  }
]


ReactDOM.render(
  <div>
    <GlobalStyle />
    <Center>
      <Table columns={columns} data={data}/>
    </Center>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
