import { useState, useEffect } from "react"
import { Card, Button, Image, Toast, WaterMark } from "antd-mobile"
import styles from "./Ticket.module.less"

const Ticket = () => {
  const [isUsed, setIsUsed] = useState(false)

  useEffect(() => {
    if (isUsed) {
      Toast.show("票券已兌換")
    }
  }, [isUsed])

  const onClick = () => {
    Toast.show("点击了卡片")
  }

  const onHeaderClick = () => {
    Toast.show("点击了卡片Header区域")
  }

  const onBodyClick = () => {
    Toast.show("点击了卡片Body区域")
  }

  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.card}
        title={
          <div className={styles.titleWrapper}>
            <span className={styles.title}>票券資訊</span>
          </div>
        }
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          {/* <Image src='src/assets/qr-code/qr_code_RD007.png' fit='contain' /> */}
          {/* 將 WaterMark 元素包裹在 Image 外層 */}
          <div className={styles.imageWrapper}>
            {isUsed && (
              <WaterMark
                content={"票券已兌換"}
                fontSize={30}
                // image={"src/assets/qr-code/redeemed.png"}
                // imageHeight={350}
                // imageWidth={350}
                // height={375}
                // width={375}
                fontColor='#a3a3a3'
                fullPage={false}
              />
            )}

            <Image src='src/assets/qr-code/qr_code_RD007.png' fit='contain' />
          </div>
        </div>
        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          <Button
            color='primary'
            onClick={() => {
              Toast.show("點擊了兌換票券按鈕")
              setIsUsed(true)
            }}>
            兌換票券
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Ticket
