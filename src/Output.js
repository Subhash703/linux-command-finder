import React, {useState} from 'react'
import Options from './Options';
export default function Output({resultCommands}) {
    // console.log(ShowMore);
   
    return (
        <div>
            {resultCommands.map(item=>{
        return <div key={item.id}>
          <h1>{item.command} </h1>
          <small><h3>{item.title}</h3></small>
          <div className="info">
            <blockquote>
              {item.info}
            </blockquote>
          </div>
          <Options item={item.options}/>
        </div>
        })}
        </div>
    )
}
