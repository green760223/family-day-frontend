import { NavBar } from "antd-mobile"
import styles from "./NavHeader.module.less"

const NavHeader = () => {
  return (
    <div className={styles.header}>
      <NavBar back={null}>豐趣遊樂園</NavBar>
    </div>
  )
}

export default NavHeader
