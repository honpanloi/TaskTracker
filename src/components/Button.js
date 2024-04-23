const Button = ({color, text, onAdd}) => {
  return (
    <div>
      <button 
        className='btn'
        style={{backgroundColor: color}}
        onClick={onAdd}
      >
        {text}</button>
    </div>
  )
}

export default Button
