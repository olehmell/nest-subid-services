import { Networks } from "./types";
import { registryTypes as subsocialTypes } from "@subsocial/types";

export const subsocial = {
  node: "wss://rpc.subsocial.network",
  ipfs: "https://app.subsocial.network/ipfs",
  offchain: "https://app.subsocial.network/offchain",
  icon: "subsocial.svg",
  types: subsocialTypes,
};

export const networks: Networks = {
  subsocial,
  kusama: {
    node: "wss://kusama-rpc.polkadot.io",
    icon: "kusama.svg",
  },
  polkadot: {
    node: "wss://rpc.polkadot.io",
    icon: "polkadot.svg",
  },
  // 'altair': {
  //   'node': 'wss://fullnode.altair.centrifuge.io',
  //   'paraId': 2021
  // },
  bifrost: {
    node: "wss://bifrost-rpc.liebi.com/ws",
    icon: "bifrost.svg",
    paraId: 2001,
  },
  // 'shadow': {
  //   'node': 'wss://shadow.crust.network/',
  //   'paraId': 2012
  // },
  // 'crab_redirect': {
  //   'node': 'wss://crab-redirect-rpc.darwinia.network/',
  //   'paraId': 2006
  // },
  // 'encointer_canary': {
  //   'node': 'wss://canary.encointer.org',
  //   'paraId': 2014
  // },
  // 'genshiro': {
  //   'node': 'wss://gens-mainnet.equilibrium.io',
  //   'paraId': 2024
  // },
  // 'integritee': {
  //   'node': 'wss://mainnet.integritee.network',
  //   'paraId': 2015
  // },
  karura: {
    node: "wss://karura-rpc-0.aca-api.network",
    icon: "karura.svg",
    paraId: 2000,
  },
  // 'khala': {
  //   'node': 'wss://khala.phala.network/ws',
  //   'paraId': 2004
  // },
  // 'kilt': {
  //   'node': 'wss://spiritnet.kilt.io/',
  //   'paraId': 2005
  // },
  // 'mars': {
  //   'node': 'wss://wss.mars.aresprotocol.io',
  //   'paraId': 2008
  // },
  moonriver: {
    node: "wss://wss.moonriver.moonbeam.network",
    icon: "moonriver.svg",
    paraId: 2023,
  },
  // 'polkasmith': {
  //   'node': 'wss://wss-polkasmith.polkafoundry.com',
  //   'paraId': 2009
  // },
  // 'sakura': {
  //   'node': 'wss://api-sakura.clover.finance',
  //   'paraId': 2016
  // },
  // 'sherpax': {
  //   'node': 'wss://sherpax.chainx.org',
  //   'paraId': 2013
  // },
  shiden: {
    node: "wss://rpc.shiden.plasmnet.io",
    icon: "shiden.png",
    paraId: 2007,
  },
  // 'subgame': {
  //   'node': 'wss://gamma.subgame.org/',
  //   'paraId': 2018
  // }
};

export default networks;
