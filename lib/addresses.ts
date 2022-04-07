import { PublicKey } from "@solana/web3.js"
//public key is another term we use for address, so we’re just storing the address here in a way that the Solana libraries expect it.

// Your shop wallet address
export const shopAddress = new PublicKey('2PeExfrJNXgKEhT2twdJLEkEA7akT7CiCyV4Dyw3DnGk');

//we need to get the USDC address, which we’ll use to make a transaction that transfers USDC from the buyer to the shop.
// this is the same for everyone!
export const usdcAddress = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr')

// This is your token/coupon address
export const couponAddress = new PublicKey('8zSs3fVpAdN3RBcM1mxq6KbJR7XeRamoDXL6wa12TRDN')