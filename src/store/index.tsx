import { create } from "zustand"
import { Employee } from "../types/api"
// import storage from '../utils/storage'

export const useStore = create<{
  token: string
  employeeInfo: Employee.Info
  updateEmployeeInfo: (employeeInfo: Employee.Info) => void
  updateToken: (token: string) => void
}>((set) => ({
  token: "",
  employeeInfo: {
    id: "",
    name: "",
    mobile: "",
    family_employee: 0,
    family_infant: 0,
    family_child: 0,
    family_adult: 0,
    family_elderly: 0,
    group: 0,
    isChecked: false,
    qrCode: "",
    checkedInTime: "",
  },
  updateToken: (token) => set({ token }),
  updateEmployeeInfo: (employeeInfo: Employee.Info) => set({ employeeInfo }),
}))
