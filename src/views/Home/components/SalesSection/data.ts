import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'The AYA token',
  bodyText: 'With our native token AYA, users will be able to stake to earn massive rewards in every blue chip token.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBUSD.png', alt: 'BTC token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'High-Yield Passive Income',
  bodyText: 'Ayadex incentivizes liquidity providers with high yield farms and pools as a reward for securing the Ayadex protocol',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaUSDT.png', alt: 'Stocks chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Community Voting',
  bodyText:
    'Ayadex is governed by its community members who can create & vote on important token proposals',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xd4F9e9708574D97E80c01efC3308Ae1eB6C5E383',
    text: 'Buy AYA',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBNB.png', alt: 'AYA token' }
    ],
  },
}
