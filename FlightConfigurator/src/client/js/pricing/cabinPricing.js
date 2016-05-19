import cafeStore from '../store/cafeStore'
import ifeStore from '../store/ifeStore'
import seatsStore from '../store/seatsStore'
import separatorStore from '../store/separatorStore'
import lightingStore from '../store/lightingStore'

export function cabinPricing(){
  let seatsArray = seatsStore.get()
  let ifeObject = ifeStore.get()
  let separatorObject = separatorStore.get()
  let cafeObject = cafeStore.get()
  let lightingObject = lightingStore.get()

  let avodPrice = (ifeObject.avod ? 1200 : 0)
  let inSeatAudioPrice = (ifeObject.inSeatAudio ? 440 : 0)
  let inSeatPowerPrice = (ifeObject.inSeatPower ? 360 : 0)
  let ClassDividerPrice = (ifeObject.ClassDivider ? 29000 : 0)
  let avodEcoPrice = (ifeObject.avodEco ? 1200 : 0)
  let inSeatAudioEcoPrice = (ifeObject.inSeatAudioEco ? 440 : 0)
  let inSeatPowerEcoPrice = (ifeObject.inSeatPowerEco ? 360 : 0)

  let windScreenPrice = (separatorObject.windScreen ? 29000 : 0)
  let lavatoryPrice = (separatorObject.lavatory ? 153900 : 0)
  let galleyG3DryHsPrice = (separatorObject.galleyG3DryHs ? 75000 : 0)
  let galleyG3DryFsPrice = (separatorObject.galleyG3DryFs ? 70000 : 0)
  let galleyG3WetFsPrice = (separatorObject.galleyG3WetFs ? 85000 : 0)

  let GalleyG4aPrice = (cafeObject.GalleyG4a ? 70000 : 0)
  let lavatoryCafePrice = (cafeObject.lavatoryCafe ? 153900 : 0)
  let galleyG4Price = (cafeObject.galleyG4 ? 70000 : 0)
  let galleyG5Price = (cafeObject.galleyG5 ? 122500 : 0)
  let SpaceflexPrice = (cafeObject.Spaceflex ? 307800 : 0)

  let moodlightingPrice = (lightingObject.moodlighting ? 74100 : 0)
  let floormountedPrice = (lightingObject.floormounted ? 19300 : 0)
  let ohscHandrailPrice = (lightingObject.ohscHandrail ? 88500 : 0)

  let priceSeats;
  priceSeats = seatsArray[1]*0+seatsArray[0]*8000+seatsArray[2]*5000
  let priceIfe;
  priceIfe = avodPrice*seatsArray[0]+
              inSeatAudioPrice*seatsArray[0]+
              inSeatPowerPrice*seatsArray[0]+
              ClassDividerPrice*seatsArray[0]+
              ifeObject.OverHeadVideo*9000*seatsArray[0]+
              avodEcoPrice*seatsArray[2]+
              inSeatAudioEcoPrice*seatsArray[2]+
              inSeatPowerEcoPrice*seatsArray[2]+
              ifeObject.OverHeadVideoEco*9000*seatsArray[2]
  let priceSeparator;
  priceSeparator = windScreenPrice+lavatoryPrice+galleyG3DryHsPrice+galleyG3DryFsPrice+galleyG3WetFsPrice
  let cafePrice;
  cafePrice = GalleyG4aPrice+lavatoryCafePrice+galleyG4Price+galleyG5Price+SpaceflexPrice
  let lightingPrice;
  lightingPrice = moodlightingPrice+floormountedPrice+ohscHandrailPrice

  let totalCabin;
  totalCabin = priceSeats+priceIfe+priceSeparator+cafePrice+lightingPrice
  return totalCabin;
}
