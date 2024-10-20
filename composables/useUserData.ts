import { store } from "@/store";
import type {
  UserProfileInterface,
  UserInfoInterface,
  UserReferralsInterface,
  LvlInfoInterface,
} from "@/types/common";
import { paths } from "@/utils/api/paths";

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

  const fetchUserReferrals = async () => {
    const data = await $fetch<UserReferralsInterface[]>("/api/get-data", {
      method: "POST",
      body: JSON.stringify({ path: paths.referrals + "/" + userId }),
    });
    store.user.referrals = data;
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
      referrals?: boolean;
      lvlInfo?: boolean;
    } = {}
  ) => {
    if (options.profile) {
      await fetchUserProfile();
    }
    if (options.info) {
      await fetchUserInfo();
    }
    if (options.referrals) {
      await fetchUserReferrals();
    }
    if (options.lvlInfo) {
      await fetchGameLvlInfo();
    }
  };

  return {
    fetchUserProfile,
    fetchUserInfo,
    fetchUserReferrals,
    fetchGameLvlInfo,
    refreshData,
  };
};
