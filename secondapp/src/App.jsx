import React from 'react'
import Container from './components/Container'
import './App.css'
import Picture from './images/picc.jpg'
import Second from './images/Pic2.jpg'
import Third from './images/pic4.jpg'
function App(){
  
    return (
      <div className='Project'>
        <div className='Wrap'>
          <h1>New Arrivals</h1>
          <h3><a href="#view">View All</a></h3>
        </div>
        <div className='Wrapper'>
          <Container title="Belt Up Jumpsuit" price="$149.99">
          <img src={Picture} height={250} width={220}/>
          </Container>
          <Container title="Flare Top" price="$149.99">
          <img src={Second} height={250} width={220}/>
          </Container>
          <Container title="Bomber Jacket" price="$149.99">
          <img src={Third} height={254} width={220}/>
          </Container>
        </div>
      </div>
    )
  }


export default App

