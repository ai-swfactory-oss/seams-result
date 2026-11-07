export type ResultTag = 'ok' | 'err'

export const isResultTag = (value: unknown): value is ResultTag => value === 'ok' || value === 'err'
