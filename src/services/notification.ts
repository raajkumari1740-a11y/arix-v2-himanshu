export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

class NotificationService {
  private notifications: Notification[] = [];

  add(notification: Notification) {
    this.notifications.push(notification);
  }

  remove(id: number) {
    this.notifications = this.notifications.filter(
      (item) => item.id !== id
    );
  }

  getAll() {
    return this.notifications;
  }

  clear() {
    this.notifications = [];
  }
}

export default new NotificationService();
