const Total = ({parts}) => {
    const totalParts = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    console.log(totalParts)

    return (
        <div>
            <strong>total of {totalParts} exercises</strong> 
        </div>
    )
}

export default Total