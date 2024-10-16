import { createAppKit } from '@reown/appkit/vue'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const projectId = '5ccf2631f5d86346dd5838b38673200b'

const metadata = {
	name: 'Panda',
	description: 'Panda Tap App',
	url: 'https://panda-tap-app.vercel.app',
	icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const networks = [mainnet, arbitrum]

const wagmiAdapter = new WagmiAdapter({
	ssr: true,
	projectId,
	networks
})

export default defineNuxtPlugin(() => {
	createAppKit({
		adapters: [wagmiAdapter],
		networks: [mainnet, arbitrum],
		metadata,
		projectId,
		features: {
			analytics: true
		}
	})
});
