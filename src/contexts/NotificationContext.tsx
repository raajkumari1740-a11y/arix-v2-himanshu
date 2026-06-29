import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface Notification {
  id: number;
  title: string;
  message: string;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    notification: Notification
  ) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext =
  createContext<NotificationContextType | undefined>(
    undefined
  );

export function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const addNotification = (
    notification: Notification
  ) => {
    setNotifications((prev) => [
      ...prev,
      notification,
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(
    NotificationContext
  );

  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }

  return context;
}
