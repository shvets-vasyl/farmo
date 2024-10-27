export interface Store {
  loading: boolean;
  show_block: "profile" | "main" | "friends";
  show_content: boolean;
  progress: {
    percent: number;
  };
  user: {
    profile: UserProfileInterface | null;
    info: UserInfoInterface | null;
    referrals: UserReferralsInterface[] | null;
    wallets: UserWalletsInterface | null;
  };
  game: {
    lvl_info: LvlInfoInterface | null;
  };
}

export interface UserProfileInterface {
  age: number;
  country: string;
  first_name: string;
  is_ban: boolean;
  last_name: string | null;
  phone_number: string;
  region: string;
  user_id: number;
  username: string;
  photo: string | null;
}

export interface UserInfoInterface {
  balance: number;
  clicks_days: number;
  lvl: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | number;
  lvl_name: string;
}

export interface UserReferralsInterface {
  balance: number;
  username: string;
  first_name: string;
  last_name: string | null;
  is_online: boolean;
  user_id: number;
}

export interface UserWalletsInterface {
  ton_wallet_address: string;
	ethereum_wallet_address: string;
}

export interface ApiResponseInterface {
  message?: string;
  status: string;
}

export interface LvlInfoInterface {
  "0": [number, number, string];
  "1": [number, number, string];
  "2": [number, number, string];
  "3": [number, number, string];
  "4": [number, number, string];
  "5": [number, number, string];
  "6": [number, number, string];
  "7": [number, number, string];
  "8": [number, number, string];
}
