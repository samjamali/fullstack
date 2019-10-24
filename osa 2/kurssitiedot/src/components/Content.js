import React from 'react'
import Part from './Part'
console.log("hello?")
const Content = ({course}) => {
  
    const pa = course.parts
    const rivit = () => pa.map(part => 
        <Part
            name={part.name}
            key={part.id}
            excersises={part.exercises}

        />
        
        
        )
    return (
        <div>
            <p>

                {rivit()}



            </p>

        </div>
    )
}

export default Content