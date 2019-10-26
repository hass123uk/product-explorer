# 3. Use Material-UI

Date: 2019-10-26

## Status

Accepted

## Context

The [guiding mockups](https://projects.invisionapp.com/prototype/TestFinal-cjkrxztc9008b7801kxekfhfl) for this project follow the [material design guidelines](https://material.io/design/).

## Decision

Use [Material-UI](https://material-ui.com/) React components, styling solution, themes and icons for implementing the given mockups within the project.

## Consequences

This library of components and icons makes the process of creating a frontend that follows the material design guidelines easier and faster.
It provides developers with a number of ready made components for creating the UI.
It provides a mechanism to apply a theme to the project for a consistent UI.
It provides a CSS Baseline component to normalize differences between browsers.
The styling solution has advantages found [here](https://material-ui.com/styles/basics/)
It provides tools to create Responsive layouts that work across screen sizes and environments. 

There is an overhead to learning how this library is implemented and the way themes and css is applied.
Designers with limited JS knowledge might have difficulty working with this framework. 
Certain components and animations have a performance overhead that might cause problems for certain devices. 