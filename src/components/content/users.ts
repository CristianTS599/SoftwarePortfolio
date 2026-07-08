import type { UserConfig } from "../types/UserConfig"

/**
 * Add an entry here for each company you share a personalized link with.
 * The key is the value of the ?ref= query param.
 *
 * Share links like: https://yourportfolio.com?ref=google
 */
export const USERS: Record<string, UserConfig> = {
  a6cbb0ba321b: {
    name: "a6cbb0ba321b",
    greeting: import.meta.env.VITE_a6cbb0ba321b_GREETING,
    message: import.meta.env.VITE_a6cbb0ba321b_MESSAGE,
  },
  e091be1bc078: {
    name: "e091be1bc078",
    greeting: import.meta.env.VITE_e091be1bc078_GREETING,
    message: import.meta.env.VITE_e091be1bc078_MESSAGE,
  },
  d2d714dbe07e: {
    name: "d2d714dbe07e",
    greeting: import.meta.env.VITE_d2d714dbe07e_GREETING,
    message: import.meta.env.VITE_d2d714dbe07e_MESSAGE,
  },
  "06bcff89cc3b": {
    name: "06bcff89cc3b",
    greeting: import.meta.env.VITE_06bcff89cc3b_GREETING,
    message: import.meta.env.VITE_06bcff89cc3b_MESSAGE,
  },
  "57328edf4882": {
    name: "57328edf4882",
    greeting: import.meta.env.VITE_57328edf4882_GREETING,
    message: import.meta.env.VITE_57328edf4882_MESSAGE,
  },
  "00fb2a3214e7": {
    name: "00fb2a3214e7",
    greeting: import.meta.env.VITE_00fb2a3214e7_GREETING,
    message: import.meta.env.VITE_00fb2a3214e7_MESSAGE,
  },
  default: {
    name: "default",
    greeting: "",
    message: "",
  },
}
