function Button(props) {
    const [label] = props;
    return (
        <button className='btn  btn-dark'>{label}</button>
    )
}

export default Button;