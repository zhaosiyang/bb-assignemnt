### Run locally
```
npm install
npm run dev
(open browser localhost:4200)
```

### Test in the Cloud (Netlify)
https://5f6670d0a70c2d29b5c0b6e0--kind-spence-30b4da.netlify.app/


### Unit Testing
As an example, there is only one test `account-state.reducer.spec.ts` which is testing for `account-state.reducer.ts`;
To run unit testing, simply run `npm test`


### Some Technical Explanation
- This app leverages NgRx to manage state. To know more detail about this popular state management tool, please refer https://ngrx.io
- On top of NgRx, I create the concept of "Loadable" which is mainly to represent the state of an API call. 3 fields `loading`, `success` and `error` represents all the states of an API call. There are a bunch of handy functions in `lodable.ts` created around "Loadable" to minimize boilerplate.

### Architecture
- NgRx to manage state (Please refer diagram in https://ngrx.io/guide/store)
- In `core` folder lives all the code about NgRx as it's the model layer of the app.
- Common component module is for commonly-used components like button, input, panel etc.
- `ApiService` in `api.service.ts` is the hub of calling backend API, although the responses are mocked.
 
