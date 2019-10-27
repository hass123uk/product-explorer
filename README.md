
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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the Typescript flag provided.
For the README related to the Create React app see the file README_CreateReactApp within this project.

## UI framework

[Material-UI](https://material-ui.com) components, styling solution, icons, theme and html normalizer is used for the design of the application. 

## Architecture design decisions documentation

Architecture Decision Records are used in order to document the architectural decisions that were made during the implementation of this platform. 

The records were generated using [adr-tools](https://github.com/npryce/adr-tools) and can be found in the directory  `doc/architecture/decisions`.

## OData v2 web service sample and Cross-Origin Resource Sharing

The OData v2 web service sample does not define the http header: `Access-Control-Allow-Origin: *`.  
[Cors Everywhere](https://cors-anywhere.herokuapp.com/) is used as a quick solution.  
Read ADR #5 for details.

## Tests

This project includes a small suite of tests. Jest manual module mocking is used for the product http service.  
MobX `when` and jest `done` callback is used to handel the Async nature of fetching data within the `afterCreate` MST life cycle hook.

- React components
    - Create-react-app test to ensure the application renders without crashing.
- Mobx State Tree
    - Test store models creation
    - Test product store actions

I think the tests related to store model creation are more focused on testing the way MST works rather then the application, they perhaps could be refactored to leverage `useSnapshot` and `onSnapshot` to test the application state more generally.  
The tests related to the store actions on the other hand is a better basis for future tests to see how different actions trigger services and modify state within the application.

## Postman collection

In order to easily explore and learn how to use the [OData v2 (Read/Write)](https://services.odata.org/V2/(S(05rkbza5jphnonpura3112zu))/OData/OData.svc/) web service I created a postman collection of requests that document the usage of the REST API. The collection is exported as a JSON file and included within the source code of this project under the name `OData V2 (read-write).postman_collection.json`. 

[Postman](https://www.getpostman.com/) can be used to import this collection.

## User stories

- Completed:
    - As a user, I want to see a list of products and have the following displayed for each: ID, Name, Category and Price
    - As a user, I want to delete a single product after confirming the action
    - As a user I want to edit a product category
- Todo:
    - As a user I want to add a new product after previewing the changes providing the following: Name, Description, Release date, Discontinued date, Price and Category; Supplier is always set to Lego
    - As a user I want to edit a single product after previewing the changes and modify the following: Name, Description, Release date, Discontinued date, Price and Category; Supplier is always set to Lego
    - As a user I want to see an indicator showing 'New' on a product that I recently added.
    - As a user I want to see a details page about a single product showing: Name, Description, Release date, Discontinued date, Price and Category
    - As a user I want the list of products to support partial loading and pagination
    - As a user, I want to toggle seeing discontinued products within the products list.