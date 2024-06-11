import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Always } from './components/Always';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Always />}>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
