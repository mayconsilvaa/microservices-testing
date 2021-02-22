import Redis from 'ioredis';

class RedisCache {
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });
  }

  set(key, value) {
    return this.redis.set(key, JSON.stringify(value));
  }

  async get(key) {
    const cached = await this.redis.get(key);

    return cached ? JSON.parse(cached) : null;
  }

  async invalidated(key) {
    return this.redis.del(key);
  }
}

export default new RedisCache();
