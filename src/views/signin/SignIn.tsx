import { Form, Input, Button, Image } from "antd-mobile"
import { MobileOutlined, UserOutlined } from "@ant-design/icons"
import styles from "./SignIn.module.less"

const SignIn = () => {
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
                shape='rounded'
                type='submit'
                size='large'
                style={{
                  backgroundColor: "#c30a3d",
                  color: "#ffffff",
                  marginTop: "60px",
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
            {/* <ProFormText
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              name='employeeId'
              placeholder={"員工編號"}
              rules={[
                {
                  required: true,
                  message: "請輸入員工編號",
                },
              ]}
            />
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className={"prefixIcon"} />,
              }}
              name='mobile'
              placeholder={"手機號碼"}
              rules={[
                {
                  required: true,
                  message: "请输入手機號碼",
                },
              ]}
            /> */}
          </Form>
        </div>
      </div>
    </>
  )
}

export default SignIn
