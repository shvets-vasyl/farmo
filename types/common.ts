export type DignityNames =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Epic"
  | "Legendary"
  | "Master"
  | "Grandmaster"
  | "Lord"
  | "God";

export type Levels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Store {
	loading: boolean;
	show_block: "profile" | "main" | "friends";
	coins: number;
	coin_levels: number[];
	dignity_names: DignityNames[];
	all_levels: Levels[];
	limit_coins: number;
	progress: {
		percent: number;
		level: Levels;
		dignity: DignityNames;
	};
	user: {
		profile: UserProfileInterface | null
		info: UserInfoInterface | null
	};
	days_in_game: number;
}

export interface UserProfileInterface {
	age: number,
	country: string
	first_name: string
	is_ban: boolean
	last_name: string | null
	phone_number: string
	region: string
	user_id: number
	username: string
	photo: string | null
}

export interface UserInfoInterface {
	balance: number,
	clicks_days: number
	lvl: number
	lvl_name: string
}

