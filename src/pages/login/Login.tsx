// components
import Logo from "../../components/atoms/Logo";

// image
import LoginImage from '../../assets/images/signinImage.png'

// styles
import '../../styles/login.scss'
import LoginForm from "../../components/molecules/LoginForm";

export default function Login() {
  return (
    <main className="login-main">
      <Logo/>
      <div className="login-section">
        <div className="col-6-lg">
          <img src={LoginImage} alt="login" />
        </div>
        <div className="col-6-lg">
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}