import { RemovalRequestWhereInput } from "./RemovalRequestWhereInput";
import { RemovalRequestOrderByInput } from "./RemovalRequestOrderByInput";

export type RemovalRequestFindManyArgs = {
  where?: RemovalRequestWhereInput;
  orderBy?: Array<RemovalRequestOrderByInput>;
  skip?: number;
  take?: number;
};
