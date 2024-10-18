/* eslint-disable @typescript-eslint/no-explicit-any */

export default defineEventHandler(async () => {
  try {

    const response = await $fetch("http://159.100.9.227:5050/api/users/", {
      method: "GET",
    })

    return {
      status: 200,
      message: "ok",
			data: response,
    }
  } catch (error) {
    return {
      status: 400,
      message: error,
    }
  }
})
