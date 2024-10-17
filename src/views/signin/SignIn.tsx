import { Form, Input, Button, Image } from "antd-mobile"
import { MobileOutlined } from "@ant-design/icons"
import styles from "./SignIn.module.less"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const SignIn = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("handleLogin")

    Swal.fire({
      icon: "success",
      title: "報到成功！",
      text: "歡迎參加2024豐藝集團家庭日",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      navigate("/home")
    })
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Image
            className={styles.logo}
            src='/src/assets/logo/promate-logo.png'
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
            footer={
              <Button
                block
                onClick={handleLogin}
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
              name='cellphone'
              label={<MobileOutlined className={styles.prefixIcon} />}
              rules={[{ required: true, message: "手機號碼不能為空" }]}>
              <Input onChange={console.log} placeholder='請輸入手機號碼' />
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
