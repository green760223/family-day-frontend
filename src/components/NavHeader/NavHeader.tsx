import { NavBar } from "antd-mobile"
import styles from "./NavHeader.module.less"

const NavHeader = () => {
  return (
    <div className={styles.header}>
      <NavBar back={null}>豐富人生 藝遊世界</NavBar>
    </div>
  )
}

export default NavHeader
