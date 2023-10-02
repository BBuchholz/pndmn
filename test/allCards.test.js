import {
  expect,
  test,
} from 'vitest'

import {
  getCardByName,
  getPotentialMatchesFor,
} from '../src/components/allCards'

test('should get card by name', () => {
  const thaCard = getCardByName('Sun')
  expect(thaCard).toBeDefined()
  expect(thaCard.sign).toBeDefined()
  expect(thaCard.sign).toStrictEqual('Leo')
})

test('something', () => {
  expect(getPotentialMatchesFor('Sun')).toBe('Star')
  expect(getPotentialMatchesFor('Emperor')).toBe('Star')
})
