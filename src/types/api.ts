/**
 * API Interfaces and Types
 */

export interface Result<T = any> {
  access_token: string
  data?: T
}

export namespace Login {
  export interface Params {
    mobile: string
  }
}

export namespace Token {
  export interface Params {
    token: string
  }
}

export namespace Employee { 
  export interface Info {
    id: number
    name: string
    mobile: string
    family_employee: number
    family_infant: number
    family_child: number
    family_adult: number
    family_elderly: number
    group: number
    isChecked: boolean
    qrCode: string
    checkedInTime: string
  }
}

// export namespace Register {
//   export interface Params extends Login.Params {
//     email: string
//     first_name: string
//     last_name: string
//   }
// }

// export namespace User {
//   export interface UserInfo {
//     id: number
//     username: string
//     email: string
//     first_name: string
//     last_name: string
//   }
// }