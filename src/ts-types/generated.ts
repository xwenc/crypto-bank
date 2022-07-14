export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  Upload: any;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
};
export declare type UserChain = {
  id: Scalars["ID"];
  community_id: Scalars["Int"];
  name: Scalars["String"];
  native_token_id: Scalars["String"];
  logo_url: Scalars["String"];
  wrapped_token_id: Scalars["String"];
  usd_value: Scalars["Int"];
};

export declare type UserSimpleProtocol = {
  id: Scalars["ID"];
  chain: Scalars["String"];
  name: Scalars["String"];
  logo_url: Scalars["String"];
  site_url: Scalars["String"];
  has_supported_portfolio: Scalars["Boolean"];
  net_usd_value: Scalars["Float"];
  asset_usd_value: Scalars["Float"];
  debt_usd_value: Scalars["Float"];
};

export declare type UserComplexProtocol = {
  id: Scalars["ID"];
  chain: Scalars["String"];
  name: Scalars["String"];
  logo_url: Scalars["String"];
  site_url: Scalars["String"];
  has_supported_portfolio: Scalars["Boolean"];
  tvl: Scalars["Float"];
  portfolio_item_list: ProtocolPortfolioItem[];
};

export declare type UserToken = {
  id: Scalars["ID"];
  chain: Scalars["String"];
  name: Scalars["String"];
  symbol: Scalars["String"];
  display_symbol: Scalars["String"];
  optimized_symbol: Scalars["String"];
  decimals: Scalars["Int"];
  logo_url: Scalars["String"];
  is_verified: Scalars["Boolean"];
  is_core: Scalars["Boolean"];
  price: Scalars["Float"];
  time_at: Scalars["Float"];
  amount: Scalars["Float"];
  raw_amount: Scalars["Int"];
};

export declare type ProtocolPortfolioItem = {
  stats: ProtocolStats;
  update_at: Scalars["Float"];
  name: ProtocolPortfolioName;
  detail_types: string[];
  detail: ProtocolPortfolioItemDetail;
  proxy_detail?: ProxyDetailProject;
};

export declare type ProtocolPortfolioItemDetail = {
  usd_value?: Scalars["Float"];
  expired_at?: Scalars["Float"];
  health_rate?: Scalars["String"];
  description?: Scalars["String"];
  supply_token_list?: ProtocolToken[];
  borrow_token_list?: ProtocolToken[];
  reward_token_list?: ProtocolToken[];
  collateral_token_list?: ProtocolToken[];
  token?: ProtocolToken;
  token_list?: ProtocolToken[];
  unlock_at?: Scalars["Float"];
  end_at?: Scalars["Float"];
  debt_ratio?: Scalars["Float"];
};

export declare type ProtocolToken = {
  id: Scalars["ID"];
  chain: Scalars["String"];
  name: Scalars["String"];
  symbol: Scalars["String"];
  display_symbol: Scalars["String"];
  optimized_symbol: Scalars["String"];
  decimals: Scalars["Int"];
  logo_url: Scalars["String"];
  protocol_id: Scalars["String"];
  is_verified: Scalars["Boolean"];
  is_core: Scalars["Boolean"];
  is_wallet: Scalars["String"];
  price: Scalars["Float"];
  time_at: Scalars["Float"];
  amount: Scalars["Float"];
  category?: Scalars["String"];
};

export declare type ProxyDetailProject = {
  id: Scalars["ID"];
  name: Scalars["String"];
  site_url: Scalars["String"];
  logo_url: Scalars["String"];
};

export declare type ProtocolStats = {
  asset_usd_value: Scalars["Float"];
  debt_usd_value: Scalars["Float"];
  net_usd_value: Scalars["Float"];
};

export enum ProtocolPortfolioName {
  Deposit = "Deposit",
  Farming = "Farming",
  Governance = "Governance",
  InsuranceBuyer = "Insurance Buyer",
  InsuranceSeller = "Insurance Seller",
  Lending = "Lending",
  LeveragedFarming = "Leveraged Farming",
  LiquidityPool = "Liquidity Pool",
  Locked = "Locked",
  Rewards = "Rewards",
  Staked = "Staked",
  Yield = "Yield",
  Vesting = "Vesting",
}
