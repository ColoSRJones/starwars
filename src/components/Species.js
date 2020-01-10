import React from 'react'
import { Card, Grid } from 'semantic-ui-react';
export default function Species({ data }) {
  return (
    <>
      <h1>Species</h1>
      <Grid columns={3}>
        {data.map((species, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{species.name}</Card.Header>
                  <Card.Description>
                    <strong>Skin Color</strong>
                    <p>{species.skin_colors}</p>
                    <strong>Language</strong>
                    <p>{species.language}</p>
                    <strong>Designation</strong>
                    <p>{species.designation}</p>
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
