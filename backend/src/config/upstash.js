import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// create ratelimiter allows 5 req per 20 seconds.
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // says 100 requests per 60 seconds
  limiter: Ratelimit.slidingWindow(100, "60 s"),
})

export default ratelimit;