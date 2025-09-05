// scripts/call_setValue.js
import { ethers } from "ethers";

const RPC_URL = process.env.CELO_RPC || "https://forno.celo.org";
const PRIVATE_KEY = process.env.PRIVATE_KEY; // NO lo subas al repo
const CONTRACT = process.env.SIMPLE_STORAGE || "0x92053eB2F54F2DC06418a02F362135350715BE6f";

const ABI = [
  "function setValue(uint256 newValue) external",
  "function getValue() external view returns (uint256)"
];

async function main() {
  if (!PRIVATE_KEY) throw new Error("Set PRIVATE_KEY in .env");
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const c = new ethers.Contract(CONTRACT, ABI, wallet);
  const n = Math.floor(Date.now() / 1000);
  const tx = await c.setValue(n);
  console.log("tx:", tx.hash);
  await tx.wait();
  const v = await c.getValue();
  console.log("value:", v.toString());
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
