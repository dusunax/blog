import { UnwrapPromise } from "next/dist/lib/coalesced-function";
import { getPlaceholderList } from "@/utils/getPlaceholderList";

export type PlaceholderList = UnwrapPromise<
  ReturnType<typeof getPlaceholderList>
>;
