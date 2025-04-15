import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './Layout.jsx'
import Landing from './Pages/Landing.jsx'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ContactMe from './Pages/ContactMe.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="contact" element={<ContactMe/>} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      {/* <Route loader={GithubLoader} path="github" element={<Github />} /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
