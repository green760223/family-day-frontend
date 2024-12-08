import styles from "./Home.module.less"
import { NoticeBar, Image, Grid } from "antd-mobile"
import { useEffect } from "react"
import api from "../../api"
import { Employee } from "../../types/api"
import { useStore } from "../../store"
import storage from "../../utils/storage"
import config from "../../config"

const Home = () => {
  const { updateEmployeeInfo, employeeInfo } = useStore()
  // const employeeInfo = useStore((state) => state.employeeInfo)
  const noticeText =
    "親愛的同仁們，請記得選出您最喜歡的聖誕卡片設計，投票截止時間至12月14日下午3點整！"
  // const imgsURL = [
  //   "https://picsum.photos/350/200?random=1",
  //   "https://picsum.photos/350/200?random=2",
  //   "https://picsum.photos/350/200?random=3",
  //   "https://picsum.photos/350/200?random=4",
  //   "https://picsum.photos/350/200?random=5",
  // ]
  const navs = [
    {
      id: 1,
      img: "/nav/pass.png",
      title: "我的票券",
      // link: "http://localhost:5173/#/ticket",
      link: `${config.routeBaseName}/ticket`,
    },
    {
      id: 2,
      img: "/nav/timeline.png",
      title: "活動流程",
      // link: "http://localhost:5173/#/activity",
      link: `${config.routeBaseName}/activity`,
    },
    {
      id: 3,
      img: "/nav/team.png",
      title: "競賽分組",
      // link: "http://localhost:5173/#/team",
      link: `${config.routeBaseName}/team`,
    },
    {
      id: 4,
      img: "/nav/christmas.png",
      title: "耶誕投票",
      // link: "http://localhost:5173/#/vote",
      link: `${config.routeBaseName}/vote`,
    },
  ]

  // const items = imgsURL.map((img, index) => (
  //   <Swiper.Item key={index}>
  //     <div
  //       onClick={() => {
  //         Toast.show(`你點擊了卡片 ${index + 1}`)
  //       }}>
  //       <img
  //         src={img}
  //         style={{ height: "250px", width: "100%" }}
  //         alt='Swiper image'
  //       />
  //     </div>
  //   </Swiper.Item>
  // ))

  const handleNavClick = (id: number) => {
    console.log(`Nav item with id ${id} clicked.`)
    // switch (id) {
    //   case 1:
    //     console.log("Navigating to map")
    //     // Navigation logic for map
    //     break
    //   case 2:
    //     console.log("Navigating to schedule")
    //     // Navigation logic for schedule
    //     break
    //   case 3:
    //     console.log("Navigating to voting")
    //     // Navigation logic for voting
    //     break
    //   default:
    //     console.log("Unknown navigation")
    // }
  }

  useEffect(() => {
    // verifyToken()
    getEmployeeData()
  }, [])

  // const verifyToken = async () => {
  //   const res = await api.verifyToken(storage.get("token"))
  //   setMobile(res["sub"])
  //   console.log("Mobile:", mobile)
  // }

  const getEmployeeData = async () => {
    const res: Employee.Info = await api.getEmployeeInfo(storage.getMobile())
    updateEmployeeInfo(res)
    console.log("Employee Info:", employeeInfo)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.welcome}>
          <div className={styles.welcomeLayout}>
            {/* <div>Hi, {employeeInfo ? employeeInfo.name : "Guest"}!</div> */}
            {/* <div>{employeeInfo.name}</div> */}
          </div>
        </div>
        {/* <div className={styles.welcomeSubText}>歡迎參加2024豐藝集團家庭日</div> */}
        {/* <Swiper
          loop
          autoplay
          autoplayInterval={5000}
          style={{ "--border-radius": "16px" }}
          onIndexChange={(i) => {
            console.log(i, "onIndexChange1")
          }}>
          {items}
        </Swiper> */}
        <div>
          <Image
            src='/logo/main.webp'
            fit='cover'
            style={{ marginLeft: "20px", marginTop: "30px" }}
          />
        </div>
        <div>
          <NoticeBar
            bordered={"block"}
            shape='neutral'
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
        <div>
          <h2 className={styles.info}>活動資訊</h2>
        </div>
        {/* <Space
          justify='center'
          direction='horizontal'
          style={{ display: "flex" }}>
          {navs.map((item, _index) => (
            <div
              key={item.id}
              className={styles.navLayout}
              onClick={() => handleNavClick(item.id)}>
              <a href={item.link} className={styles.navLayout}>
                <Image
                  className={styles.navImage}
                  src={item.img}
                  alt='nav image'
                />
                <p className={styles.navTitle}>{item.title}</p>
              </a>
            </div>
          ))}
        </Space> */}
        <Grid columns={2} style={{ marginBottom: "100px" }}>
          {navs.map((item, _index) => (
            <Grid.Item
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{ padding: "10px" }}>
              <a href={item.link} className={styles.navLayout}>
                <Image
                  className={styles.navImage}
                  src={item.img}
                  style={{ width: "50%", height: "50%" }}
                  alt='nav image'
                />
                <p className={styles.navTitle}>{item.title}</p>
              </a>
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Home
