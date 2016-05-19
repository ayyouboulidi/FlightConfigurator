import {cabinPricing} from './cabinPricing'
import {systemPricing} from './systemPricing'

export function globalPricing(){
  return cabinPricing()+systemPricing();
}
