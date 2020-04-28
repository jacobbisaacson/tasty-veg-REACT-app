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

  render() {
    return (
      <Segment>
        <h4>Add New Veggie!:</h4>
        <Form>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter veggie name"          
          />
          <Label>Color:</Label>
          <Form.Input 
            type="text"
            name="breed"
            value={this.state.color}  
            placeholder="Enter veggie color"          
          />
          <Label>Is it Tasty?:</Label>
          <Form.Input 
            type="boolean"
            name="isTasty"
            value={this.state.isTasty}         
            placeholder="Is it tasty?"          
          />
          <Button type="Submit">Create Veggie!</Button>
        </Form>
      </Segment>
    )

  }

} 