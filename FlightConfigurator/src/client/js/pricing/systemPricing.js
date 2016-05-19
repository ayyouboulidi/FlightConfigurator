import systemStore from '../store/systemFlyingToolsStore'

export function systemPricing(){
  let systemObject = systemStore.get()

  let runwayPrice = (systemObject.runway ? 80000 : 0)
  let onboardPrice = (systemObject.onboard ? 488000 : 0)
  let navigationPrice = (systemObject.navigation ? 100000 : 0)
  let headUpPrice = (systemObject.headUp ? 55400 : 0)
  let atsawPrice = (systemObject.atsaw ? 76400 : 0)
  let dualAdfPrice = (systemObject.dualAdf ? 58800 : 0)
  let glsPrice = (systemObject.gls ? 31300 : 0)
  let flsPrice = (systemObject.fls ? 31300 : 0)

  return runwayPrice+onboardPrice+navigationPrice+headUpPrice+atsawPrice+dualAdfPrice+glsPrice+flsPrice;
}
