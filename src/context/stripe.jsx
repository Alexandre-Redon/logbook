import { loadStripe } from "@stripe/stripe-js";
import { env } from "../env";

const stripePromise = loadStripe(env.VITE_STRIPE_PUBLIC_KEY);

export default stripePromise;