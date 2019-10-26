
## Running/Testing the code

### `yarn install`

Installs the NPM dependencies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

## Case description 

A small web application that is capable of listing some products available in an existing REST web service.

The possibility to add some new products via the web application by leveraging the web service API [OData v2 (Read/Write)](https://www.odata.org/odata-services/).

Link to Guiding mock-up: https://projects.invisionapp.com/prototype/TestFinal-cjkrxztc9008b7801kxekfhfl

Suggested technology stack:
A React application that is built with the following:
- Typescript
- MobX State Tree for data handling and state management

## Generators/Accelerators

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the Type Script flag provided.
For the README related to the Create React app see the file README_CreateReactApp within this project.

## UI Framework

[Material-UI](https://material-ui.com) components, styling solution, icons, theme and html normalizer is used for the design of the application. 

## Architecture design decisions documentation

Architecture Decision Records are used in order to document the architectural decisions that were made during the implementation of this platform. 

The records were generated using [adr-tools](https://github.com/npryce/adr-tools) and can be found in the directory  `doc/architecture/decisions`.

## User stories

- Required:
    - As a user, I want to see a list of products and have the following displayed for each: ID, Name, Category and Price
    - As a user, I want to delete a single product after confirming the action
    - As a user I want to edit a single product after previewing the changes and modify the following: Name, Description, Release date, Discontinued date, Price and Category; Supplier is always set to Lego
    - As a user I want to add a new product after previewing the changes providing the following: Name, Description, Release date, Discontinued date, Price and Category; Supplier is always set to Lego
- Optional/Bonus:
    - As a user I want to see an indicator showing 'New' on a product that I recently added.
    - As a user I want to see a details page about a single product showing: Name, Description, Release date, Discontinued date, Price and Category
    - As a user I want the list of products to support partial loading and pagination
    - As a user, I want to toggle seeing discontinued products within the products list.