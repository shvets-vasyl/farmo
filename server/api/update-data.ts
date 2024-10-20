export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { API } = useRuntimeConfig().public;
    const { path, ...restOfBody } = body;

    const response = await $fetch(`${API}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restOfBody),
    });

    return response;
  } catch (error) {
    return error;
  }
});
