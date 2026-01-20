import Part from './Part'

const Content = ({parts}) => {
  return (
    parts.map((part) => <Part id={part.id} part={part}/>)
  )
}

export default Content