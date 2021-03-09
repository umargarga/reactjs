import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
    return (
        <header className='navbar navbar-light bg-light justify-content-between'>
          <h1 className='navbar-brand text-success'>{title}</h1>
          {location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
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
