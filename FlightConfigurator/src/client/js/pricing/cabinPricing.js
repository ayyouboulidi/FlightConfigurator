import cafeStore from '../store/cafeStore'
import ifeStore from '../store/ifeStore'
import seatsStore from '../store/seatsStore'
import separatorStore from '../store/separatorStore'
import lightingStore from '../store/lightingStore'
import custoSeparatorStore from '../store/custoStore'
import custoCafeStore from '../store/custocafeStore'

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
  let lavatoryPrice = (separatorObject.lavatory ? (custoSeparatorStore.get().lavatory ==="Effecient" ? 163900 : (custoSeparatorStore.get().lavatory ==="Confort"? 188890 :153900)) : 0)
  let galleyG3DryHsPrice = (separatorObject.galleyG3DryHs ? (custoSeparatorStore.get().galleyG3DryHs ==="Efficient" ? 112400 : (custoSeparatorStore.get().galleyG3DryHs ==="Comfort"? 142300 :97400)) : 0)
  let galleyG3DryFsPrice = (separatorObject.galleyG3DryFs ? (custoSeparatorStore.get().galleyG3DryFs ==="Efficient" ? 138650 : (custoSeparatorStore.get().galleyG3DryFs ==="Comfort"? 168500 :123650)) : 0)
  let galleyG3WetFsPrice = (separatorObject.galleyG3WetFs ? (custoSeparatorStore.get().galleyG3WetFs ==="Efficient" ? 138650 : (custoSeparatorStore.get().galleyG3WetFs ==="Comfort"? 168650 :123650)) : 0)

  let GalleyG4aPrice = (cafeObject.GalleyG4a ? (custoCafeStore.get().GalleyG4a ==="Efficient" ? 85000 : (custoCafeStore.get().GalleyG4a ==="Comfort"? 114800 :70000)) : 0)
  let lavatoryCafePrice = (cafeObject.lavatoryCafe ? (custoCafeStore.get().lavatoryCafe ==="Effecient" ? 163900 : (custoCafeStore.get().lavatoryCafe ==="Confort"? 188890 :153900)) : 0)
  let galleyG4Price = (cafeObject.galleyG4 ? (custoCafeStore.get().GalleyG4a ==="Efficient" ? 85000 : (custoCafeStore.get().GalleyG4a ==="Comfort"? 114800 :70000)) : 0)
  let galleyG5Price = (cafeObject.galleyG5 ? (custoCafeStore.get().galleyG5 ==="Efficient" ? 137500 : (custoCafeStore.get().galleyG5 ==="Comfort"? 167300 :122500)) : 0)
  let SpaceflexPrice = (cafeObject.Spaceflex ? (custoCafeStore.get().Spaceflex ==="Efficient" ? 377800 : (custoCafeStore.get().Spaceflex ==="Comfort"? 397800 :329000)) : 0)

  let moodlightingPrice = (lightingObject.moodlighting ? 74100 : 0)
  let floormountedPrice = (lightingObject.floormounted ? 19300 : 0)
  let ohscHandrailPrice = (lightingObject.ohscHandrail ? 88500 : 0)

  let priceSeats;
  priceSeats = seatsArray[1]*0+seatsArray[0]*7900+seatsArray[2]*0
  let priceIfe;
  priceIfe = avodPrice*seatsArray[0]+
              inSeatAudioPrice*seatsArray[0]+
              inSeatPowerPrice*seatsArray[0]+
              ClassDividerPrice*seatsArray[0]+
              ifeObject.OverHeadVideo*9000+
              avodEcoPrice*seatsArray[2]+
              inSeatAudioEcoPrice*seatsArray[2]+
              inSeatPowerEcoPrice*seatsArray[2]+
              ifeObject.OverHeadVideoEco*9000
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
