import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function VegList(props) {
  const vegs = props.vegs.map(veg => {
    return(
      <Card key={veg.id} color={"blue"}>
        <Card.Content textAlign={"center"}>        
          <Card.Header>
            {veg.name}
          </Card.Header>
          <Card.Meta>
            {veg.color}
          </Card.Meta>
          <Card.Description>
            {veg.name} is a {veg.color} vegetable
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign={"center"}>
          <Button 
            basic 
            color='red'
            onClick={ () => props.deleteVeg(veg.id) }
          >
            Delete {veg.name}
          </Button>
          <Button
            basic 
            color='green'
            onClick={ () => props.editVeg(veg.id) }
          >
            Edit {veg.name}
          </Button>
        </Card.Content>
      </Card>
    )
  })
	return (
		<Card.Group centered={true}>
      {vegs}
    </Card.Group>
	)
}