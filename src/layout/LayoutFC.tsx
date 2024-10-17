import { Layout } from "antd"
import NavFooter from "../components/NavFooter/NavFooter"
import NavHeader from "../components/NavHeader/NavHeader"
import { Outlet } from "react-router-dom"
import styles from "./LayoutFC.module.less"

const LayoutFC = () => {
  return (
    <Layout className={styles.layout}>
      <NavHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
      <NavFooter />
    </Layout>
  )
}

export default LayoutFC
