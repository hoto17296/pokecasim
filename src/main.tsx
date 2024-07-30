import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "./reset.css"

ReactDOM.createRoot(document.querySelector("main")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
