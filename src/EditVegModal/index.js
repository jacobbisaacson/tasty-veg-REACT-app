import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditVegModal extends Component {
  constructor(props) {
    super(props)
    console.log("props in constructor in editvegmodal");
    console.log(props);
    this.state = {
      name: props.vegToEdit.name,
      color: props.vegToEdit.color,
      isTasty: props.vegToEdit.isTasty
    }
  }
	render() {
		return(
      <Segment> 
        <h3>Edit this VEG!</h3>
        <Form>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="New name:"
          />
          <Label>Color:</Label>
          <Form.Input 
            type="text"
            name="color"
            value={this.state.color}  
            placeholder="New color:"
          />
          <Label>Tasty?:</Label>
          <Form.Input 
            type="checkbox"
            name="isTasty"
            value={this.state.isTasty}         
            // placeholder="Enter an owner name"
          />
          <Button type="Submit">Edit this Veg!</Button>
        </Form>
      </Segment>
    )    
	}
}