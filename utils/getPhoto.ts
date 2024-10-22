import { paths } from "@/utils/api/paths";

export const getPhoto = (id: string | number) => {
	const { API } = useRuntimeConfig().public;

	return `${API + paths.user_photo}/${id}`
}