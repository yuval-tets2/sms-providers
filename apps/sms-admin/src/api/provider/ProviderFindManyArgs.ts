import { ProviderWhereInput } from "./ProviderWhereInput";
import { ProviderOrderByInput } from "./ProviderOrderByInput";

export type ProviderFindManyArgs = {
  where?: ProviderWhereInput;
  orderBy?: Array<ProviderOrderByInput>;
  skip?: number;
  take?: number;
};
