import { createAppKit } from "@reown/appkit/vue";
import { arbitrum, mainnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;

  const projectId = config.PROJECT_ID;
  const siteUrl = config.SITE_URL;

  const networks = [mainnet, arbitrum];

  const metadata = {
    name: "Panda",
    description: "Panda Tap App",
    url: siteUrl,
    icons: [`${siteUrl}/tab-main.png`],
  };

  const wagmiAdapter = new WagmiAdapter({
    ssr: true,
    projectId,
    networks,
  });

  createAppKit({
    adapters: [wagmiAdapter],
    networks: [mainnet, arbitrum],
    metadata,
    projectId,
    features: {
      analytics: true,
			email: true,
			socials: ["google"]
    },
  });
});
