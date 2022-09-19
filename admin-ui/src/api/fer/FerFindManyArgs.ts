import { FerWhereInput } from "./FerWhereInput";
import { FerOrderByInput } from "./FerOrderByInput";

export type FerFindManyArgs = {
  where?: FerWhereInput;
  orderBy?: Array<FerOrderByInput>;
  skip?: number;
  take?: number;
};
