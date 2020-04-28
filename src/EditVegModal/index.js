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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateVeg(this.state)
  }

  render() {
    const linkStyle = {
      cursor: "pointer",
      color: "blue",
      textDecoration: "underline"
    }
    return(
      <Segment> 
        <h3>Edit this VEG!</h3>
        <p style={linkStyle} onClick={this.props.closeModal}><small>Close Modal</small></p>
        <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="New name:"
            onChange={this.handleChange}
          />
          <Label>Color:</Label>
          <Form.Input 
            type="text"
            name="color"
            value={this.state.color}
            placeholder="New color:"
            onChange={this.handleChange}
          />
          <Label>Tasty?:</Label>
          <Form.Input 
            type="text"
            name="isTasty"
            value={this.state.isTasty}
            onChange={this.handleChange}
            // placeholder="Enter an owner name"
          />
          <Button type="Submit">Edit this Veg!</Button>
        </Form>
      </Segment>
    )    
  }
}