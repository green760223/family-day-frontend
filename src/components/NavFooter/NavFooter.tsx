import { TabBar } from "antd-mobile"
import {
  AppOutline,
  UnorderedListOutline,
  SystemQRcodeOutline,
  CompassOutline,
} from "antd-mobile-icons"
import styles from "../NavFooter/NavFooter.module.less"
import { useNavigate, useLocation } from "react-router-dom"

const NavFooter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  // Define the tabs
  const tabs = [
    {
      title: "首頁",
      key: "/home",
      icon: <AppOutline />,
    },
    {
      title: "遊樂園",
      key: "/game",
      icon: <CompassOutline />,
    },
    {
      title: "活動",
      key: "/activity",
      icon: <UnorderedListOutline />,
    },
    {
      title: "票券",
      key: "/ticket",
      icon: <SystemQRcodeOutline />,
    },
  ]

  return (
    <div className={styles.wrapper}>
      <TabBar
        activeKey={pathname}
        onChange={(key) => {
          navigate(key) // 使用 navigate 函數導航到選定的路徑
        }}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default NavFooter
