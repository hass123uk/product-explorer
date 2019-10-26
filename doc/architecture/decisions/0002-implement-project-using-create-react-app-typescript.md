# 2. Implement project using create-react-app --typescript

Date: 2019-10-26

## Status

Accepted

## Context

The requirements of this task was to create a React application using Typescript.

## Decision

This project is based on the Typescript version os [create-react-app](https://github.com/facebook/create-react-app), a ready foundation for building React applications. 

## Consequences

Create react app accelerator provides a modern environment to start developing single page applications using React. 
It includes: 
- Typescript and Typescript React syntax support
- Polyfills for extra features that are not supported on all browsers
- Integrated test runner
- Live development server
- Build script to bundle JS, CSS, and images for production

The tradeoff is that we are confined to working in a specific way, so if we need more customization we are given the option to *eject* and customize it. 
