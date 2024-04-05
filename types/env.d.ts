declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OMDB_API_KEY_KEY: string
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_SITE_NAME: string
    }
  }
}
export {}
