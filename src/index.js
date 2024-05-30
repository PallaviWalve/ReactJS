import "./style.css";
import ReactDOM from 'react-dom'; //help us to render results on screen
import App from './components/App';

// React Routing Start
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Form from "./components/Form";
import One from "./components/One";
import Two from "./components/Two";
import Error1 from "./components/Error1";
import Main from "./components/Main";

var projectroute = createBrowserRouter(
    [
        {
            path: "/",
            element: <App></App>,

            children:[ //for show the common parts i.e.header and footer
            {
                path: "home",
                element: <Home></Home>,
            },
                {
                    path: "aboutUs",
                    element: <About></About>
                },
                {
                    path: "cart",
                    element: <Cart></Cart>
                },
                {
                    path: "login",
                    element: <Login></Login>
                },
                {
                    path: "form",
                    element: <Form></Form>
                },
                {
                    path: "one",
                    element: <One></One>
                },
                {
                    path: "two",
                    element:<Two x1="100"></Two>
                },
                {
                    path: "error",
                    element:<Error1></Error1>
                },
                {
                    path: "main",
                    element:<Main></Main>
                },
               
               
               
            ]
        }
        
    ]
);
// React Routing End

// console.log(ReactDOM)
const ans = ReactDOM.createRoot(document.getElementById("root"))
// console.log(ans);
// ans.render("Hello world!");

// var username = "Pallavi";
// ans.render(<h1>Hello {username}</h1>); //perform both ui part and render part 

// var product = (
//     <>
//     <div className='col-3'>
//         <h2>Price 2000</h2>
//         <button>Add to cart</button>
//     </div>
//     <div className='col-3'>
//         <h2>Price 2000</h2>
//         <button>Add to cart</button>
//     </div>
//     </>
// );
// ans.render(product);

// ans.render(<App></App>) //importing components 

ans.render(<RouterProvider router={projectroute}></RouterProvider>);