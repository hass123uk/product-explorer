# 5. Use OData V2 (read/write) sample web service

Date: 2019-10-27

## Status

Accepted

## Context

A suggestion for creating this project was to use the [OData V2 (read/write) web service sample](https://services.odata.org/V2/(S(1pvfcxajki3ouml43k5wnex3))/OData/OData.svc/) as the backend for this application.

## Decision

Use OData V2 (read/write) web service sample.

## Consequences

By using this web service sample we get access to a ready REST backend to power the application.  
Since it is an implementation of the open data protocol which is a set of best practices for building and consuming RESTful APIs, we have access to extensive documentation and many powerful features.

This project can use the features provided to only retrieve the data needed and perform some validation against the data before it is loaded into the application.

There are two main issues with using this particular web service sample:  
- CORS - this web service sample does not define the http header: `Access-Control-Allow-Origin: *`.
- Version number - this is an old version of the OData standard which is lacking features that would benefit this project; such as being able to edit linked entities directly when PATCH-ing an entity.

Quick fix for CORS is to use a proxy server provided by [CORS Everywhere](https://cors-anywhere.herokuapp.com/).  
**This is a terrible approach and should not be used in production.**  Issues include: security, latency and unreliability.  
A minimal viable solution for a real project would be to set up our own proxy to handle connecting with a server that does not support CORS.  This would deal with the security and reliability issues. 