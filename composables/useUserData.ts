import { store } from "@/store";
import type {
  UserProfileInterface,
  UserInfoInterface,
  UserReferralsInterface,
  LvlInfoInterface,
	UserWalletsInterface,
	UserCardInterface,
} from "@/types/common";
import { paths } from "@/utils/api/paths";
import { getPhoto } from "@/utils/getPhoto"

export const useUserData = () => {
  let userId = localStorage.getItem("userId");

  if (!userId && window.Telegram) {
    const id = window.Telegram.WebApp.initDataUnsafe.user.id
    // const id = "992580016";

    localStorage.setItem("userId", id);
    userId = id;
  }

  const fetchUserProfile = async () => {
    const data = await $fetch<UserProfileInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.profile + "/" + userId }),
    });
    store.user.profile = data;
		store.user.profile.photo = getPhoto(userId as string)
    return data;
  };

  const fetchUserInfo = async () => {
    const data = await $fetch<UserInfoInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.game_info + "/" + userId }),
    });
    store.user.info = data;
    return data;
  };

	const fetchUserPhoto = async () => {
    const data = await $fetch<UserInfoInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.user_photo + "/" + userId }),
    });
    store.user.info = data;
    return data;
  };

  const fetchUserReferrals = async () => {
    const data = await $fetch<UserReferralsInterface[]>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.referrals + "/" + userId }),
    });
    store.user.referrals = data;
    return data;
  };

	const fetchUserWallets = async () => {
    const data = await $fetch<UserWalletsInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.get_wallets + "/" + userId }),
    });
    store.user.wallets = data;
    return data;
  };

	const fetchUserCard = async () => {
    const data = await $fetch<UserCardInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.get_card + "/" + userId }),
    });
    store.user.card = data;
    return data;
  };

  const fetchGameLvlInfo = async () => {
    const data = await $fetch<LvlInfoInterface>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.lvl_info }),
    });
    store.game.lvl_info = data;
    return data;
  };

  const refreshData = async (
    options: {
      profile?: boolean;
      info?: boolean;
      photo?: boolean;
      card?: boolean;
      referrals?: boolean;
      wallets?: boolean;
      lvlInfo?: boolean;
    } = {}
  ) => {
    if (options.profile) {
      await fetchUserProfile();
    }
    if (options.info) {
      await fetchUserInfo();
    }
		if (options.photo) {
      await fetchUserInfo();
    }
    if (options.referrals) {
      await fetchUserReferrals();
    }
    if (options.lvlInfo) {
      await fetchGameLvlInfo();
    }
		if (options.wallets) {
			await fetchUserWallets()
		}
		if (options.card) {
			await fetchUserCard()
		}
  };

  return {
    fetchUserProfile,
    fetchUserInfo,
    fetchUserPhoto,
    fetchUserReferrals,
    fetchGameLvlInfo,
		fetchUserCard,
    refreshData,
  };
};
