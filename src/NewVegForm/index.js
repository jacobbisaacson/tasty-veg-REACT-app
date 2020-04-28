import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewVegForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      color: '',
      isTasty: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createVeg(this.state)
  }

  render() {
    console.log("this.state in render");
    console.log(this.state);
    return (
      <Segment>
        <h4>Add New Veggie!:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter veggie name"
            onChange={this.handleChange}
          />
          <Label>Color:</Label>
          <Form.Input 
            type="text"
            name="color"
            value={this.state.color}  
            placeholder="Enter veggie color"
            onChange={this.handleChange}
          />
          <Label>Is it Tasty?:</Label>
          <Form.Input 
            type="checkbox"
            name="isTasty"
            value={this.state.isTasty}
            placeholder="Is it tasty?"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Veggie!</Button>
        </Form>
      </Segment>
    )

  }

} 