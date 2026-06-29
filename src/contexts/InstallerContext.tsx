import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface InstallerContextType {
  installing: boolean;
  progress: number;
  setInstalling: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const InstallerContext = createContext<
  InstallerContextType | undefined
>(undefined);

export function InstallerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [installing, setInstalling] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <InstallerContext.Provider
      value={{
        installing,
        progress,
        setInstalling,
        setProgress,
      }}
    >
      {children}
    </InstallerContext.Provider>
  );
}

export function useInstaller() {
  const context = useContext(InstallerContext);

  if (!context) {
    throw new Error(
      "useInstaller must be used inside InstallerProvider"
    );
  }

  return context;
}
