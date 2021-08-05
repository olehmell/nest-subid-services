import { resolveSubsocialApi } from "../connections";
import { NetworksData, WithApis } from "./types";
import { runQueryOrUndefined, fieldsToString } from "../utils";
import { Registration } from "@polkadot/types/interfaces";
import { Data } from "@polkadot/types/primitive";
import { hexToString } from "@polkadot/util";
import { ApiPromise } from "../connections/networks/types";

type GetIdentitiesProps = WithApis & {
  account: string;
};

const parseIdentity = (identity?: Registration) => {
  if (!identity) return undefined;

  const {
    info: { additional, pgpFingerprint, ...fields },
    deposit,
  } = identity;

  return {
    ...identity,
    deposit: deposit?.toString(),
    info: {
      additional,
      pgpFingerprint,
      ...fieldsToString(fields, (data?: Data) =>
        data?.isRaw ? hexToString(data.asRaw.toString()) : undefined
      ),
    },
  };
};

const getIdentity = async (api: ApiPromise, account: string) => {
  const identityOpt = await api.query.identity.identityOf(account)
  return parseIdentity(identityOpt.unwrapOr(undefined))
}

export const getIdentities = async ({
  apis: { kusama, polkadot },
  account,
}: GetIdentitiesProps) => {
  const identities = {} as NetworksData;

  const subsocial = await resolveSubsocialApi();

  const [ kusamaIdentity, polkadotIdentity, subsocialIdentity ] = await Promise.all([
    runQueryOrUndefined(kusama, async api => getIdentity(api, account)),
    runQueryOrUndefined(polkadot, async api => getIdentity(api, account)),
    runQueryOrUndefined(subsocial, api => api.findProfile(account))
  ])

  identities["kusama"] = kusamaIdentity
  identities["polkadot"] = polkadotIdentity
  identities["subsocial"] = subsocialIdentity

  return identities;
};
