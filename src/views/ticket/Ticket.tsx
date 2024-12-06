import { useState, useEffect } from "react"
import { useStore } from "../../store"
import { Card, Button, Image, Toast, WaterMark, Divider } from "antd-mobile"
import styles from "../ticket/Ticket.module.less"

const Ticket = () => {
  const [isUsed, _setIsUsed] = useState(false)
  // const [adultCount, _setAdultCount] = useState(1)
  // const [childCount, _setChildCount] = useState(2)
  // const [seniorCount, _setSeniorCount] = useState(1)
  // const [infantCount, _setInfantCount] = useState(1)
  const employeeInfo = useStore((state) => state.employeeInfo)

  useEffect(() => {
    if (isUsed) {
      Toast.show("您的票券已兌換！")
    }
  }, [isUsed])

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
            <span className={styles.title}>票券資訊 - {employeeInfo.name}</span>
          </div>
        }
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <div className={styles.participants}>
            <div className={styles.category}>
              {/* 成人 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>成人</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_adult}
                </div>
              </div>

              <Divider direction='vertical' />

              {/* 孩童 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>孩童</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_child}
                </div>
              </div>

              <Divider direction='vertical' />

              {/* 博愛 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>博愛</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_elderly}
                </div>
              </div>

              <Divider direction='vertical' />

              {/* 幼童 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>幼童</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_infant}
                </div>
              </div>
            </div>
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
              Toast.show("尚未開放兌換功能")
              // setIsUsed(true)
            }}>
            兌換票券
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Ticket
