import { ethers } from "ethers";
import FoodOrder from "./FoodOrder.json";

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // replace after deploy

// Connect Wallet
export const connectWallet = async() => {
    if (!window.ethereum) {
        alert("Install MetaMask");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    return { provider, account: accounts[0] };
};

// Get Contract Instance
export const getContract = async() => {
    const { provider } = await connectWallet();
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(
        contractAddress,
        FoodOrder.abi,
        signer
    );

    return contract;
};

// Place Order (Blockchain Transaction)
export const placeOrder = async(foodName, priceETH) => {
    try {
        const contract = await getContract();

        const tx = await contract.placeOrder(foodName, {
            value: ethers.parseEther(priceETH.toString()),
        });

        await tx.wait();

        return tx.hash; // transaction hash
    } catch (error) {
        console.error(error);
    }
};