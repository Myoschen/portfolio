import { parseAsArrayOf, parseAsString } from 'nuqs'

export const searchParamsParsers = {
  tech: parseAsArrayOf(parseAsString),
}
