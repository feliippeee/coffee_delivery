import expressoTradicional from '../assets/coffeeexpresso-tradicional.png'
import arabe from '../assets/coffeearabe.png'
import cafeComLeite from '../assets/coffeecafe-com-leite.png'
import chocolateQuente from '../assets/coffeechocolate-quente.png'
import cubano from '../assets/coffeecubano.png'
import expressoAmericano from '../assets/coffeeexpresso-americano.png'
import expressoCremoso from '../assets/coffeeexpresso-cremoso.png'
import havaino from '../assets/coffeehavaiano.png'
import macchiato from '../assets/coffeemacchiato.png'
import mocaccino from '../assets/coffeemocaccino.png'
import expressoGelado from '../assets/coffeeexpresso-gelado.png'
import latte from '../assets/coffeelatte.png'
import irlandes from '../assets/coffeeirlandes.png'
import capuccino from '../assets/coffeecapuccino.png'

// corrigir as importações das imagens
export const coffees = [
      {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        tags: ['Tradicional'],
        photo: expressoTradicional,
      },
      
      {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        tags: ['Tradicional'],
        photo: expressoAmericano,
      },
      {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        tags: ['Tradicional'],
        photo: expressoCremoso,
      },
      {
        id: 4,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 11.9,
        tags: ['Tradicional', 'Gelado'],
        photo: expressoGelado,
      },
      {
        id: 5,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 11.9,
        tags: ['Tradicional', 'Com Leite'],
        photo: cafeComLeite,
      },
      {
        id: 6,
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 11.9,
        tags: ['Tradicional', 'Com Leite'],
        photo: latte,
      },
      {
        id: 7,
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 12.9,
        tags: ['Tradicional', 'Com Leite'],
        photo: capuccino,
      },
      {
        id: 8,
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 12.9,
        tags: ['Tradicional', 'Com Leite'],
        photo: macchiato,
      },
      {
        id: 9,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 13.9,
        tags: ['Tradicional', 'Com Leite'],
        photo: mocaccino,
      },
      {
        id: 10,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 13.9,
        tags: ['Especial', 'Com Leite'],
        photo: chocolateQuente,
      },
      {
        id: 11,
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 17.9,
        tags: ['Especial', 'Alcoólico', 'Gelado'],
        photo: cubano,
      },
      {
        id: 12,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 17.9,
        tags: ['Especial'],
        photo: havaino,
      },
      {
        id: 13,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 17.9,
        tags: ['Especial'],
        photo: arabe,
      },
      {
        id: 14,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 19.9,
        tags: ['Especial', 'Alcoólico'],
        photo: irlandes,
      },
  ];