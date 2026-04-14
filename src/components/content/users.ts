import type { UserConfig } from "../types/UserConfig"

/**
 * Add an entry here for each company you share a personalized link with.
 * The key is the value of the ?ref= query param.
 *
 * Share links like: https://yourportfolio.com?ref=google
 */
export const USERS: Record<string, UserConfig> = {
  test: {
    name: "Test01",
    greeting: import.meta.env.VITE_Test01_GREETING,
    message: import.meta.env.VITE_Test01_MESSAGE,
  },
  a6cbb0ba321b: {
    name: "",
    greeting: import.meta.env.VITE_a6cbb0ba321b_GREETING,
    message: import.meta.env.VITE_a6cbb0ba321b_MESSAGE,
  },
  default: {
    name: "default",
    greeting: "",
    message: "",
  },
}
