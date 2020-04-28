import React from 'react'
import { Card } from 'semantic-ui-react'

export default function VegList(props) {
  console.log("props in veg list", props);
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
      </Card>
    )
  })
	return (
		<Card.Group centered={true}>
      {vegs}
    </Card.Group>
	)
}