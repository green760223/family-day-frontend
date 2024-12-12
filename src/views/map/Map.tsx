import { useState, useEffect } from "react"
import { Image, ImageViewer } from "antd-mobile"
import Swal from "sweetalert2"

const Map = () => {
  const [mapVisible, setMapVisible] = useState(false)

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

  return (
    <div>
      <Image
        src='https://promate-fd.s3.ap-northeast-1.amazonaws.com/map.webp'
        // src='/map.webp'
        fit='contain'
        onClick={handleImageClick}
      />

      <ImageViewer
        image='https://promate-fd.s3.ap-northeast-1.amazonaws.com/map.webp'
        // image='/map.webp'
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

export default Map
