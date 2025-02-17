// DO NOT DELETE
import Header from "./Header"
import './App.css'
import Description from "./Description"
import DogListContainer from "./DogListContainer"

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return(
  <div>
    <Header/>
    <Description/>
    <hr></hr>
    <DogListContainer/>
  </div>)
}