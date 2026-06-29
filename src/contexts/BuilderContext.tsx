import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface BuilderContextType {
  selectedWidget: string | null;
  setSelectedWidget: (
    widget: string | null
  ) => void;
}

const BuilderContext =
  createContext<BuilderContextType | undefined>(
    undefined
  );

export function BuilderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedWidget, setSelectedWidget] =
    useState<string | null>(null);

  return (
    <BuilderContext.Provider
      value={{
        selectedWidget,
        setSelectedWidget,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);

  if (!context) {
    throw new Error(
      "useBuilder must be used inside BuilderProvider"
    );
  }

  return context;
}
