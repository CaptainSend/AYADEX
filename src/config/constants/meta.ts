import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Ayadex',
  description:
    '',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Ayadex')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Ayadex')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Ayadex')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Ayadex')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Ayadex')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Ayadex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Ayadex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Ayadex')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Ayadex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Ayadex')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Ayadex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Ayadex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Ayadex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Ayadex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Ayadex')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Ayadex')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Ayadex')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Ayadex')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Ayadex Info & Analytics')}`,
        description: 'View statistics for Ayadex exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Ayadex Info & Analytics')}`,
        description: 'View statistics for Ayadex exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Ayadex Info & Analytics')}`,
        description: 'View statistics for Ayadex exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Ayadex')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Ayadex')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Ayadex')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Ayadex')}`,
      }
    default:
      return null
  }
}
