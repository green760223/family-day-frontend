import { RouterProvider } from "react-router-dom"
import router from "./router"
import styles from "./App.module.less"

const App = () => {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
