import Select from "react-select"

// styles
import '../../../styles/components/filterForm.scss'
import Input from "../../atoms/Input"

const org = [
  { value: 'quas-et-tu', label: 'quas-et-tu' },
  { value: 'labore-dolor-et', label: 'labore-dolor-et' },
  { value: 'accusantium-voluptatem-voluptate', label: 'accusantium-voluptatem-voluptate' },
  { value: 'sint-ipsa-voluptatem', label: 'sint-ipsa-voluptatem' },
]
const status =[
  {value: 'active', label: 'active'},
  {value: 'pending', label: 'pending'},
  {value: 'blacklist', label: 'blacklist'}

]
export default function FilterForm({show}:any) {
  return (
    <form className={`filter-form ${show ? '':'hide'}`}>
      <label>
        <span>Organization</span>
        <Select
          options={org}
          className='select'
        />
      </label>
      <label>
        <span>Username</span>
        <Input type="text" placeholder="User" value=""/>
      </label>
      <label>
        <span>Email</span>
        <Input type="email" placeholder="Email" value=""/>
      </label>
      <label>
        <span>Date</span>
        <Input type="date" placeholder="Date" value=""/>
      </label>
      <label>
        <span>Phone Number</span>
        <Input type="text" placeholder="Phone Number" value=""/>
      </label>
      <label>
        <span>Status</span>
        <Select
          options={status}
          className='select'
        />
      </label>
      <div className="buttons">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </form>
  )
}