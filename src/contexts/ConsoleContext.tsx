import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ConsoleContextType {
  logs: string[];
  addLog: (log: string) => void;
  clearLogs: () => void;
}

const ConsoleContext = createContext<ConsoleContextType | undefined>(undefined);

export function ConsoleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (log: string) => {
    setLogs((prev) => [...prev, log]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <ConsoleContext.Provider
      value={{ logs, addLog, clearLogs }}
    >
      {children}
    </ConsoleContext.Provider>
  );
}

export function useConsole() {
  const context = useContext(ConsoleContext);

  if (!context) {
    throw new Error(
      "useConsole must be used inside ConsoleProvider"
    );
  }

  return context;
}
