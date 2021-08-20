import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
export default function App() {
  const [question,setQuestion]=useState(data);
  return(
    <main>
      <div className='container'>
      <h3>Question and answer abot login</h3>
        <section className='info'>
          {
            question.map((question)=>{
              return(
                <SingleQuestion key={question.id} {...question}/>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}