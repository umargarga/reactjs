import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='navbar navbar-light bg-light justify-content-between'>
          <h1 className='navbar-brand text-success'>{title}</h1>
          <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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
