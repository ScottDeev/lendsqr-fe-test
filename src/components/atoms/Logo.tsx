// icon
import Lg from '../../assets/icons/logo.svg'

// styles
import '../../styles/components/logo.scss'

export default function Logo() {
  return (
    <header className='logo'>
      <img src={Lg} alt="logo" />
    </header>
  )
}