import React, { Component } from 'react';

export default class LocationInfo extends Component {
  state = {
    loading: true,
    error: undefined,
    surroundingBusiness: [],
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.location !== this.props.location) {
      this.getData()
    }
  }

  componentDidMount = async () => {
    this.getData()
  }

  getData = async () => {
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
    const { location: { name } } = this.props
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
            <li key={i}>
              {biz.name} 
              {biz.location.address && (
                <span> at {biz.location.address}</span>
              )}
            </li>
          ))}
        </ul>
      )
      
      surroundingBusiness.map(biz => (
        <div>{biz.name} at {biz.location.address}</div>
      ))
    }

    return (
      <div className="location-info">
        <h3>{name}</h3>
        <h4>Surronding Business</h4>
        { content }
      </div>
    )
  }
}