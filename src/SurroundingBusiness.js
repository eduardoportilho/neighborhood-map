import React, { Component } from 'react';

export default class SurroundingBusiness extends Component {
  state = {
    loading: true,
    error: undefined,
    surroundingBusiness: [],
  }

  componentDidMount = async () => {
    const { location: { position: { lat, lng }}} = this.props
    
    const clientId = process.env.REACT_APP_FOURSQUARE_CLIENT_ID
    const clientSecret = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
    const version = 20180615
    const limit = 5
    const url =`https://api.foursquare.com/v2/venues/search?v=${version}&client_id=${clientId}&client_secret=${clientSecret}&ll=${lat},${lng}&limit=${limit}`
    try {
      const rawResponse = await fetch(url)
      if (rawResponse.status !== 200) {
        throw new Error('Connection error')
      }
      const { response: { venues } } = await rawResponse.json()
      this.setState({
        loading: false,
        error: undefined,
        surroundingBusiness: venues,
      })
    } catch(error) {
      this.setState({
        loading: false,
        error: error.message,
        surroundingBusiness: [],
      })
    }
  }

  render() {
    const { loading, error, surroundingBusiness } = this.state
    let content
    if (loading) {
      content = <div>Loading...</div>
    } else if (error) {
      content = <div>An error occurred while getting the data: {error}</div>
    } else {
      content = (
        <ul>
          {surroundingBusiness.map((biz, i) => (
            <li key={i}>{biz.name} at {biz.location.address}</li>
          ))}
        </ul>
      )
      
      surroundingBusiness.map(biz => (
        <div>{biz.name} at {biz.location.address}</div>
      ))
    }

    return (
      <div>
      <h3>Surrounding Business</h3>
      { content }
      </div>
    )
  }
}