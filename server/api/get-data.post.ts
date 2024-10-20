export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { API } = useRuntimeConfig().public;
    const { path } = body;

    const response = await $fetch(`${API}${path}`, {
      method: "GET",
    });

    return response;
  } catch (error) {
    return error;
  }
});
