// import { useState } from "react"
import { useStore } from "../../store"
import { Card, Grid, Space } from "antd-mobile"
import styles from "../team/Team.module.less"

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "黃子軒",
      company: "勁豐",
      department: "董事長室",
    },
    {
      id: 2,
      name: "何嘉欣",
      company: "勁豐",
      department: "行政部",
    },
    {
      id: 3,
      name: "林佳慧",
      company: "勁豐",
      department: "董事長室",
    },
    {
      id: 4,
      name: "吳思涵",
      company: "豐藝",
      department: "行政部",
    },
    {
      id: 5,
      name: "鄭曉華",
      company: "豐藝",
      department: "財務部",
    },
    {
      id: 6,
      name: "徐安安",
      company: "勁豐",
      department: "董事長室",
    },
    {
      id: 7,
      name: "趙雅芝",
      company: "勁豐",
      department: "研發部",
    },
    {
      id: 8,
      name: "張偉",
      company: "豐藝",
      department: "研發部",
    },
    {
      id: 9,
      name: "朱美玲",
      company: "勁豐",
      department: "業務部",
    },
    {
      id: 10,
      name: "周明哲",
      company: "勁豐",
      department: "研發部",
    },
    {
      id: 11,
      name: "吳思涵",
      company: "勁豐",
      department: "研發部",
    },
    {
      id: 12,
      name: "李大華",
      company: "豐藝",
      department: "研發部",
    },
    {
      id: 13,
      name: "朱美玲",
      company: "豐藝",
      department: "研發部",
    },
    {
      id: 14,
      name: "徐安安",
      company: "豐藝",
      department: "研發部",
    },
    {
      id: 15,
      name: "王小明",
      company: "勁豐",
      department: "財務部",
    },
  ]

  const employeeInfo = useStore((state) => state.employeeInfo)

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
            <Space direction='vertical'>
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
