// styles
import { useState } from 'react'
import '../../../styles/components/loginform.scss'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const toggle = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password);
    
  }
  return (
    <section className="form-container">
      <header>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </header>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <Input type='text' value={email} placeholder='Email' handleChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <Input type={showPassword ? 'text': 'password'} value={password} placeholder='Password' handleChange={(e) => setPassword(e.target.value)}/>
          <span className='password-toogle' onClick={toggle}>SHOW</span>
        </label>
        <span className='forgot-password'>Forgot PASSWORD?</span>
        <div style={{width: '100%'}}>
          <Button>
            Log In
          </Button>
        </div>
      </form>
    </section>
  )
}