import React, { Component } from 'react'
import VegList from '../VegList'
import NewVegForm from '../NewVegForm'

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
      console.error("Error getting veggie data.", err)
    }
  }


  createVeg = async (vegToAdd) => {
    console.log("here's the veg to create");
    console.log(vegToAdd);
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/vegs/"
      const createVegResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(vegToAdd)
      })
      console.log("createVegResponse", createVegResponse);
      const createVegJson = await createVegResponse.json()
      console.log("heres adding veg info", createVegJson);
    } catch(err) {
      console.log("error adding veg", err);
    }
  }

	render() {
		return(
      <React.Fragment>
        <NewVegForm createVeg={this.createVeg} />
        <VegList vegs={this.state.vegs} />
      </React.Fragment>

		)
	}
}