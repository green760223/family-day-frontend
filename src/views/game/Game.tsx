import { useState, useEffect } from "react"
import { Image, ImageViewer } from "antd-mobile"
import Swal from "sweetalert2"

const Game = () => {
  const [mapVisible, setMapVisible] = useState(false)
  // const [popupVisible, setPopupVisible] = useState(true)

  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "提示",
      text: "您可以點擊地圖後放大查看位置",
      showConfirmButton: true,
      confirmButtonText: "知道了",
      timer: 3000,
      timerProgressBar: true,
    })
  }, [])

  const handleImageClick = () => {
    setMapVisible(true)
    // setMapVisible((prev) => !prev)
    // console.log("mapVisible", mapVisible)
  }

  // const handlePopup = () => {
  //   setPopupVisible(!popupVisible)
  //   Swal.fire({
  //     icon: "success",
  //     title: "報到成功！",
  //     text: "歡迎參加2024豐藝集團家庭日",
  //     showConfirmButton: false,
  //     timer: 2000,
  //     timerProgressBar: true,
  //   })
  // }

  return (
    <div>
      <Image src='public/map.jpg' fit='contain' onClick={handleImageClick} />

      <ImageViewer
        image='public/map.jpg'
        visible={mapVisible}
        onClose={() => {
          setMapVisible(false)
        }}
      />

      {/* <Popup
        visible={popupVisible}
        onMaskClick={() => {
          setPopupVisible(false)
        }}
        bodyStyle={{ height: "10vh" }}>
        <div>Hello</div>
      </Popup> */}
    </div>
  )
}

export default Game
