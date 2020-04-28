import React, { Component } from 'react'
import VegList from '../VegList'
import NewVegForm from '../NewVegForm'
import EditVegModal from '../EditVegModal'

export default class VegContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegs: [],
      idOfVegToEdit: -1
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
      console.error("error getting veg")
      console.error(err)
    }
  }

  deleteVeg = async (idOfVegToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/vegs/" + idOfVegToDelete
    try {
      const deleteVegResponse = await fetch(url, {
        method: 'DELETE'
      })
      console.log("deleteVegResponse", deleteVegResponse);
      const deleteVegJson = await deleteVegResponse.json()
      console.log("deleteVegJson", deleteVegJson);
      if(deleteVegResponse.status === 200) {
        this.setState({
          vegs: this.state.vegs.filter(veg => veg.id !== idOfVegToDelete)
        })
      }
    } catch(err) {
      console.error("error deleting veg")
      console.error(err)
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
      if(createVegResponse.status === 201) {
        this.setState({
          vegs: [...this.state.vegs, createVegJson.data]
        })
      }
    } catch(err) {
      console.error("error adding veg")
      console.error(err)
    }
  }

  editVeg = (idOfVegToEdit) => {
    console.log("trying to edit veg with id: ", idOfVegToEdit);
    this.setState({
      idOfVegToEdit: idOfVegToEdit
    })
  }

  render() {
    return(
      <React.Fragment>
        <NewVegForm createVeg={this.createVeg} />
        <VegList 
          vegs={this.state.vegs}
          deleteVeg={this.deleteVeg}
          editVeg={this.editVeg}
        />
        { 
          this.state.idOfVegToEdit !== -1 
          && 
          <EditVegModal 
            vegToEdit={this.state.vegs.find((veg) => veg.id === this.state.idOfVegToEdit)}
          /> 
        }
      </React.Fragment>
    )
  }
}