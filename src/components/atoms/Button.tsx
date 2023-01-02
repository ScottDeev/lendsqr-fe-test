
// styles
import '../../styles/components/button.scss'

type ButtonProps = {
  children : React.ReactNode,
}

export default function Button({children}:ButtonProps) {
  return (
    <>
      <button className='button'>{children}</button>
    </>
  )
}