import {Container} from 'components/shared'
import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from 'routes'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container MaxWidth="1280px">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
    </Suspense>
  )
}
