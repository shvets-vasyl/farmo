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
		name: string
		last_name: string
		ava_photo: string | undefined
	};
	days_in_game: number;
}
