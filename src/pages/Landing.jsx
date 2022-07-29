import React from 'react';

// assets
import sourceWords from '../data/words_dictionary.json'
import cleanWordList from '../js/cleanWordList'; 

// style
import '../styles/Landing.css'

const Landing = () => {




  return (
    <div className='solver-container'>
      <div className='title'>
        <h2>Wordle Solver</h2>
      </div>
      <div className='grid-container'>
        <div className='row' id='row-one'>
          <div className='square' id='00'>W</div>
          <div className='square correct-letter' id='01'>O</div>
          <div className='square correct-place' id='02'>R</div>
          <div className='square' id='03'>D</div>
          <div className='square wrong-letter' id='04'>L</div>
        </div>
        <div className='row' id='row-two'>
          <div className='square' id='10'></div>
          <div className='square' id='11'></div>
          <div className='square' id='12'></div>
          <div className='square' id='13'></div>
          <div className='square' id='14'></div>
        </div>
        <div className='row' id='row-three'>
          <div className='square' id='20'></div>
          <div className='square' id='21'></div>
          <div className='square' id='22'></div>
          <div className='square' id='23'></div>
          <div className='square' id='24'></div>
        </div>
        <div className='row' id='row-four'>
          <div className='square' id='30'></div>
          <div className='square' id='31'></div>
          <div className='square' id='32'></div>
          <div className='square' id='33'></div>
          <div className='square' id='34'></div>
        </div>
        <div className='row' id='row-five'>
          <div className='square' id='40'></div>
          <div className='square' id='41'></div>
          <div className='square' id='42'></div>
          <div className='square' id='43'></div>
          <div className='square' id='44'></div>
        </div>
        <div className='row' id='row-six'>
          <div className='square' id='50'></div>
          <div className='square' id='51'></div>
          <div className='square' id='52'></div>
          <div className='square' id='53'></div>
          <div className='square' id='54'></div>
        </div>
      </div>
    </div>
  )
}

export default Landing