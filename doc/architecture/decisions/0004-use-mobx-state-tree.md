# 4. Use MobX-state-tree

Date: 2019-10-27

## Status

Accepted

## Context

The requirements of this task was to use MobX State Tree for data handling and state management.

## Decision

This project will use MobX state tree to manage all application state and all changes that are applied to state are via the MobX state containers.

## Consequences

MobX state tree (MST) provides an opinionated state container that is meant to be the source of truth for application state within the application.  
The MobX approach is based on transparent functional reactive programming (TFRP) which can be summarized as "Anything that can be derived from the application state, should be derived. Automatically." -- MobX website.

MST gives us benefits of immutability (transactionality, traceability and composition) and mutability (discoverability, co-location and encapsulation) via a tree of mutable but strictly protected objects.

For this project MST provides a clear framework regarding how data should be handled alleviating the need to create a custom solution for state management.

One drawback is that there is one correct way of doing things which is the MST way and mixing approaches would get ugly.  
Another is the runtime overhead of all the features that are provided by MST which would be an issue if this was a performance critical application.
