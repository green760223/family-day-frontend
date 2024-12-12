import { useEffect, useState } from "react"
import { Employee } from "../../types/api"
import api from "../../api"
import { useStore } from "../../store"
import { Card, Space } from "antd-mobile"
import styles from "../team/Team.module.less"
import storage from "../../utils/storage"
import { useNavigate } from "react-router-dom"
import res from "antd-mobile-icons/es/AaOutline"

const Team = () => {
  const navigate = useNavigate()
  const [teamMembers, setTeamMembers] = useState<Employee.Info[]>([])
  const { employeeInfo, updateEmployeeInfo, updateCell, updateTeam } =
    useStore()

  useEffect(() => {
    checkEmployeeAuth()
  }, [])

  // const checkEmployeeAuth = async () => {
  //   const token = storage.get("token")
  //   const group = storage.getGroup()

  //   if (token && group) {
  //     const response = await getGroupList()
  //     storage.setGroup()
  //   } else {
  //     navigate("/")
  //   }
  // }

  const checkEmployeeAuth = async () => {
    const token = storage.get("token")

    if (token) {
      await getEmployeeData()
    } else {
      console.log("Token does not exist. Redirecting to login page.")
      navigate("/") // 如果 token 不存在，導航到登入頁
    }
  }

  const getEmployeeData = async () => {
    const res: Employee.Info = await api.getEmployeeInfo(storage.getMobile())
    updateEmployeeInfo(res)
    updateCell(res.mobile)
    updateTeam(res.group)
    storage.setGroup(res.group)
    storage.setMobile(res.mobile)

    await getGroupList()

    console.log("Employee Info:", res)
  }

  const getGroupList = async () => {
    try {
      const group = storage.getGroup()
      const res = await api.getGroupList(group)
      if (res.length > 0) setTeamMembers(res)
    } catch (error) {
      console.log(error)
    }

    return res
  }

  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.card}
        title={
          <div className={styles.titleWrapper}>
            <span className={styles.title}>
              您的組別 - 第{" "}
              <span style={{ fontSize: "38px" }}>{employeeInfo.group}</span> 組
            </span>
          </div>
        }
        style={{ "--adm-card-header-border-width": "0px" } as any}>
        <div className={styles.content}>
          <div className={styles.particiapantsMember}>
            <span style={{ marginBottom: "20px" }}>組別成員</span>
            <Space direction='vertical' style={{ width: "100%" }}>
              {teamMembers.map((item, _index) => (
                <div
                  key={item.id}
                  className={styles.particiapants}
                  style={{ marginTop: "5px" }}>
                  <div className={styles.categoryItem}>{item.company}</div>
                  <div className={styles.categoryItem}>{item.department}</div>
                  <div className={styles.categoryItem}>{item.name}</div>
                </div>
              ))}
            </Space>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Team
