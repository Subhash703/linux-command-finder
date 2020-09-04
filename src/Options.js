import React ,{useState} from 'react'

function Options(options) {
    const [showMore, setShowMore] = useState(false);

    
    return (
        <div>
            <div className="more" onClick={()=>{
                if(showMore){
                    setShowMore(false);
                }else{
                    setShowMore(true);
                }
            }}>
              Show More
            </div>
            {showMore ? 
                <ul>
                    {options.item.map(ele=>{
                    return <li key={Math.random()}><span className="option">{ele.option} </span> <span className="optionDescription">{ele.optionDescription}</span></li>
                    })}
                </ul>: null
            }
        </div>
        
    )
}

export default Options
