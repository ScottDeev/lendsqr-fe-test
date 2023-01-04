import {Data} from './Data'

// styles
import '../../../styles/components/users.scss'

export default function DashboardCard() {
  return (
    <div className='card-wrapper'>
      {Data && Data.userSummary.map((d:any) => (
        <div className='card' key={d.id}>
          <img src={d.icon} alt="icon" />
          <span className='tag'>{d.tag}</span>
          <span className='num'>{d.number}</span>
        </div>
      ))}
    </div>
  )
}