const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

export const get = async (url: string, attempts = 4): Promise<string> => {
  for (let attempt = 1; ; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": userAgent },
      });
      if (response.ok) {
        return await response.text();
      }
      if (attempt >= attempts) {
        throw new Error(`${response.status} ${url}`);
      }
    } catch (error) {
      if (attempt >= attempts) {
        throw error;
      }
    }
    await Bun.sleep(1000 * attempt);
  }
};
