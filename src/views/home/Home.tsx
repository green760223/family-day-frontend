// import styles from "./Welcome.module.less"
import { Swiper } from "antd-mobile"
import { SwiperRef } from "antd-mobile/es/components/swiper"
import { useEffect } from "react"
import api from "../../api"
import { Employee } from "../../types/api"

const Home = () => {

  useEffect(() => {
    getEmployeeData()
  }, [])

  const getEmployeeData = async () => { 
    const res: Employee.Info = await api.getEmployeeInfo("0931883551")
    console.log("getEmployeeData triggered", res)
  }


  return (
    <div>
      {/* <Swiper
        loop
        autoplay
        onIndexChange={(i) => {
          console.log(i, "onIndexChange1")
        }}>
        {items}
      </Swiper> */}
      Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
      nisi, natus nam iure eos dignissimos vitae dolorum corporis atque. Natus
      pariatur quo animi, dolorem dicta quisquam in consequuntur. Inventore,
      doloribus? Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Provident nisi, natus nam iure eos dignissimos vitae dolorum corporis
      atque. Natus pariatur quo animi, dolorem dicta quisquam in consequuntur.
      Inventore, doloribus? Test, Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Provident nisi, natus nam iure eos dignissimos vitae
      dolorum corporis atque. Natus pariatur quo animi, dolorem dicta quisquam
      in consequuntur. Inventore, doloribus? Test, Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Provident nisi, natus nam iure eos
      dignissimos vitae dolorum corporis atque. Natus pariatur quo animi,
      dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test, Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi, natus
      nam iure eos dignissimos vitae dolorum corporis atque. Natus pariatur quo
      animi, dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test,
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi,
      natus nam iure eos dignissimos vitae dolorum corporis atque. Natus
      pariatur quo animi, dolorem dicta quisquam in consequuntur. Inventore,
      doloribus? Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Provident nisi, natus nam iure eos dignissimos vitae dolorum corporis
      atque. Natus pariatur quo animi, dolorem dicta quisquam in consequuntur.
      Inventore, doloribus? Test, Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Provident nisi, natus nam iure eos dignissimos vitae
      dolorum corporis atque. Natus pariatur quo animi, dolorem dicta quisquam
      in consequuntur. Inventore, doloribus? Test, Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Provident nisi, natus nam iure eos
      dignissimos vitae dolorum corporis atque. Natus pariatur quo animi,
      dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test, Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi, natus
      nam iure eos dignissimos vitae dolorum corporis atque. Natus pariatur quo
      animi, dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test,
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi,
      natus nam iure eos dignissimos vitae dolorum corporis atque. Natus
      pariatur quo animi, dolorem dicta quisquam in consequuntur. Inventore,
      doloribus? Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Provident nisi, natus nam iure eos dignissimos vitae dolorum corporis
      atque. Natus pariatur quo animi, dolorem dicta quisquam in consequuntur.
      Inventore, doloribus? Test, Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Provident nisi, natus nam iure eos dignissimos vitae
      dolorum corporis atque. Natus pariatur quo animi, dolorem dicta quisquam
      in consequuntur. Inventore, doloribus? Test, Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Provident nisi, natus nam iure eos
      dignissimos vitae dolorum corporis atque. Natus pariatur quo animi,
      dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test, Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi, natus
      nam iure eos dignissimos vitae dolorum corporis atque. Natus pariatur quo
      animi, dolorem dicta quisquam in consequuntur. Inventore, doloribus? Test,
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi,
      natus nam iure eos dignissimos vitae dolorum corporis atque. Natus
      pariatur quo animi, dolorem dicta quisquam in consequuntur. Inventore,
      doloribus? Test, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Provident nisi, natus nam iure eos dignissimos vitae dolorum corporis
      atque. Natus pariatur quo animi, dolorem dicta quisquam in consequuntur.
      Inventore, doloribus? Test, Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Provident nisi, natus nam iure eos dignissimos vitae
      dolorum corporis atque. Natus pariatur quo animi, dolorem dicta quisquam
      in consequuntur. Inventore, doloribus?testtesttesttesttesttest
    </div>
  )
}

export default Home
