# react-useonload

> A small, zero dependency React hook that only runs once
> the component has loaded.

## Get

```bash
yarn add react-useonload
# or
npm install react-useonload
```

## Use

```javascript
import useOnload from 'react-useonload'

const App = () => {
  useOnload(() => {
    console.log('this will only run once the component loads')
  })

  // Async callbacks!
  useOnload(async () => {
    await someAsyncFunction()

    console.log('this will only run once the component loads')
  })
}
```

## Fin

by: Jeff Miller <br>
https://jamiller.me | hello@jamiller.me
