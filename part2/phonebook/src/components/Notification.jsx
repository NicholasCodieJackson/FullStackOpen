const errorStyle = {
    color: 'red',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    background: 'gray',
    marginBottom: '10px'
}

const Notification = ({message}) => {
    if(message === null){
        return null
    }

    return (
        <div style={errorStyle}>
            {message}
        </div>
    )
}

export default Notification