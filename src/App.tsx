import React from 'react';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <div>Main</div>
    },
    {
      path: "/1",
      element: <div>Page 1</div>
    },
    {
      path: "/2",
      element: <div>Page 2</div>
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
