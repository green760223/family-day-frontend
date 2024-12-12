import { Card, Button } from "antd-mobile"
import styles from "../vote/Vote.module.less"
// import { useNavigate } from "react-router-dom"

const Vote = () => {
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
            <span className={styles.title}>AI 聖誕卡創作票選活動</span>
          </div>
        }
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <div className={styles.subHeadTitle}>【 投票規則 】</div>
          <div className={styles.subTitle}>
            豐藝集團 AI
            聖誕卡片創作競賽，歡迎大家參加聖誕卡片設計比賽投票活動!用你的投票選出心中的No.1!!
          </div>
          <div className={styles.subHeadTitle}>【 投票方式 】</div>
          <div className={styles.subTitle}>
            參加今日豐藝 &
            勁豐家庭日活動的員工，均享有額外眷屬加碼投票權，每位員工可線上投{" "}
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>1</span>{" "}
            張票。
          </div>
          <div className={styles.subHeadTitle}>【 投票時間 】</div>
          <div className={styles.subTitle}>2024/12/14 09:00-15:00 截止投票</div>
        </div>
        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          <Button
            color='primary'
            onClick={() => {
              window.location.href = "https://supr.link/CtL4F"
            }}>
            點我觀看作品
          </Button>
          <Button
            color='primary'
            onClick={() => {
              window.location.href = "https://supr.link/4kVj0"
            }}>
            點我進行投票
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Vote
