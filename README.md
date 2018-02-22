## UP & RUNNING

Install dependencies:

```
$ npm install
```

_or_

```
$ yarn
```

Fire up a development server:

```
$ yarn dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting

_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_

```
$ npm i -g eslint eslint-watch
```

or if you need permissions:

```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

## Testing

An initial test suite has been setup with two tests (one passing and one intentionally failing).
We're using Jest and Enzyme for our test setup. The basic test setup lives in `./__tests__`.
The main configuration for Jest lives at the bottom of `package.json`. I've also added a few
handy scripts, which I've listed below. Jest also gives us a test coverage tool for free, so I've added that too. The setup is at the bottom of `package.json`. Everything is set to 90% coverage, but your welcome to update that to whatever you'd like.

To run the tests once:

```
$ yarn test
```

To run the watch script (for only relevant test files)

```
$ yarn test:watch
```

To run the watch script (for all test files)

```
$ yarn test:watchAll
```

To view the coverage report:

```
$ yarn test:coverage:report
```

## Review

If you'd like to run the linter and tests at once (this is a nice check before pushing to Github or deploys), you can run:

```
$ yarn review
```

## Production Build

To build your production assets and run the server:

```
$ yarn start
```
