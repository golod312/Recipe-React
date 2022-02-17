
import { BrowserRouter } from 'react-router-dom'
import Routes from "routs"
import TopBar from 'components/topBar'
import FavoriteMeals from "components/favoriteMeals"
import { DataProvaider } from './context'

const App = () => {

          return <div className='mobile_container'>

                    <DataProvaider>
                              <BrowserRouter>

                                        <TopBar></TopBar>
                                        <FavoriteMeals></FavoriteMeals>
                                        <Routes></Routes>

                              </BrowserRouter>
                    </DataProvaider>

          </div>
}

export default App