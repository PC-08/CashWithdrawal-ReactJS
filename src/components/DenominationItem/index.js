// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, getValue} = props

  const onAmmountClick = () => {
    getValue(value)
  }
  return (
    <li>
      <button type="button" onClick={onAmmountClick} className="list-Item">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
