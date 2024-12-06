// import { useState } from "react"
import { useStore } from "../../store"
import { Card } from "antd-mobile"
import styles from "../team/Team.module.less"

const Team = () => {
  // const [isUsed, _setIsUsed] = useState(false)
  // const [adultCount, _setAdultCount] = useState(1)
  // const [childCount, _setChildCount] = useState(2)
  // const [seniorCount, _setSeniorCount] = useState(1)
  // const [infantCount, _setInfantCount] = useState(1)
  const employeeInfo = useStore((state) => state.employeeInfo)

  // const onClick = () => {
  //   Toast.show("點擊了卡片")
  // }

  // const onHeaderClick = () => {
  //   Toast.show("點擊了卡片Header區域")
  // }

  // const onBodyClick = () => {
  //   Toast.show("點擊了卡片Body區域")
  // }

  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.card}
        title={
          <div className={styles.titleWrapper}>
            <span className={styles.title}>
              所屬組別 - 第 {employeeInfo.group} 組
            </span>
          </div>
        }
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <ul>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
            <li className={styles.subTitle}>勁豐 董事長室 王小明</li>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
            <li className={styles.subTitle}>勁豐 董事長室 王小明</li>
            <li className={styles.subTitle}>勁豐 董事長室 王小明</li>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
            <li className={styles.subTitle}>勁豐 董事長室 王小明</li>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
            <li className={styles.subTitle}>豐藝 董事長室 王小明</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Team
