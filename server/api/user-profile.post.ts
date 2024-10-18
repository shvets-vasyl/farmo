/* eslint-disable @typescript-eslint/no-explicit-any */

export default defineEventHandler(async (event) => {
  try {

		const body = await readBody(event)

		const { API } = useRuntimeConfig().public

    const response = await $fetch(`${API}/api/users/info/${body.id}`, {
      method: "GET",
    })

    return response
  } catch (error) {
    return error
  }
})
