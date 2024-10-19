import type { Store } from "@/types/common";

export const store = reactive<Store>({
	loading: true,
	show_block: "main",
  coin_levels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  all_levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  dignity_names: [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Epic",
    "Legendary",
    "Master",
    "Grandmaster",
    "Lord",
    "God",
  ],
  progress: {
    percent: 0,
    level: 0,
    dignity: "Bronze",
  },
	user: {
		profile: null,
		info: null,
		referrals: null,
	},
  days_in_game: 2,
});
