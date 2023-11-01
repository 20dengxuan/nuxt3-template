export class Https {
  static fetch<T>(url: string, config: FetchConfig<T> = {}) {
    const defaults: FetchConfig<T> = {
      baseURL: "/exhibition",
      key: url,
      headers: {},
      onRequest() {},
      onResponse(_ctx) {
        _ctx.response._data = _ctx.response._data.data;
      },
      onResponseError(_ctx) {
        // throw new myBusinessError()
      },
    };
    const options = { ...config, ...defaults };
    return useFetch(url, options);
  }

  static get<T>(url: string, config: FetchConfig<T> = {}) {
    return this.fetch<T>(url, { ...config, method: "get" });
  }

  static post<T>(url: string, config: FetchConfig<T> = {}) {
    return this.fetch<T>(url, { ...config, method: "post" });
  }
}
