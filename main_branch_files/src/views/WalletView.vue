<template>
  <div>
    <h1>Wallet Page</h1>
    <div v-if="connected">
      <p>Connected Wallet: {{ walletAddress }} ({{ walletType }})</p>
      <button @click="disconnectWallet">Disconnect</button>
    </div>
    <div v-else>
      <button @click="connectSolanaWallet">Connect Solana Wallet (Phantom)</button>
      <button @click="connectMetaMask">Connect MetaMask</button>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  data() {
    return {
      connected: false,
      walletAddress: "",
      walletType: "", // Tracks whether wallet is Solana or MetaMask
    };
  },
  methods: {
    // Connect to Solana Wallet (e.g., Phantom)
    async connectSolanaWallet() {
      if (window.solana && window.solana.isPhantom) {
        try {
          await window.solana.connect();
          const publicKey = window.solana.publicKey.toString();
          this.walletAddress = publicKey;
          this.walletType = "Solana";
          this.connected = true;

          // Monitor wallet account change
          window.solana.on("connect", (publicKey) => {
            this.walletAddress = publicKey.toString();
          });

          // Monitor wallet disconnect
          window.solana.on("disconnect", () => {
            this.disconnectWallet();
          });

        } catch (error) {
          console.error("Failed to connect to Solana wallet:", error);
        }
      } else {
        alert("Solana wallet (e.g., Phantom) is not installed.");
      }
    },

    // Connect to MetaMask
    async connectMetaMask() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          this.walletAddress = address;
          this.walletType = "MetaMask";
          this.connected = true;

          // Listen for account change in MetaMask
          window.ethereum.on("accountsChanged", (accounts) => {
            this.walletAddress = accounts[0];
          });

          // Listen for network change in MetaMask
          window.ethereum.on("networkChanged", (networkId) => {
            console.log("Network changed to:", networkId);
          });
        } catch (error) {
          console.error("Failed to connect to MetaMask:", error);
        }
      } else {
        alert("MetaMask is not installed.");
      }
    },

    // Disconnect the wallet
    disconnectWallet() {
      this.connected = false;
      this.walletAddress = "";
      this.walletType = "";
    },
  },
};
</script>

<style scoped>
/* Add styling for better presentation */
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

p {
  font-size: 16px;
  font-weight: bold;
}

h1 {
  font-size: 24px;
  color: #333;
}
</style>
