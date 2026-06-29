import websocket from "./websocket";

export const ConsoleService = {
  connect(url: string) {
    return websocket.connect(url);
  },

  send(command: string) {
    websocket.send(command);
  },

  disconnect() {
    websocket.disconnect();
  },
};
