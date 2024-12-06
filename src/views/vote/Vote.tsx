import {
  Card,
  Button,
  // Toast
} from "antd-mobile"
import styles from "../vote/Vote.module.less"
// import { useNavigate } from "react-router-dom"

const Vote = () => {
  // const navigate = useNavigate()
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
            <span className={styles.title}>投票規則</span>
          </div>
        }
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <div className={styles.subTitle}>
            歡迎大家參加聖誕卡片設計比賽投票活動！每位員工都可以參與這場充滿創意和節日氣氛的比賽，用你的票選出你心中的
            No.1！投票將於 12 月 14 日上午 10 點 開跑，並在 12 月 14 日下午 3 點
            截止，請投下寶貴的一票，讓我們一起為參賽者們加油吧！
          </div>

          {/* <Image src='/qr-code/qr_code_RD007.png' fit='contain' /> */}
          {/* 將 WaterMark 元素包裹在 Image 外層 */}
          {/* <div className={styles.imageWrapper}>
            {isUsed && (
              <WaterMark
                content={"票券已兌換"}
                fontSize={30}
                // image={"/qr-code/redeemed.png"}
                // imageHeight={350}
                // imageWidth={350}
                // height={375}
                // width={375}
                fontColor='#a3a3a3'
                fullPage={false}
              />
            )}
            <Image src='/qr-code/qr_code_RD007.png' fit='contain' />
          </div> */}
        </div>
        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          <Button
            color='primary'
            onClick={() => {
              // Toast.show("活動尚未開放")
              // setIsUsed(true)
              window.location.href = "https://www.promate.com.tw/"
            }}>
            點我觀看作品
          </Button>
          <Button
            color='primary'
            onClick={() => {
              // Toast.show("活動尚未開放")
              // setIsUsed(true)
              // navigate()
              window.location.href = "https://forms.gle/7cnsPHANkugNvHZZ8"
            }}>
            點我進行投票
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Vote
