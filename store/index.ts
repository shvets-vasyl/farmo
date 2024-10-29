import type { Store } from "@/types/common";

export const store = reactive<Store>({
  loading: true,
  show_content: false,
  show_block: "main",
  progress: {
    percent: 0,
  },
  user: {
    profile: null,
    info: null,
    referrals: null,
		wallets: null,
		card: null,
  },
  game: {
    lvl_info: null,
  },
});
