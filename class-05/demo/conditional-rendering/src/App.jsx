import './App.css'
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sales",
    element: (
      <div>
        <Link to="/">Go Home!</Link>
        <p>You have reached the sales Page!</p>
      </div>
    )
  }
])

function App() {
  return (
    <>
      <header>
        <h1>Here is my App!</h1>
      </header>
      <RouterProvider router={router} />
      <footer>
        <p>Built by 301d108</p>
      </footer>
    </>
  )
}

export default App
