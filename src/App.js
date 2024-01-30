import Questions from "./components/Questions";
import Scores from "./components/Scores";
import CategorySelect from "./components/CategorySelect";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ThankYouPage from "./components/ThankYouPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CategorySelect />,
        errorElement: <div>Page not found!</div>
    },
    {
        path: "/questions/:category/:id",
        element: <Questions />,
        errorElement: <div>Page not found!</div>
    },
    {
        path: "/scores",
        element: <Scores />,
    },
    {
        path: "/thank-you",
        element: <ThankYouPage />,
    },
]);

function App() {
  return (
      <div className="flex justify-center p-8 sm:pt-[134px] sm:pb-8 w-full min-h-screen bg-main-bg">
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
