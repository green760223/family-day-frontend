import { useState, useEffect } from "react"
import { Steps, Space, Button } from "antd-mobile"
import { CheckCircleFill } from "antd-mobile-icons"
import styles from "./Activity.module.less"
import Swal from "sweetalert2"

const Activity = () => {
  const { Step } = Steps
  const [isNotification, setIsNotification] = useState(false)

  useEffect(() => {
    if (isNotification) {
      Swal.fire({
        title: "新活動提醒",
        text: "11:00 - 11:05 AM 抽獎活動即將開始，快來參加吧！",
        icon: "info",
        confirmButtonText: "我知道了",
      })
    }
    setIsNotification(false)
  }, [isNotification])

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
          title='10:00 - 10:30 AM 開幕活動'
          description={
            <div style={{ lineHeight: "1.2" }}>
              主持人開場、活力熱身操、長官致詞、家庭日啟動儀式、大合照
            </div>
          }
          icon={<CheckCircleFill />}
        />
        <Step
          title='10:30 - 11:00 AM 舞台表演(一)'
          description={
            <div style={{ lineHeight: "1.2" }}>經典亂打秀、親子互動演出</div>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='11:00 - 11:05 AM 抽獎時間'
          description={<div style={{ lineHeight: "1.2" }}>第一輪抽獎</div>}
          icon={<CheckCircleFill />}
        />

        <Step
          title='11:05 - 11:30 AM 舞台表演(二)'
          description={<div style={{ lineHeight: "1.2" }}>樂團演出</div>}
          icon={<CheckCircleFill />}
        />

        <Step
          title='11:30 - 12:00 PM 動物見面會'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>非洲部落 - 草原聚場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='12:00 / 15:45 PM JC公主的逆襲'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>阿拉伯皇宮 - 魔幻劇場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='14:00 - 14:30 PM 耶誕遊行'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>美國大西部 – 中央廣場</div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='14:45 - 15:15 PM 探索秘境叢林'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>
                美國大西部 鳥禽方舟 - 探索館
              </div>
              <Button color='primary'>查看地圖</Button>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='15:00 - 15:30 PM 舞台表演(三)'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>
                氣球魔術演出、大型泡泡互動秀
              </div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='15:30 - 16:00 PM 舞台表演(四)'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>樂團帶動唱</div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />

        <Step
          title='16:00 - 16:20 PM 閉幕活動'
          description={
            <Space block direction='vertical'>
              <div style={{ lineHeight: "1.2" }}>第二輪抽獎、活動圓滿結束</div>
            </Space>
          }
          icon={<CheckCircleFill />}
        />
      </Steps>
    </div>
  )
}

export default Activity
