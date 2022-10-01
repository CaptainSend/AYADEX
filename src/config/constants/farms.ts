import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'AYA',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xd4F9e9708574D97E80c01efC3308Ae1eB6C5E383',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'AYA-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x7B60BCa8de0Fb526fEC94496c9F1bD036C5222bB',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  
 
]

export default farms
