import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes/routes';

function App() {
  return (
    <div className="max-w-[1366px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
