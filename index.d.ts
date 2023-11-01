import type { UseFetchOptions } from "#app";

declare global { 
  declare type FetchConfig<T> = UseFetchOptions<T>
}

export {}