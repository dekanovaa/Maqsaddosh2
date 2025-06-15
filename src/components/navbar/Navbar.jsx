import "./Navbar.css"
import logo from "../../assets/images/Logo (2).svg"
function Navbar () {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <img className="navbar-logo" src={logo} alt="logo" />
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="" className="navbar-link">Bosh sahifa</a>
                    </li>
                    <li className="navbar-item">
                        <a href="" className="navbar-link">Biz haqimizda</a>
                    </li>
                    <li className="navbar-item">
                        <a href="" className="navbar-link">Blog</a>
                    </li>
                    <li className="navbar-item">
                        <a href="" className="navbar-link">Yordam</a>
                    </li>
                </ul>
                <div className="right">
                    <button className="plus">
                        +
                    </button>
                    <button className="login-btn">
                         Kirish
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;