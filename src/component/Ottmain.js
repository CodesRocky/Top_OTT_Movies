import React, { useState } from 'react'
import Ottlogic from './Ottlogic';
import Ottdata from './Ottdata.js'
import './ott.css'

function Ottmain(props) {
  const [topic, setTopic] = useState('Top Movies on OTT Plateform');
  const [frm, setFrm] = useState("all")
  
  function shownm(Ottdata) {
    if (Ottdata.From === frm)
    {
      return (
        <Ottlogic
          key={Ottdata.id}
          img={Ottdata.Img}
          from={Ottdata.From}
          name={Ottdata.Name}
          link={Ottdata.Link} />
      )
    }
    else if(frm === 'all')
    {
      return (
        <Ottlogic
          key={Ottdata.id}
          img={Ottdata.Img}
          from={Ottdata.From}
          name={Ottdata.Name}
          link={Ottdata.Link} />
      )
    }
  }
  return (
    <div className='tbox'>
        <div className='hbbox'>

        
      <h1 className='heading'>{topic}</h1>
      <div className='btnbox'>
        <button onClick={() =>
          {
            setTopic('Top Movies on OTT Plateform')
            setFrm('all')
          } 
          }>All Movies</button>


        <button onClick={() => 
        {
          setTopic('Top Movies on Netflix Plateform')
          setFrm("Netflix Original")
        }
        }>Netflix</button>


        <button onClick={() => 
        {
          setTopic('Top Movies on Amazon Prime Plateform')
          setFrm("Amazon Prime")
        }
        }>Amazon Prime</button>


        <button onClick={() =>
          {
            setTopic('Top Movies on Disney Plateform')
            setFrm("Disney")
          } 
          }>Disney</button>


        <button onClick={() =>
          {
            setTopic('Top Movies on Apple TV Plateform')
            setFrm("Apple TV")
          } 
          }>Apple TV</button>


        <button onClick={() =>
          {
            setTopic('Top Movies on Zee Plateform')
            setFrm("Zee5")
          } 
          }>Zee5</button>


        <button onClick={() => 
          {
            setTopic('Top Movies on Othet OTT Plateform')
            setFrm("Other")
          }
          }>Other OTT</button>


      </div>
      </div>
      <div className='mainbox'>
        {Ottdata.map(shownm)}
      </div>

    </div>

  )
}
export default Ottmain;