import { Form, Input, Button, Image } from "antd-mobile"
import { MobileOutlined } from "@ant-design/icons"
import styles from "./SignIn.module.less"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const SignIn = () => {
  const navigate = useNavigate()
  const MOBILE_LENGTH = 10
  const MOBILE_TEST = "0912345678"

  const onLoginFinished = async (values: any) => {
    console.log("onLoginFinished triggered", values)

    if (!values.mobile || values.mobile.length !== MOBILE_LENGTH) {
      return Swal.fire({
        icon: "error",
        title: "報到失敗！",
        text: "手機號碼或格式錯誤，請重新輸入或請洽工作人員",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
    }

    try {
      if (values.mobile === MOBILE_TEST) {
        await Swal.fire({
          icon: "success",
          title: "報到成功！",
          text: "歡迎參加2024豐藝集團家庭日",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })

        navigate("/home")
      }
    } catch (error) {
      console.error("Unexpected error:", error)

      await Swal.fire({
        icon: "error",
        title: "報到失敗！",
        text: "請重新輸入或請洽工作人員完成報到",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Image
            className={styles.logo}
            src='/logo/promate-logo.png'
            fit='cover'
          />
          <p className={styles.font}>
            <span className={styles.fontColor}>豐</span>富人生{" "}
            <span className={styles.fontColor}>藝</span>遊世界 <br />{" "}
            <span className={styles.subFont}>2024 豐藝集團家庭日</span>
          </p>
        </div>

        <div className={styles.footer}>
          <Form
            layout='horizontal'
            onFinish={onLoginFinished}
            footer={
              <Button
                block
                shape='rounded'
                type='submit'
                size='large'
                style={{
                  backgroundColor: "#c30a3d",
                  color: "#ffffff",
                  marginTop: "100px",
                  border: "none",
                }}>
                登入報到
              </Button>
            }>
            <Form.Item
              name='mobile'
              label={<MobileOutlined className={styles.prefixIcon} />}
              rules={[{ required: true, message: "手機號碼不能為空" }]}>
              <Input placeholder='請輸入手機號碼' />
            </Form.Item>
          </Form>
        </div>
        <span className={styles.footerText}>
          Powered by 樂心國際整合行銷有限公司
        </span>
      </div>
    </>
  )
}

export default SignIn
