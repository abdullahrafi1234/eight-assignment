import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedToPage from './components/ListedToPage/ListedToPage';
import Books from './components/Books/Books';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Statistics from './components/Statistics/Statistics';
import BookDetails from './components/BooksDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Wishlist from './components/Wishlist/Wishlist';
import ReadBooks from './components/ReadBooks/ReadBooks';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/listed-to-page',
        element: <ListedToPage></ListedToPage>,
        loader: () => fetch('/books.json'),
        children:[
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json'),
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/books.json'),
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json')

      }
     

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
