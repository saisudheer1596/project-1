import React from 'react'
import './Style.css'
import FactChecker from './FactChecker'
import Contant from './Contant'
import Fact from './Fact'


export default function Body() {
  return (
    <div className='container'>
      <Fact />
      <FactChecker />
      <Contant />
    </div>
    
  )
}
