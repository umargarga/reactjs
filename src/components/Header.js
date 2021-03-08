import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (e) => {
      console.log('clicked')
  }
    return (
        <header className='navbar navbar-light bg-light justify-content-between'>
          <h1 className='navbar-brand text-success'>{title}</h1>
          <Button text='Add' onClick={onClick} />
        </header>
    )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
