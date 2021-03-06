import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ListType } from './types/ListType'
import User from './components/User'

function App() {
  const [list, setList] = useState<ListType[]>([])


  const API_URL = 'https://jsonplaceholder.typicode.com/todos/'

  const getAPI = useCallback(
    async () => {
      const res = await axios.get(API_URL)
      setList(res.data.slice(1, 10))
    }, []
  )

  useEffect(() => {
    getAPI()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <User data={list}></User>
    </div>
  )
}

export default App
