const { ethers: etherjs } = ethers;
import abi from "./abi.js";

const rpcUrl = "https://goerli.infura.io/v3/ba80361523fe423bb149026a490266f0";
const signerProvider = new etherjs.providers.Web3Provider(window.ethereum);

const signer = signerProvider.getSigner();
const tokenAddress = "0xa20cDD671eD386a5cF969E2BD7ab70f8E0E7Bc85";

const useContract = (  contractAddress = tokenAddress, contractABI = abi, isSigner = false ) => {
  const providerSigner = new etherjs.providers.Web3Provider(window.ethereum);
  const signer = providerSigner.getSigner();
  const provider = new etherjs.providers.JsonRpcProvider(rpcUrl);
  const newProvider = isSigner ? signer : provider;
  return new ethers.Contract(contractAddress, contractABI, newProvider);
};

const connectWallet = async () => {
  await signerProvider.send("eth_requestAccounts");
  await getUserWallet();
};
