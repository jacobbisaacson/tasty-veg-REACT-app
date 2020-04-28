import React, { Component } from 'react'

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
      const url = process.env.REACT_APP_API_URL + "/api/v1/vegs/"
      const vegsResponse = await fetch(url)
      const vegsJson = await vegsResponse.json()
      console.log(vegsJson);
    } catch(err) {
      console.error("error getting veg data", err);
    }
  }

	render() {
		return(
			<h2>Veg Container</h2>

		)
	}
}