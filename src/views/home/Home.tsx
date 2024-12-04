import styles from "./Home.module.less"
import { Swiper, Toast, NoticeBar, Space, Image } from "antd-mobile"
import { useEffect, useState } from "react"
import api from "../../api"
import { Employee } from "../../types/api"
import { link } from "fs"

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
      img: "/nav/map.png",
      title: "會場地圖",
      link: "http://localhost:5173/#/game"

    },
    {
      id: 2,
      img: "/nav/schedule.png",
      title: "活動流程",
      link: "http://localhost:5173/#/activity"
    },
    {
      id: 3,
      img: "/nav/vote.png",
      title: "卡片票選",
      link: "https://forms.gle/2oekmcnvN5QFjgcG7"
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

  const handleNavClick = (id: number) => {
    console.log(`Nav item with id ${id} clicked.`)
    switch (id) {
      case 1:
        console.log("Navigating to map")
        // Navigation logic for map
        break
      case 2:
        console.log("Navigating to schedule")
        // Navigation logic for schedule
        break
      case 3:
        console.log("Navigating to voting")
        // Navigation logic for voting
        break
      default:
        console.log("Unknown navigation")
    }
  }
  

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

        <Space justify="center" direction="horizontal" style={{display: "flex"}}>
          {navs.map((item, _index) => (
            <div key={item.id} className={styles.navLayout} onClick={() => handleNavClick(item.id)}>
              <a href={item.link} className={styles.navLayout}>
                  <Image
                  className={styles.navImage}
                  src={item.img}
                  alt="nav image"
                  />
                  <p className={styles.navTitle}>{item.title}</p>
              </a>
            </div>
          ))}
        </Space>        
        

      </div>
    </>
  )
}

export default Home
