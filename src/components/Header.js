import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click registered');
    }

    return (
        <header className="container">
            <h1 className='title'>{title}</h1>
            <Button text="Add Task" color="steelblue" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker App'
}

export default Header
