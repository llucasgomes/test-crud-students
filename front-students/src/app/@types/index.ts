export interface Student {
  id?: string
  name: string
  email: string
  course: string
  createdAt?: Date
  updatedAt?: Date
}

export enum ToasterPosition {
  TOP_LEFT = 'toaster-top-left',
  TOP_CENTER = 'toaster-top-center',
  TOP_RIGHT = 'toaster-top-right',
  BOTTOM_LEFT = 'toaster-bottom-left',
  BOTTOM_CENTER = 'toaster-bottom-center',
  BOTTOM_RIGHT = 'toaster-bottom-right'
}
