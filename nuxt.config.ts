// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      title: "Panda Tap",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
			link: [{ rel: "icon", type: "image/png", href: "/tab-main.png" }],
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
    },
  },

	imports: {
    dirs: ["store"],
  },
	devServer: {
		port: 3333,
	},

	runtimeConfig: {
    public: {
			API: process.env.API,
      SITE_URL: process.env.SITE_URL,
			PROJECT_ID: process.env.PROJECT_ID,
    },
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
