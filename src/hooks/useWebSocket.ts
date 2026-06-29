import { useEffect, useRef, useState } from "react";

export function useWebSocket(url: string) {
  const socket = useRef<WebSocket | null>(null);

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.current = new WebSocket(url);

    socket.current.onopen = () => setConnected(true);

    socket.current.onclose = () => setConnected(false);

    socket.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => socket.current?.close();
  }, [url]);

  const send = (message: string) => {
    socket.current?.send(message);
  };

  return {
    connected,
    messages,
    send,
  };
}
