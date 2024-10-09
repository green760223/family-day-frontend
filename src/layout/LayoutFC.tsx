import { Layout } from "antd"
import NavFooter from "../components/NavFooter/NavFooter"
import { Outlet } from "react-router-dom"

const LayoutFC = () => {
  const { Header, Content } = Layout

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  }

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  }

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(50% - 8px)",
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <NavFooter />
    </Layout>
  )
}

export default LayoutFC
