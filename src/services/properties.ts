import { newLogger } from "@subsocial/utils";
import networks from "../connections/networks";
import { WithApis } from "./types";
import { getFromAllNetworks } from "../utils";

const log = newLogger('Get properties')

let properties = {}

let lastUpdate = new Date().getTime()
const updateDelay = 3600 * 1000 //seconds

const needUpdate = () => {
  const now = new Date().getTime()

  if (now > (lastUpdate + updateDelay)) {
    log.debug('Update properties')
    lastUpdate = now
    return true
  }

  return false
}

export const getNetworksProperties = async ({ apis }: WithApis) => {
  return getFromAllNetworks(apis, async (api, network) => {
    const props = await api.rpc.system.properties();
    const icon = networks[network].icon;
    return {
      ...props.toJSON(),
      icon,
    };
  }, { cache: properties, needUpdate });
};
