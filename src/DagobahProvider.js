import React from 'react'
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

export class DagobahProvider extends React.Component {
  // State
  // { loading: true }
  // { loading: false, planet: { name, climate, terrain } }
  // { loading: false, error: any }
  state = { loading: true }

  componentDidMount() {
    console.log('fetching data from server')
    fetch('https://swapi.co/api/planets/5/?format=json')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      )
  }

  static childContextTypes = contextTypes

  getChildContext() {
    return { dagobah: this.state }
  }

  render() {
    return this.props.children
  }
}

export default DagobahProvider
