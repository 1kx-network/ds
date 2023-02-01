/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface Dungeon3MinterInterface extends utils.Interface {
  functions: {
    "_bestRaiderLastIdsByRank(uint256)": FunctionFragment;
    "_bestRaiderRelicNextIdsByRank(uint256)": FunctionFragment;
    "_claims(uint256)": FunctionFragment;
    "_imageBaseURL()": FunctionFragment;
    "_isXpRewardsEnabled()": FunctionFragment;
    "_relayAddresses(address)": FunctionFragment;
    "_riftAddress()": FunctionFragment;
    "_runnerUpRelicLastIdsByRank(uint256)": FunctionFragment;
    "_runnerUpRelicNextIdsByRank(uint256)": FunctionFragment;
    "claimReward(uint8,uint8,uint64,uint8,uint8,bytes)": FunctionFragment;
    "claimRewards(uint8[],uint8[],uint64[],uint8[],uint8[],bytes[])": FunctionFragment;
    "enableXpRewards(bool)": FunctionFragment;
    "getAdditionalAttributes(uint256,bytes12)": FunctionFragment;
    "getImageBaseURL()": FunctionFragment;
    "getRaidDungeonRequest(uint256,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "getRaidId(uint256,uint8)": FunctionFragment;
    "getTokenOrderIndex(uint256,bytes12)": FunctionFragment;
    "getTokenProvenance(uint256,bytes12)": FunctionFragment;
    "isClaimed(uint8,uint256)": FunctionFragment;
    "isOwnerOf(uint256,uint256,address)": FunctionFragment;
    "isVerifiedClaimRequest(uint256,uint256,uint256,uint8,uint8,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setImageBaseURL(string)": FunctionFragment;
    "setRelayAddress(address,bool)": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_bestRaiderLastIdsByRank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_bestRaiderRelicNextIdsByRank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_claims",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_imageBaseURL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_isXpRewardsEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_relayAddresses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_riftAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_runnerUpRelicLastIdsByRank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_runnerUpRelicNextIdsByRank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "enableXpRewards",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getAdditionalAttributes",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getImageBaseURL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRaidDungeonRequest",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaidId",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenOrderIndex",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenProvenance",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwnerOf",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isVerifiedClaimRequest",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setImageBaseURL",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRelayAddress",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_bestRaiderLastIdsByRank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_bestRaiderRelicNextIdsByRank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_claims", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_imageBaseURL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_isXpRewardsEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_relayAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_riftAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_runnerUpRelicLastIdsByRank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_runnerUpRelicNextIdsByRank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableXpRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAdditionalAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImageBaseURL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaidDungeonRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRaidId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenOrderIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenProvenance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwnerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isVerifiedClaimRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setImageBaseURL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRelayAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface Dungeon3Minter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Dungeon3MinterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _bestRaiderLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _bestRaiderRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _claims(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    _imageBaseURL(overrides?: CallOverrides): Promise<[string]>;

    _isXpRewardsEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    _relayAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _riftAddress(overrides?: CallOverrides): Promise<[string]>;

    _runnerUpRelicLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _runnerUpRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimReward(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      dungeonIds: BigNumberish[],
      dungeonRanks: BigNumberish[],
      raidTokenIds: BigNumberish[],
      raidTokenTypes: BigNumberish[],
      raidRanks: BigNumberish[],
      claimCoupons: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableXpRewards(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAdditionalAttributes(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getImageBaseURL(overrides?: CallOverrides): Promise<[string]>;

    getRaidDungeonRequest(
      dungeonId: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber[], string, string] & {
        isOwner: boolean;
        itemIds: BigNumber[];
        order: string;
        signer: string;
      }
    >;

    getRaidId(
      tokenId: BigNumberish,
      raiderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenOrderIndex(
      arg0: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenProvenance(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isClaimed(
      raidTokenType: BigNumberish,
      raidTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwnerOf(
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isVerifiedClaimRequest(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setImageBaseURL(
      newImageBaseURL: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRelayAddress(
      relayAddress: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _bestRaiderLastIdsByRank(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _bestRaiderRelicNextIdsByRank(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _claims(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  _imageBaseURL(overrides?: CallOverrides): Promise<string>;

  _isXpRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;

  _relayAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _riftAddress(overrides?: CallOverrides): Promise<string>;

  _runnerUpRelicLastIdsByRank(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _runnerUpRelicNextIdsByRank(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimReward(
    dungeonId: BigNumberish,
    dungeonRank: BigNumberish,
    raidTokenId: BigNumberish,
    raidTokenType: BigNumberish,
    raidRank: BigNumberish,
    claimCoupon: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    dungeonIds: BigNumberish[],
    dungeonRanks: BigNumberish[],
    raidTokenIds: BigNumberish[],
    raidTokenTypes: BigNumberish[],
    raidRanks: BigNumberish[],
    claimCoupons: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableXpRewards(
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAdditionalAttributes(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getImageBaseURL(overrides?: CallOverrides): Promise<string>;

  getRaidDungeonRequest(
    dungeonId: BigNumberish,
    raidTokenId: BigNumberish,
    raidTokenType: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber[], string, string] & {
      isOwner: boolean;
      itemIds: BigNumber[];
      order: string;
      signer: string;
    }
  >;

  getRaidId(
    tokenId: BigNumberish,
    raiderType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenOrderIndex(
    arg0: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenProvenance(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  isClaimed(
    raidTokenType: BigNumberish,
    raidTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwnerOf(
    raidTokenId: BigNumberish,
    raidTokenType: BigNumberish,
    addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isVerifiedClaimRequest(
    dungeonId: BigNumberish,
    dungeonRank: BigNumberish,
    raidTokenId: BigNumberish,
    raidTokenType: BigNumberish,
    raidRank: BigNumberish,
    claimCoupon: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setImageBaseURL(
    newImageBaseURL: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRelayAddress(
    relayAddress: string,
    active: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  splitSignature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _bestRaiderLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _bestRaiderRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _claims(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    _imageBaseURL(overrides?: CallOverrides): Promise<string>;

    _isXpRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;

    _relayAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _riftAddress(overrides?: CallOverrides): Promise<string>;

    _runnerUpRelicLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _runnerUpRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(
      dungeonIds: BigNumberish[],
      dungeonRanks: BigNumberish[],
      raidTokenIds: BigNumberish[],
      raidTokenTypes: BigNumberish[],
      raidRanks: BigNumberish[],
      claimCoupons: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    enableXpRewards(enabled: boolean, overrides?: CallOverrides): Promise<void>;

    getAdditionalAttributes(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getImageBaseURL(overrides?: CallOverrides): Promise<string>;

    getRaidDungeonRequest(
      dungeonId: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber[], string, string] & {
        isOwner: boolean;
        itemIds: BigNumber[];
        order: string;
        signer: string;
      }
    >;

    getRaidId(
      tokenId: BigNumberish,
      raiderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenOrderIndex(
      arg0: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenProvenance(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isClaimed(
      raidTokenType: BigNumberish,
      raidTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwnerOf(
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isVerifiedClaimRequest(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setImageBaseURL(
      newImageBaseURL: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRelayAddress(
      relayAddress: string,
      active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _bestRaiderLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _bestRaiderRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _claims(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    _imageBaseURL(overrides?: CallOverrides): Promise<BigNumber>;

    _isXpRewardsEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    _relayAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _riftAddress(overrides?: CallOverrides): Promise<BigNumber>;

    _runnerUpRelicLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _runnerUpRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      dungeonIds: BigNumberish[],
      dungeonRanks: BigNumberish[],
      raidTokenIds: BigNumberish[],
      raidTokenTypes: BigNumberish[],
      raidRanks: BigNumberish[],
      claimCoupons: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableXpRewards(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAdditionalAttributes(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImageBaseURL(overrides?: CallOverrides): Promise<BigNumber>;

    getRaidDungeonRequest(
      dungeonId: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaidId(
      tokenId: BigNumberish,
      raiderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenOrderIndex(
      arg0: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenProvenance(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimed(
      raidTokenType: BigNumberish,
      raidTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwnerOf(
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isVerifiedClaimRequest(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setImageBaseURL(
      newImageBaseURL: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRelayAddress(
      relayAddress: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _bestRaiderLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _bestRaiderRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _claims(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _imageBaseURL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _isXpRewardsEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _relayAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _riftAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _runnerUpRelicLastIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _runnerUpRelicNextIdsByRank(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      dungeonIds: BigNumberish[],
      dungeonRanks: BigNumberish[],
      raidTokenIds: BigNumberish[],
      raidTokenTypes: BigNumberish[],
      raidRanks: BigNumberish[],
      claimCoupons: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableXpRewards(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAdditionalAttributes(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImageBaseURL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRaidDungeonRequest(
      dungeonId: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaidId(
      tokenId: BigNumberish,
      raiderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenOrderIndex(
      arg0: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenProvenance(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimed(
      raidTokenType: BigNumberish,
      raidTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwnerOf(
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isVerifiedClaimRequest(
      dungeonId: BigNumberish,
      dungeonRank: BigNumberish,
      raidTokenId: BigNumberish,
      raidTokenType: BigNumberish,
      raidRank: BigNumberish,
      claimCoupon: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setImageBaseURL(
      newImageBaseURL: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRelayAddress(
      relayAddress: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}