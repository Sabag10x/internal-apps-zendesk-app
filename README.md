# Internal Apps Zendesk App

## Description

This repo contains a scaffold to help developers build [apps for Zendesk products](https://developer.zendesk.com/apps/docs/apps-v2/getting_started).

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) >= 18.12.1
- [Ruby](https://www.ruby-lang.org/) = 2.6.x

### Setup

1. Clone or fork this repo
2. Change (`cd`) into the `app_scaffolds/packages/react` directory
3. Run `yarn install`

### Running locally

To serve the app to your Zendesk instance with `?zcli_apps=true`, open a new terminal and run

```
yarn run watch
```

and then open a new terminal and run

```
yarn start
```

## Deploying

```
yarn build
zcli apps:package
```

## Useful Links

Links to maintaining team, confluence pages, Datadog dashboard, Kibana logs, etc

- https://developer.zendesk.com/
- https://github.com/zendesk/zendesk_apps_tools
- https://webpack.github.io
- https://developer.zendesk.com/documentation/apps/build-an-app/using-react-in-a-support-app/
