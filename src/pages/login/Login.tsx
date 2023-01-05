// components
import Logo from "../../components/atoms/Logo";

// image
import LoginImage from '../../assets/images/signinImage.png'

// styles
import '../../styles/login.scss'
import LoginForm from "../../components/molecules/LoginForm/LoginForm";

export default function Login() {
  return (
    <main className="login-main">
      <Logo height='36px'/>
      <div className="login-section">
        <div className="col-6-lg login-image">
          <img src={LoginImage} alt="login" />
        </div>
        <LoginForm/>
      </div>
    </main>
  )
}