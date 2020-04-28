import React, { Component } from 'react'
import VegList from '../VegList'

export default class VegContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vegs: []
		}
	}

  componentDidMount() {
    this.getVegs()
  }

  getVegs = async () => {
    try {
      // load dogs from the dog index route in our API
      // note: be sure to add a / to the end of this url
      // Flask/Flask-Cors expects this!!!
      const url = process.env.REACT_APP_API_URL + "/api/v1/vegs/"
      const vegsResponse = await fetch(url)
      const vegsJson = await vegsResponse.json()
      this.setState({
        vegs: vegsJson.data
      })
    } catch(err) {
      console.error("Error getting dog data.", err)
    }
  }

	render() {
		return(
      <React.Fragment>
			<VegList />
      </React.Fragment>

		)
	}
}