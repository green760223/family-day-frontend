import styles from "./Home.module.less"
import { Swiper, Toast, NoticeBar } from "antd-mobile"
import { useEffect } from "react"
import api from "../../api"
import { Employee } from "../../types/api"

const Home = () => {
  const noticeText = "親愛的同仁們，請記得選出您最喜歡的聖誕卡設計！投票截止時間：12月14日下午3點。"
  const imgsURL = [
    "https://picsum.photos/400/250?random=1", 
    "https://picsum.photos/400/250?random=2", 
    "https://picsum.photos/400/250?random=3"
  ]

  const items = imgsURL.map((img, index) => (
    <Swiper.Item key={index} >
      <div
        onClick={() => {
          Toast.show(`你點擊了卡片 ${index + 1}`)
        }}
      >
        <img src={img} style={{height: "250px", width: "100%"}} alt="Swiper image" />
        
      </div>
    </Swiper.Item>
  ))

  

  useEffect(() => {
    getEmployeeData()
  }, [])

  const getEmployeeData = async () => { 
    const res: Employee.Info = await api.getEmployeeInfo("0931883551")
    console.log("getEmployeeData triggered", res)
  }


  return (
    <>
    <div className={styles.wrapper}>
      
      <Swiper
        loop
        autoplay
        autoplayInterval={5000}
        style={{"--border-radius": "10px"}}
        onIndexChange={(i, ) => {
          console.log(i, "onIndexChange1")
        }}>
        {items}
      </Swiper>
      <div>
        <NoticeBar className={styles.noticeBar} content={noticeText} wrap={true} style={{"--background-color": "white", "--border-color": "white", "--text-color": "grey", "--font-size": "16px"}} />
      </div>
      {/* <div style={{marginTop: "20px"}}>
      Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
      nisi, natus nam iure eos dignissimos vitae dolorum corporis atque. Natus
      pariatur quo animi, dolorem dicta quisquam in consequuntur. Inventore,
      doloribus? Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Provident nisi, natus nam iure eos dignissimos vitae dolorum corporis
      atque. Natus pariatur quo animi, dolorem dicta quisquam in consequuntur.
      Inventore, doloribus? Test, Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Provident nisi, natus nam iure eos dignissimos vitae
      dolorum corporis atque. Natus pariatur quo animi, dolorem dicta quisquam
      in consequuntur.  
      </div> */}
      
      
    </div>
    </>
    
  )
}

export default Home
