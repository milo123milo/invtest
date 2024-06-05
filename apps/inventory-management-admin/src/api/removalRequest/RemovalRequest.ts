export type RemovalRequest = {
  createdAt: Date;
  deleteField: Date | null;
  id: string;
  item: string | null;
  requestedBy: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
