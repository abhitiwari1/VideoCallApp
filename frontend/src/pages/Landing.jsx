import '../App.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landingPageContainer'>
        <nav>
            <div className="navHeader">
                <h2>Apna Video Call</h2>
            </div>
            <div className="navlist">
                <p>Join as Guest</p>
                <p>Register</p>
                <div role="button">
                    <p>Login</p>
                </div>
            </div>
        </nav>

        <div className="landingMainContainer">
            <div>
                <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved Ones</h1>
                <p>Join a video call with your friends and family with just a click.</p>
                <div role='button'>
                    <Link to={"/auth"}>Get Started</Link>
                </div>
            </div>
            <div>
                <img src="mobile.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Landing
