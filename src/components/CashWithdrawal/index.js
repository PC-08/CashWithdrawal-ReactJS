// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  getValue = value => {
    const {balance} = this.state
    if (balance > 0) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="top">
            <p className="profile">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="between">
            <p className="para1">Your Balance</p>
            <div>
              <p className="bal">{balance}</p>
              <p className="para2">in Rupees</p>
            </div>
          </div>
          <div className="bottom">
            <p className="head2">Withdraw</p>
            <p className="para3">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul">
              {denominationsList.map(each => (
                <DenominationItem
                  getValue={this.getValue}
                  key={each.id}
                  value={each.value}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
