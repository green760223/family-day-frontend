import { TabBar } from "antd-mobile"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  SystemQRcodeOutline,
  CompassOutline,
} from "antd-mobile-icons"
import styles from "../NavFooter/NavFooter.module.less"

const NavFooter = () => {
  // Define the tabs
  const tabs = [
    {
      title: "首頁",
      key: "home",
      icon: <AppOutline />,
    },
    {
      title: "遊樂園",
      key: "game",
      icon: <CompassOutline />,
    },
    {
      title: "活動",
      key: "activity",
      icon: <UnorderedListOutline />,
    },
    {
      title: "票券",
      key: "ticket",
      icon: <SystemQRcodeOutline />,
    },
  ]

  return (
    <div className={styles.wrapper}>
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default NavFooter
