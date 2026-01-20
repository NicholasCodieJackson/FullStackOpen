import Course from './components/Course'

const App = () => {
  const course = [
    {
      id: 1,
      name: 'Half stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of component',
          exercises: 14,
          id: 3
        },
        {
          name: 'test',
          exercises: 5,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middleware',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    course.map((course) => <Course key={course.id} course={course}/>)
  )
}


export default App
