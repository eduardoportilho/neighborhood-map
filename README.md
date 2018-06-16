# Neighborhood Map

Project for the Udacity Frontend Nanodegree

## Running Instructions
* Clone or download the project and cd into it
* Install all dependencies: `yarn`
* Run the development server: `yarn start`
* The app will be available at [http://localhost:3000/](http://localhost:3000/)

## Testing offline mode
* The offline mode implementation is provided by [Create React App](https://github.com/facebook/create-react-app).
* The service worker is only enabled in the production environment.
* To test the offline-first service worker locally, build the application (using npm run build) and run a simple http server from your build directory.

## Data Sources
* The map and localization data is retrieved using [Google Maps JavaScript API V3](https://developers.google.com/maps/documentation/javascript/reference/3.exp/)
* The "Surronding Business" data is retrieved using [Foursquare Search for Venues API](https://developer.foursquare.com/docs/api/venues/search)

## Other Resources
* [Project Description](https://review.udacity.com/#!/rubrics/1770/instructions)
* [Create React App](https://github.com/facebook/create-react-app): Provides the basic structure to create a React app with no build configuration.
* [google-maps-react](https://github.com/fullstackreact/google-maps-react): Component used to render google maps. 