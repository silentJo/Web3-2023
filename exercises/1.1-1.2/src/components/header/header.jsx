import logo from './logo.png';

const Header = (props) => {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Header