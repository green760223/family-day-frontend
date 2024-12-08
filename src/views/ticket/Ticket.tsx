import {
  // useState,
  useEffect,
} from "react"
import { useStore } from "../../store"
import { Card, Button, Divider } from "antd-mobile"
import storage from "../../utils/storage"
import Swal from "sweetalert2"
import styles from "../ticket/Ticket.module.less"

const Ticket = () => {
  // const [isUsed, setIsUsed] = useState(false)
  const employeeInfo = useStore((state) => state.employeeInfo)
  const tiecketStatus = storage.getTicket()

  useEffect(() => {}, [tiecketStatus])

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
            <span className={styles.title}>員工姓名 - {employeeInfo.name}</span>
          </div>
        }
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <div className={styles.subContent}>員工及眷屬人數</div>
          <div className={styles.participants}>
            <div className={styles.category}>
              {/* 成人 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>成人</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_adult + employeeInfo.family_employee}
                </div>
              </div>

              <Divider direction='vertical' />

              {/* 孩童、博愛 */}
              <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>孩童、博愛</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_child + employeeInfo.family_elderly}
                </div>
              </div>

              <Divider direction='vertical' />

              {/* 博愛 */}
              {/* <div className={styles.categoryItem}>
                <div className={styles.categoryItemTitle}>博愛</div>
                <div className={styles.categoryItemText}>
                  {employeeInfo.family_elderly}
                </div>
              </div>

              <Divider direction='vertical' /> */}

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
            disabled={tiecketStatus}
            color='primary'
            onClick={() => {
              Swal.fire({
                title: "兌換票券",
                input: "password",
                inputLabel: "請輸入活動驗證碼",
                inputAttributes: {
                  autocapitalize: "off",
                },
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "確認",
                cancelButtonText: "取消",
              }).then((result) => {
                console.log("result", result)

                if (result.isConfirmed && result.value === "1214") {
                  Swal.fire({
                    icon: "success",
                    text: "票券兌換成功！",
                    confirmButtonText: "知道了",
                  })
                  storage.setTicket(true)
                }

                // setIsUsed(true)
              })
            }}>
            {tiecketStatus ? "已兌換票券" : "兌換票券"}
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Ticket
