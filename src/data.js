import heroImage from './assets/Gemini_Generated_Image_hu9xo6hu9xo6hu9x.png'
import ringsImage from './assets/Gemini_Generated_Image_1bk74y1bk74y1bk7.png'
import lifestyleImage from './assets/Gemini_Generated_Image_.png'
import handImage from './assets/Gemini_Generated_Image_b18l02b18l02b18l.png'
import logoImage from './assets/logo_transparent.PNG'

export const assets = { heroImage, ringsImage, lifestyleImage, handImage, logoImage }

export const products = [
  { id: 1, name: 'Stellar Necklace', category: 'Necklaces', price: 899, mrp: 1499, rating: 4.9, reviews: 86, image: lifestyleImage, badge: 'ANTI-TARNISH' },
  { id: 2, name: 'Lumi Ring', category: 'Rings', price: 799, mrp: 1299, rating: 4.8, reviews: 62, image: ringsImage, badge: 'BESTSELLER' },
  { id: 3, name: 'Daisy Bracelet', category: 'Bracelets', price: 999, mrp: 1599, rating: 4.9, reviews: 104, image: handImage, badge: 'ANTI-TARNISH' },
  { id: 4, name: 'Bloom Hoops', category: 'Earrings', price: 799, mrp: 1199, rating: 4.7, reviews: 48, image: lifestyleImage },
  { id: 5, name: 'Butterfly Chain', category: 'Necklaces', price: 899, mrp: 1499, rating: 4.9, reviews: 75, image: heroImage },
]

export const categories = [
  { name: 'Rings', image: ringsImage },
  { name: 'Necklaces', image: lifestyleImage },
  { name: 'Bracelets', image: handImage },
  { name: 'Earrings', image: lifestyleImage },
]