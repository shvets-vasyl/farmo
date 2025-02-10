// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
  typescript: {
    shim: false,
  },

  css: ["@/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/utils";',
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      title: "Farmoooo",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
				{
					"http-equiv": "Content-Security-Policy",
					content: "upgrade-insecure-requests",
				},
      ],
			link: [{ rel: "icon", type: "image/png", href: "/item.png" }],
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
    },
  },

	imports: {
    dirs: ["store"],
  },
	devServer: {
		port: 3333,
	},

  compatibilityDate: "2024-04-03",
});
