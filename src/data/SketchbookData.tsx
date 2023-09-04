import Sketchbook from '../assets/products_icon/sketchbooks_red_dragon.png'
import SketchbookSunflower from '../assets/products_icon/sketchbooks_hepta.png'
import SketchbookTurtleOrange from '../assets/products_icon/sketchbooks_bee.png'
import SketchbookWings from '../assets/products_icon/sketchbooks_oxossi.png'

import SketchbookBig from '../assets/products_icon/sketchbooks_red_dragon.png'
import SketchbookSunflowerBig from '../assets/products_icon/sketchbooks_hepta.png'
import SketchbookTurtleOrangeBig from '../assets/products_icon/sketchbooks_bee.png'
import SketchbookWingsBig from '../assets/products_icon/sketchbooks_oxossi.png'




interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const SketchbookDataList: IProductsData[] = [
  {
    name:'Caderno Dragão Vermelho',
    description:'Vários modelos como sketchbooks agendas, planners semanais e mensais, blocos de notas e bullet journals',
    options:['Cor elástico', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: Sketchbook,
    imgSrc: SketchbookBig,
    price: 89.90 
  },
  {
    name:'Caderno Hectograma',
    description:'Vários modelos como sketchbooks agendas, planners semanais e mensais, blocos de notas e bullet journals',
    options:['Cor do Elástico', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: SketchbookSunflower,
    imgSrc: SketchbookSunflowerBig,
    price: 89.90 
  },
  {
    name:'Caderno Abelha',
    description:'Vários modelos como sketchbooks agendas, planners semanais e mensais, blocos de notas e bullet journals',
    options:['Cor elástico', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: SketchbookTurtleOrange,
    imgSrc: SketchbookTurtleOrangeBig,
    price: 89.90 
  },
  {
    name:'Caderno Oxossi',
    description:'Vários modelos como sketchbooks agendas, planners semanais e mensais, blocos de notas e bullet journals',
    options:['Cor elástico', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: SketchbookWings,
    imgSrc: SketchbookWingsBig,
    price: 89.90 
  },
]

export default SketchbookDataList;