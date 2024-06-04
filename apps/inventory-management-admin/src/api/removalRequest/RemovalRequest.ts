export type RemovalRequest = {
  createdAt: Date;
  id: string;
  item: string | null;
  requestedBy: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
