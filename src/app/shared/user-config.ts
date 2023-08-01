export interface UserConfig {
    calendarID: string
    message: NotificationMessage
    country: string
    advance: string
}

export interface NotificationMessage {
    sender: string
    content: string
}