import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store"
import { Card, Button, Divider } from "antd-mobile"
import api from "../../api"
import { Employee } from "../../types/api"
import storage from "../../utils/storage"
import Swal from "sweetalert2"
import styles from "../ticket/Ticket.module.less"

const Ticket = () => {
  const navigate = useNavigate()
  const [isChecked, setIsCheckd] = useState<boolean>(false)
  const { employeeInfo, updateEmployeeInfo } = useStore()

  useEffect(() => {
    checkEmployeeAuth()
  }, [])

  const checkEmployeeAuth = async () => {
    const token = storage.get("token")

    if (token) {
      await getEmployeeInfo()
    } else {
      navigate("/")
    }
  }

  const employeeCheckIn = async () => {
    const res: Employee.Info = await api.checkInEmployee(storage.getMobile())
    return res
  }

  const getEmployeeInfo = async () => {
    const res: Employee.Info = await api.getEmployeeInfo(storage.getMobile())
    setIsCheckd(res.is_checked)
    updateEmployeeInfo(res)
  }

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
            disabled={isChecked}
            color='primary'
            onClick={() => {
              Swal.fire({
                title: "請輸入驗證碼兌換票券",
                input: "password",
                inputLabel: "請確實核對票券數量，兌換後恕不補發！",
                inputAttributes: {
                  autocapitalize: "off",
                  autocomplete: "off",
                },
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "確認",
                cancelButtonText: "取消",
                // preConfirm: async () => {
                //   try {
                //     const res = await employeeCheckIn()
                //     if (res.is_checked) {
                //       setIsCheckd(true)
                //     }
                //   } catch (error) {
                //     console.error("Unexpected error:", error)
                //   }
                // },
              }).then(async (result) => {
                console.log("result", result)

                if (result.isConfirmed && result.value === "1214") {
                  try {
                    const ticket = await employeeCheckIn()
                    if (ticket.is_checked) {
                      setIsCheckd(true)
                      Swal.fire({
                        icon: "success",
                        text: "票券兌換成功！",
                        confirmButtonText: "知道了",
                      })
                    } else {
                      Swal.fire({
                        icon: "error",
                        text: "票券兌換失敗，請洽工作人員！",
                        confirmButtonText: "知道了",
                      })
                    }
                  } catch (error) {
                    console.error("Unexpected error:", error)
                    Swal.fire({
                      icon: "error",
                      text: "兌換失敗，請洽工作人員！",
                      confirmButtonText: "知道了",
                    })
                  }
                } else if (result.isConfirmed && result.value !== "1214") {
                  Swal.fire({
                    icon: "error",
                    text: "驗證碼輸入錯誤，請重新輸入或洽工作人員！",
                    confirmButtonText: "知道了",
                  })
                }
              })
            }}>
            {isChecked ? "已兌換票券" : "兌換票券"}
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Ticket
