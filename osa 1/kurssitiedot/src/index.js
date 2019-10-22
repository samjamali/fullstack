import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    const pa = props.part;
    return (
        <div>
            <p>
                {pa.name} {pa.exercises}


            </p>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <p>
                {props.course.name}

            </p>
        </div>
    )
}

const Content = (props) => {
    const pa = props.course.parts
    return (
        <div>
            <p>

                <Part part={pa[0]} />
                <Part part={pa[1]} />
                <Part part={pa[2]} />



            </p>

        </div>
    )
}

const Total = (props) => {
    const parts = props.course.parts

    return (
        <div>
            <p>



                {parts[0].exercises + parts[1].exercises + parts[2].exercises}
            </p>

        </div>

    )
}

const App = () => {
	const course = {
		name: 'Half Stack -sovelluskehitys',
		parts: [
		  {
			name: 'Reactin perusteet',
			exercises: 10
		  },
		  {
			name: 'Tiedonvälitys propseilla',
			exercises: 7
		  },
		  {
			name: 'Komponenttien tila',
			exercises: 14
		  }
		]
	  }

  return (
    <div>
      <Header course={course} />
	  <Content course={course} />
	  <Total course={course} />
    </div>
  )
}


    




ReactDOM.render(<App />, document.getElementById('root'))