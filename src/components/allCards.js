import { ref } from 'vue'

export const allCards = ref([
  {
    cardName: 'Le Mat',
    modality: 'Cardinal',
    element: 'Fire',
    planet: '',
    sign: '',
  },
  {
    cardName: 'Chariot',
    modality: 'Fixed',
    element: 'Air',
    planet: '',
    sign: '',
  },
  {
    cardName: 'Wheel',
    modality: 'Mutable',
    element: 'Water',
    planet: '',
    sign: '',
  },
  {
    cardName: 'Sun',
    modality: '',
    element: '',
    planet: 'Sol',
    sign: 'Leo',
  },
  {
    cardName: 'Moon',
    modality: '',
    element: '',
    planet: 'Luna',
    sign: 'Cancer',
  },
  {
    cardName: 'Hanged Man',
    modality: '',
    element: '',
    planet: 'Mercury',
    sign: 'Virgo, Gemini',
  },
  {
    cardName: 'Lovers',
    modality: '',
    element: '',
    planet: 'Venus',
    sign: 'Libra, Taurus',
  },
  {
    cardName: 'Tower',
    modality: '',
    element: '',
    planet: 'Mars',
    sign: 'Aries, Scorpio',
  },
  {
    cardName: 'Justice',
    modality: '',
    element: '',
    planet: 'Jupiter',
    sign: 'Pisces, Sagittarius',
  },
  {
    cardName: 'Death',
    modality: '',
    element: 'Earth',
    planet: 'Saturn',
    sign: 'Aquarius, Capricorn',
  },
  {
    cardName: 'Emperor',
    modality: 'Cardinal',
    element: 'Fire',
    planet: 'Mars',
    sign: 'Aries',
  },
  {
    cardName: 'Empress',
    modality: 'Cardinal',
    element: 'Air',
    planet: 'Venus',
    sign: 'Libra',
  },
  {
    cardName: 'Devil',
    modality: 'Fixed',
    element: 'Earth',
    planet: 'Venus',
    sign: 'Taurus',
  },
  {
    cardName: 'Star',
    modality: 'Fixed',
    element: 'Fire',
    planet: 'Sol',
    sign: 'Leo',
  },
  {
    cardName: 'Mountebank',
    modality: 'Mutable',
    element: 'Air',
    planet: 'Mercury',
    sign: 'Gemini',
  },
  {
    cardName: 'Popess',
    modality: 'Cardinal',
    element: 'Water',
    planet: 'Luna',
    sign: 'Cancer',
  },
  {
    cardName: 'Pope',
    modality: 'Cardinal',
    element: 'Earth',
    planet: 'Saturn',
    sign: 'Capricorn',
  },
  {
    cardName: 'Temperance',
    modality: 'Mutable',
    element: 'Earth',
    planet: 'Mercury',
    sign: 'Virgo',
  },
  {
    cardName: 'Hermit',
    modality: 'Fixed',
    element: 'Water',
    planet: 'Mars',
    sign: 'Scorpio',
  },
  {
    cardName: 'World',
    modality: 'Fixed',
    element: 'Air',
    planet: 'Saturn',
    sign: 'Aquarius',
  },
  {
    cardName: 'Judgement',
    modality: 'Mutable',
    element: 'Water',
    planet: 'Jupiter',
    sign: 'Pisces',
  },
  {
    cardName: 'Force',
    modality: 'Mutable',
    element: 'Fire',
    planet: 'Jupiter',
    sign: 'Sagittarius',
  },
])

export function getCardByName(aCardName) {
  for (const card of allCards.value) {
    if (card.cardName === aCardName)
      return card
  }

  return null
}

export function getPotentialMatchesFor(cardName) {
  const thaCard = getCardByName(cardName)

  if (!thaCard)
    return 'no matches found'

  const matches = []

  for (const card of allCards.value) {
    if (card.cardName !== thaCard.cardName) {
      // modality
      if (card.modality.trim()
        && card.modality === thaCard.modality)
        matches.push(card.cardName)
      // element
      if (card.element.trim()
        && card.element === thaCard.element)
        matches.push(card.cardName)
      // planet
      if (card.planet.trim()
        && card.planet === thaCard.planet)
        matches.push(card.cardName)
      // sign
      if (card.sign.trim()) {
        // just need to make sure whichever doesn't have
        // a comma is tested for being inside the one
        // that MIGHT have a comma (doesn't matter if it does
        // just need to make sure the other one doesn't)

        if (card.sign.includes(',')) {
          if (thaCard.sign.trim()
            && card.sign.includes(thaCard.sign))
            matches.push(card.cardName)
        }
        else {
          if (card.sign.trim()
            && thaCard.sign.includes(card.sign))
            matches.push(card.cardName)
        }
      }
    }
  }

  if (!matches || matches.length < 1)
    return 'no matches found'

  // remove duplicates
  const unique = [...new Set(matches)]

  return unique.join(', ')
}
