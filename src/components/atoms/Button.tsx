
// styles
import '../../styles/components/button.scss'

type ButtonProps ={
  value : string,
}

export default function Button({value}:ButtonProps) {
  return (
    <>
      <button className='button'>{value}</button>
    </>
  )
}