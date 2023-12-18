import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapitalCountry = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state
    const countryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )
    return countryAndCapital.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.getCountry(activeCapital)

    return (
      <div className="app-container">
        <div className="capital-app-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="country-container">
            <select
              onChange={this.onChangeCapitalCountry}
              value={activeCapital}
              className="select-capital"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is Capital of Which Country?</p>
          </div>
          <p className="country-des">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
