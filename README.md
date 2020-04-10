# Fay Enterprise Apps

Monorepo for hza

## Local Setup

Local development environment setup.

## Tooling Setup

## Angular Structure

### Applications

Angular Applications are application that can be run and deployed on their own using
the various libraries

Angular Applications live in the `/apps`

#### hza Applications

1. Hza (with mock json server) - `yarn dev-with-server`
2. Loans App - `yarn start loans-app --port 4201`
3. Doc Repo

\*if using `npm` instead of `yarn` replace `yarn [command]` with `npm run [command]`

## Libraries

### UI Components Library

UI Components are components that do not rely on
any business logic or services of any application or library outside of its self.

#### UI-Components are allowed to import the following

- Angular Modules
- 3rd Party Modules
- @hza/ui-components

use the following command to create a new UI-Component

`ng g lib [name] --directory=ui-components` OR

Use the built in 'nx console UI' extension for VS Code

UI-Components live in `/libs/ui-components/[component-name]`

### Core Library

The core library houses specific services, interfaces, classes and pipes which are vital to an 'Application` an example of this would be an Authentication service, messaging, events, notifications services, or HTTP Interceptors. Most pieces of the Core Library are single use.

The Core library lives in `/libs/core`

### Shared Library

The shared library houses commonly used
functions, interfaces, classes, pipes and services which can be used within feature modules outside of the generic ui-components.

For example a `Pipe` which selects the first item from an array.

### Feature Library


#### client-approval-requests

#### documents

#### loans


#### tasks
