import React from 'react'
import Dagobah from './Dagobah'
import PropTypes from 'prop-types'

// IMPORTANT: we need to define childContextTypes
// to be able to access the context object in React
const contextTypes = {
  dagobah: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    planet: PropTypes.shape({
      name: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string
    })
  })
};

const withDagobah = (PlanetViewComponent) => class extends React.Component {
  static contextTypes = contextTypes

  render() {
    const { props, context } = this
    return (
      <PlanetViewComponent {...props} {...context.dagobah} />
    )
  }
}

export default withDagobah(Dagobah)
