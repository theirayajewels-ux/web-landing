import heroImage from './assets/hero.png'
import ringsImage from './assets/rings.png'
import earringsImage from './assets/earrings.png'
import lifestyleImage from './assets/office boss lady.png'
import handImage from './assets/friends wearing iraya.png'
import oceanImage from './assets/holday vibes.png'
import hallwayImage from './assets/jewlleries.png'
import braceletImage from './assets/bracelets.png'
import pendantImage from './assets/pendent.png'
import eveningImage from './assets/brunch ready.png'
import headerImage from './assets/loving jewllry poster.png'
import multipleJewelleryImage from './assets/multiple jewellry.png'
import elegantModelImage from './assets/elegent model.png'
import girlShowingImage from './assets/girl showing iraya .png'
import logoImage from './assets/logo_transparent.PNG'

export const assets = { heroImage, ringsImage, earringsImage, lifestyleImage, handImage, oceanImage, hallwayImage, braceletImage, pendantImage, eveningImage, headerImage, multipleJewelleryImage, elegantModelImage, girlShowingImage, logoImage }

export const products = [
  { id: 1, name: 'Stellar Necklace', category: 'Necklaces', price: 899, mrp: 1499, rating: 4.9, reviews: 86, image: hallwayImage, badge: 'ANTI-TARNISH' },
  { id: 2, name: 'Lumi Ring', category: 'Rings', price: 799, mrp: 1299, rating: 4.8, reviews: 62, image: ringsImage, badge: 'BESTSELLER' },
  { id: 3, name: 'Daisy Bracelet', category: 'Bracelets', price: 999, mrp: 1599, rating: 4.9, reviews: 104, image: braceletImage, badge: 'ANTI-TARNISH' },
  { id: 4, name: 'Bloom Hoops', category: 'Earrings', price: 799, mrp: 1199, rating: 4.7, reviews: 48, image: earringsImage },
  { id: 5, name: 'Butterfly Chain', category: 'Necklaces', price: 899, mrp: 1499, rating: 4.9, reviews: 75, image: multipleJewelleryImage },
]

export const categories = [
  { name: 'Rings', image: ringsImage },
  { name: 'Necklaces', image: hallwayImage },
  { name: 'Bracelets', image: braceletImage },
  { name: 'Earrings', image: earringsImage },
]