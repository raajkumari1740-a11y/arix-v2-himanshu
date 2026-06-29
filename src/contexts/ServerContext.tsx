import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface Server {
  id: string;
  name: string;
  status: string;
}

interface ServerContextType {
  servers: Server[];
  setServers: (servers: Server[]) => void;
}

const ServerContext = createContext<ServerContextType | undefined>(
  undefined
);

export function ServerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [servers, setServers] = useState<Server[]>([]);

  return (
    <ServerContext.Provider
      value={{
        servers,
        setServers,
      }}
    >
      {children}
    >
      {children}
    </ServerContext.Provider>
  );
}

export function useServer() {
  const context = useContext(ServerContext);

  if (!context) {
    throw new Error("useServer must be used inside ServerProvider");
  }

  return context;
}
