import { api } from "./api";

export interface Server {
  id: string;
  uuid: string;
  name: string;
  description: string;
  status: string;
  node: string;
  memory: number;
  disk: number;
  cpu: number;
}

export const ServerService = {
  getAll() {
    return api<Server[]>("/servers");
  },

  get(id: string) {
    return api<Server>(`/servers/${id}`);
  },

  delete(id: string) {
    return api(`/servers/${id}`, {
      method: "DELETE",
    });
  },
};
