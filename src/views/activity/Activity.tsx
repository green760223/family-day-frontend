// import { useState, useEffect } from "react"
import { Steps, Space, Button } from "antd-mobile"
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
          description={
            <div style={{ lineHeight: "1.5" }}>
              主持人開場、活力熱身操、長官致詞、家庭日啟動儀式、大合照
            </div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>10:30 - 11:00 AM</div>
              <div className={styles.customTitleRight}>舞台表演(一)</div>
            </div>
          }
          description={
            <div style={{ lineHeight: "1.5" }}>經典亂打秀、親子互動演出</div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>11:00 - 11:05 AM</div>
              <div className={styles.customTitleRight}>抽獎時間(一)</div>
            </div>
          }
          description={<div style={{ lineHeight: "1.5" }}>第一階段抽獎</div>}
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>11:05 - 11:30 AM</div>
              <div className={styles.customTitleRight}>舞台表演(二)</div>
            </div>
          }
          description={
            <div style={{ lineHeight: "1.5" }}>樂團帶動唱跳演出</div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>11:30 - 12:00 PM</div>
              <div className={styles.customTitleRight}>動物見面會</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>非洲部落 - 草原聚場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>12:00 / 15:45 PM</div>
              <div className={styles.customTitleRight}>JC公主的逆襲</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>阿拉伯皇宮 - 魔幻劇場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>14:00 - 14:30 PM</div>
              <div className={styles.customTitleRight}>耶誕遊行</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>美國大西部 – 中央廣場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>14:45 - 15:15 PM</div>
              <div className={styles.customTitleRight}>探索秘境叢林</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>
                美國大西部 鳥禽方舟 - 探索館
              </div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>15:00 - 15:30 PM</div>
              <div className={styles.customTitleRight}>舞台表演(三)</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>
                氣球魔術演出、大型泡泡互動秀
              </div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>15:30 - 16:00 PM</div>
              <div className={styles.customTitleRight}>舞台表演(四)</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>樂團帶動唱</div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title={
            <div className={styles.stepContent}>
              <div className={styles.customTitleLeft}>16:00 - 16:20 PM</div>
              <div className={styles.customTitleRight}>閉幕活動</div>
            </div>
          }
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.5" }}>第二輪抽獎、活動圓滿結束</div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />
      </Steps>
    </div>
  )
}

export default Activity
