import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import Hello from './components/Hello'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import { Parent } from './components/Parent'
import { UseMemoSample } from './components/UseMemoSample'
import reportWebVitals from './reportWebVitals'
import { ImageUploader } from './components/ImageUploader'
import { Clock } from './components/Clock'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Message /> */}
    {/* <ContainerSample /> */}
    {/* <Parent />*/}
    {/* <UseMemoSample /> */}
    {/* <Clock /> */}
    <ImageUploader />
  </>
  // </React.StrictMode>
  // <h1>見出し</h1>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
