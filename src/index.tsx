import ReactDOM from "react-dom/client";
import App from "./App";
import { SoftboxContextProvider } from "./store/softbox-context";

const widgetDivs = document.querySelectorAll('.softbox-widget'); 

widgetDivs.forEach(div =>{
  const root = ReactDOM.createRoot(div);
  root.render(
    <SoftboxContextProvider>
    <App />
  </SoftboxContextProvider>
  )
})