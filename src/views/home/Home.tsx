import styles from "./Home.module.less"
import { Swiper, Toast, NoticeBar, Space, Image } from "antd-mobile"
import { useEffect, useState } from "react"
import api from "../../api"
import { Employee } from "../../types/api"

const Home = () => {
  const [employeeInfo, setEmployeeInfo] = useState<Employee.Info | null>(null)
  const noticeText =
    "親愛的同仁們，請記得選出您最喜歡的聖誕卡片設計，投票截止時間至12月14日下午3點整！"
  const imgsURL = [
    "https://picsum.photos/400/250?random=1",
    "https://picsum.photos/400/250?random=2",
    "https://picsum.photos/400/250?random=3",
  ]
  const navs = [
    {
      id: 1,
      img: "public/nav/map.png",
      title: "會場地圖",

    },
    {
      id: 2,
      img: "public/nav/schedule.png",
      title: "活動流程",
    },
    {
      id: 3,
      img: "public/nav/vote.png",
      title: "卡片票選",
    }
  ]

  const items = imgsURL.map((img, index) => (
    <Swiper.Item key={index}>
      <div
        onClick={() => {
          Toast.show(`你點擊了卡片 ${index + 1}`)
        }}>
        <img
          src={img}
          style={{ height: "250px", width: "100%" }}
          alt='Swiper image'
        />
      </div>
    </Swiper.Item>
  ))

  useEffect(() => {
    getEmployeeData()
  }, [])

  const getEmployeeData = async () => {
    const res: Employee.Info = await api.getEmployeeInfo("0931883551")
    setEmployeeInfo(res)
    console.log("Employee Info:", res.name)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.welcome}>
          <div className={styles.welcomeLayout}>
            <div>Hi, {employeeInfo ? employeeInfo.name : "Guest"}</div>
            {/* <div>Testing</div> */}
          </div>
        </div>
        <Swiper
          loop
          autoplay
          autoplayInterval={5000}
          style={{ "--border-radius": "16px" }}
          onIndexChange={(i) => {
            console.log(i, "onIndexChange1")
          }}>
          {items}
        </Swiper>
        <div>
          <NoticeBar
            className={styles.noticeBar}
            content={noticeText}
            wrap={true}
            style={{
              "--background-color": "white",
              "--border-color": "white",
              "--text-color": "grey",
              "--font-size": "16px",
            }}
          />
        </div>
        
        {/* <div className={styles.navLayout}> */}
        {/* <Space>
          {navs.map((item, _index) => (
            <div key={item.id} className={styles.navLayout}>
              <Image
                className={styles.navImage}
                src={item.img}
                alt="nav image"
              />
              <p className={styles.navTitle}>{item.title}</p>
            </div>
          ))}

        </Space> */}

        <Space justify="around" direction="horizontal">
          {navs.map((item, _index) => (
            <div key={item.id} className={styles.navLayout} >
              <Image
                className={styles.navImage}
                src={item.img}
                alt="nav image"
              />
              <p className={styles.navTitle}>{item.title}</p>
            </div>
          ))}

        </Space>
        
        

      </div>
    </>
  )
}

export default Home
