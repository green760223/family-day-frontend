import { Form, Input, Button, Image } from "antd-mobile"
import { MobileOutlined, UserOutlined } from "@ant-design/icons"
import styles from "./SignIn.module.less"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const SignIn = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("handleLogin")

    Swal.fire({
      icon: "success",
      title: "報到成功",
      text: "歡迎來到豐趣遊樂園",
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
          <p className={styles.font}>豐趣遊樂園、藝起HIGH翻天</p>
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
                  marginTop: "120px",
                  border: "none",
                }}>
                登入報到
              </Button>
            }>
            <Form.Item
              name='employeeId'
              label={<UserOutlined className={styles.prefixIcon} />}
              rules={[{ required: true, message: "員工編號不能為空" }]}>
              <Input onChange={console.log} placeholder='请输入員工編號' />
            </Form.Item>
            <Form.Item
              name='cellphone'
              label={<MobileOutlined className={styles.prefixIcon} />}
              rules={[{ required: true, message: "手機號碼不能為空" }]}>
              <Input onChange={console.log} placeholder='请输入手機號碼' />
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
