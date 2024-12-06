import { Steps } from "antd-mobile"
import { CheckCircleFill } from "antd-mobile-icons"
import styles from "./Activity.module.less"
// import Swal from "sweetalert2"

const Activity = () => {
  const { Step } = Steps
  // const [isNotification, setIsNotification] = useState(true)

  // useEffect(() => {
  //   if (isNotification) {
  //     Swal.fire({
  //       title: "新活動提醒",
  //       text: "11:00 - 11:05 AM 抽獎活動即將開始，快來參加吧！",
  //       icon: "info",
  //       confirmButtonText: "我知道了",
  //     })
  //   }
  //   setIsNotification(false)
  // }, [isNotification])

  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>活動流程</h2>
      </div>
      <Steps
        direction='vertical'
        current={1}
        style={{
          "--title-font-size": "18px",
          "--description-font-size": "16px",
          "--indicator-margin-right": "12px",
          "--icon-size": "30px",
        }}>
        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>10:00 - 10:30 AM</div>
              <div className={styles.customTitleRight}>開幕活動</div>
            </div>
          }
          // description={
          //   <div style={{ lineHeight: "1.5", color: "black" }}>
          //     主持人開場、活力熱身操、長官致詞、家庭日啟動儀式、大合照
          //   </div>
          // }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>10:30 - 11:00 AM</div>
              <div className={styles.customTitleRight}>團體競賽分組</div>
            </div>
          }
          // description={
          //   <div style={{ lineHeight: "1.5", color: "black" }}>
          //     團體競賽分組與遊戲規則說明
          //   </div>
          // }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>11:00 - 12:00 PM</div>
              <div className={styles.customTitleRight}>團體競賽</div>
            </div>
          }
          description={
            <div style={{ lineHeight: "2", color: "black" }}>
              <li style={{ marginLeft: "10px" }}>
                競賽一 - 環遊世界（美國大西部）
              </li>
              <li style={{ marginLeft: "10px" }}>
                競賽二 - 疊杯接力（阿拉伯皇宮）
              </li>
              <li style={{ marginLeft: "10px" }}>
                競賽三 - 一氣呵成（南太平洋）
              </li>
              <li style={{ marginLeft: "10px" }}>
                競賽四 - 西部牛仔（非洲部落）
              </li>
              <li style={{ marginLeft: "10px" }}>
                競賽五 - 同心傳奇（主舞台）
              </li>
            </div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>12:00 - 15:00 PM</div>
              <div className={styles.customTitleRight}>親子闖關</div>
            </div>
          }
          description={
            <div style={{ lineHeight: "2", color: "black" }}>
              <li style={{ marginLeft: "10px" }}>
                關卡一 - Merry Christmas（美國大西部）
              </li>
              <li style={{ marginLeft: "10px" }}>
                關卡二 - Snowman 堆雪人（阿拉伯皇宮）
              </li>
              <li style={{ marginLeft: "10px" }}>
                關卡三 - 藝起旅行趣（南太平洋）
              </li>
              <li style={{ marginLeft: "10px" }}>
                關卡四 - 我是神射手（非洲部落）
              </li>
              <li style={{ marginLeft: "10px" }}>
                關卡五 - 疊疊樂大作戰（主舞台）
              </li>
            </div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>15:30 - 16:00 PM</div>
              <div className={styles.customTitleRight}>家庭日閉幕</div>
            </div>
          }
          // description={
          //   <Space block direction='vertical'>
          //     <div style={{ lineHeight: "1.5" }}>非洲部落 - 草原聚場</div>
          //     <Button color='primary'>查看地圖</Button>
          //   </Space>
          // }
          icon={<CheckCircleFill />}
        />
      </Steps>
    </div>
  )
}

export default Activity
