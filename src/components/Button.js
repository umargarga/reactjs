import PropTypes from 'prop-types'

const Button = ({ text, onClick}) => {
    // const onClick = (e) => {
    //     console.log('clicked')
    // }
    return <button onClick={onClick} className={text == 'Add' ? 'btn btn-success my-2 my-sm-0' : 'btn btn-danger my-2 my-sm-0'}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
