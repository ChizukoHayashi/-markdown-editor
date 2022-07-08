import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const Main = () => {return(<>
    <p>Test</p>
    {/* <GlobalStyle /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />} />
          
      
        <Route path="/history">
          <h1>History</h1>
        
        </Route>
        {/* <Route path="*">
          <Navigate to="/editor" />
        </Route> */}
      </Routes>
      
      
    </BrowserRouter>
  </>)}
  

render(<Main />, document.getElementById('app'))