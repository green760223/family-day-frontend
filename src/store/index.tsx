import { create } from "zustand"
import { Employee } from "../types/api"

export const useStore = create<{
  token: string
  cell: string
  team: string
  employeeInfo: Employee.Info
  updateEmployeeInfo: (employeeInfo: Employee.Info) => void
  updateToken: (token: string) => void
  updateCell: (cell: string) => void
  updateTeam: (team: string) => void
}>((set) => ({
  token: "",
  cell: "",
  team: "",
  employeeInfo: {
    id: "",
    name: "",
    mobile: "",
    department: "",
    company: "",
    family_employee: 0,
    family_infant: 0,
    family_child: 0,
    family_adult: 0,
    family_elderly: 0,
    group: "",
    is_checked: false,
    checked_in_time: "",
  },
  updateTeam: (team) => set({ team }),
  updateToken: (token) => set({ token }),
  updateCell: (cell) => set({ cell }),
  updateEmployeeInfo: (employeeInfo: Employee.Info) => set({ employeeInfo }),
}))
