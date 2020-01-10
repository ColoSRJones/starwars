import React from 'react'
import { Card, Grid } from 'semantic-ui-react';
export default function Vehicles({ data }) {
  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={3}>
        {data.map((vehicles, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{vehicles.name}</Card.Header>
                  <Card.Description>
                    <strong>Model</strong>
                    <p>{vehicles.model}</p>
                    <strong>Length</strong>
                    <p>{vehicles.length}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{vehicles.cargo_capacity}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
