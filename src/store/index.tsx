import { create } from "zustand"
import { Employee } from "../types/api"

export const useStore = create<{
  token: string
  cell: string
  employeeInfo: Employee.Info
  updateEmployeeInfo: (employeeInfo: Employee.Info) => void
  updateToken: (token: string) => void
  updateCell: (cell: string) => void
}>((set) => ({
  token: "",
  cell: "",
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
    is_checked: false,
    qr_code: "",
    checked_in_time: "",
  },
  updateToken: (token) => set({ token }),
  updateCell: (cell) => set({ cell }),
  updateEmployeeInfo: (employeeInfo: Employee.Info) => set({ employeeInfo }),
}))
