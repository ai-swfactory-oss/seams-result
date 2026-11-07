import { describe, expect, it } from 'vitest'

import { isResultTag } from '../src/index'

describe('isResultTag', () => {
  it('accepts a known result tag', () => {
    expect(isResultTag('ok')).toBe(true)
    expect(isResultTag('err')).toBe(true)
  })

  it('rejects anything else', () => {
    expect(isResultTag('unknown')).toBe(false)
    expect(isResultTag(1)).toBe(false)
  })
})
