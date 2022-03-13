export interface UserConfig {
    calendarID: string
    message: NotificationMessage
    country: string
    notification: string
}

export interface NotificationMessage {
    sender: string
    content: string
}