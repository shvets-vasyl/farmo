// services/web3Service.ts
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export const connectWallet = async () => {
  try {
    // Створення WalletConnect провайдера
    const provider = new WalletConnectProvider({
      infuraId: "9a748cf7c1f941aea2894a11036fcb33", // Замість цього вкажіть свій Infura ID
    });

		console.log(provider);


    // Підключення до провайдера
    // await provider.enable();

    // // Створення інстансу Web3 з провайдером
    // const web3 = new Web3(provider);

    // // Отримання акаунтів користувача
    // const accounts = await web3.eth.getAccounts();

    // console.log("Connected accounts:", accounts);

    return true;
  } catch (error) {
    console.error("Error connecting wallet:", error);
    return null;
  }
};
