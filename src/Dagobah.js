import React from 'react'

const Loading = () => (
  <div>loading...</div>
)

const Error = () => (
  <div>Sorry, please try again!</div>
)

const Planet = ({ name, climate, terrain }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>

)

const PlanetBranch = ({ loading, planet }) => {
  if (loading) {
    return <Loading />
  } else if (planet) {
    return <Planet {...planet} />
  } else {
    return <Error />
  }
}

export default PlanetBranch
