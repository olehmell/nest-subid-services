import { Apis, SupportedNetworks } from "../connections/networks/types";

export type WithApis = {
  apis: Apis
}

export type NetworksData = Record<SupportedNetworks, any>