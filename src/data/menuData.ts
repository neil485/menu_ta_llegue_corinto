import type { MenuItem, Category } from '../types/menu';

export const categories: Category[] = [
  { id: 'res-burguer', name: 'Res Burguer', icon: '\uD83C\uDF54' },
  { id: 'pollo-burguer', name: 'Pollo Burguer', icon: '\uD83C\uDF57' },
  { id: 'alitas', name: 'Alitas o Chunks', icon: '\uD83C\uDF17' },
  { id: 'hot-dog', name: 'Hot Dog', icon: '\uD83C\uDF2D' },
  { id: 'salchipapas', name: 'Salchipapas', icon: '\uD83C\uDF5F' },
  { id: 'mexicano', name: 'Mexicano', icon: '\uD83C\uDF2E' },
  { id: 'bebidas', name: 'Bebidas', icon: '\u2615' },
  { id: 'extras', name: 'Extras', icon: '\u2795' },
  { id: 'info', name: 'Info', icon: '\uD83D\uDCCD' },
  { id: 'siguenos', name: 'S\u00EDguenos', icon: '\uD83D\uDCF1' },
];

export const menuItems: MenuItem[] = [
  // === Res Burguer ===
  {
    id: 'res-clasica',
    name: 'Cl\u00E1sica',
    description: '4Oz de carne de res, queso amarillo, aderezo especial, jam\u00F3n y lechuga + orden de papas.',
    price: 5.00,
    category: 'res-burguer',
  },
  {
    id: 'res-doble',
    name: 'Doble Burguer',
    description: 'Doble carne de res, doble queso, jam\u00F3n, aderezo, lechuga + doble porci\u00F3n de papas.',
    price: 7.00,
    category: 'res-burguer',
  },
  {
    id: 'res-bbq',
    name: 'BBQ',
    description: '4Oz de carne de res, queso amarillo, aderezo BBQ, jam\u00F3n, lechuga + orden de papas.',
    price: 6.00,
    category: 'res-burguer',
  },
  {
    id: 'res-chipotle',
    name: 'Chipotle',
    description: '4Oz de carne de res, queso amarillo, aderezo chipotle, jam\u00F3n, lechuga + orden de papas.',
    price: 6.00,
    category: 'res-burguer',
  },
  {
    id: 'res-bufalo',
    name: 'B\u00FAfalo',
    description: '4Oz de carne de res, queso amarillo, aderezo b\u00FAfalo picante, jam\u00F3n, lechuga + orden de papas.',
    price: 6.00,
    category: 'res-burguer',
  },

  // === Pollo Burguer ===
  {
    id: 'pollo-clasica',
    name: 'Cl\u00E1sica',
    description: '4Oz de pechuga, queso amarillo, aderezo especial, jam\u00F3n y lechuga + orden de papas.',
    price: 5.00,
    category: 'pollo-burguer',
  },
  {
    id: 'pollo-guacamole',
    name: 'Guacamole',
    description: '4Oz de pechuga, queso amarillo, aderezo especial, guacamole, jam\u00F3n y lechuga + orden de papas.',
    price: 7.00,
    category: 'pollo-burguer',
  },
  {
    id: 'pollo-especial',
    name: 'Especial',
    description: '4Oz de pechuga, queso amarillo, aderezo especial de tu elecci\u00F3n, jam\u00F3n y lechuga + orden de papas.',
    price: 6.00,
    category: 'pollo-burguer',
  },
  {
    id: 'pollo-doble',
    name: 'Chicken Doble',
    description: 'Doble carne de pollo, queso amarillo, aderezo especial, jam\u00F3n y lechuga + orden de papas.',
    price: 7.50,
    category: 'pollo-burguer',
  },

  // === Alitas o Chunks ===
  {
    id: 'alitas-pequena',
    name: 'Peque\u00F1a',
    description: '8 piezas de alitas ba\u00F1adas en salsa de tu elecci\u00F3n acompa\u00F1adas de papas y aderezo ranch.',
    price: 6.00,
    category: 'alitas',
  },
  {
    id: 'alitas-mediana',
    name: 'Mediana',
    description: '12 piezas de alitas ba\u00F1adas en salsa de tu elecci\u00F3n acompa\u00F1adas de papas y aderezo ranch.',
    price: 8.00,
    category: 'alitas',
  },
  {
    id: 'alitas-grande',
    name: 'Grande',
    description: '17 piezas de alitas ba\u00F1adas en salsa de tu elecci\u00F3n acompa\u00F1adas de papas y aderezo ranch.',
    price: 10.00,
    category: 'alitas',
  },
  {
    id: 'alitas-salsa-extra',
    name: 'Salsa Extra',
    description: 'Salsas disponibles: BBQ, Chipotle, B\u00FAfalo, Ranch.',
    price: 0.75,
    category: 'alitas',
  },

  // === Hot Dog ===
  {
    id: 'hotdog-clasico',
    name: 'Cl\u00E1sico',
    description: 'Pan de hot dog, salchicha, lechuga, aderezos de la casa + orden de papas.',
    price: 2.50,
    category: 'hot-dog',
  },
  {
    id: 'hotdog-jalapeno',
    name: 'Jalape\u00F1o',
    description: 'Pan de hot dog, salchicha, jalape\u00F1os encurtidos, lechuga y aderezos de la casa + orden de papa.',
    price: 3.00,
    category: 'hot-dog',
  },
  {
    id: 'hotdog-bacon',
    name: 'Hot Dog Bacon',
    description: 'Pan de hot dog, salchicha, bacon crujiente, lechuga, aderezos de la casa + orden papa.',
    price: 3.00,
    category: 'hot-dog',
  },

  // === Salchipapas ===
  {
    id: 'salchi-clasicas',
    name: 'Cl\u00E1sicas',
    description: 'Papas fritas con salchicha especial, chirimol, aderezo de la casa.',
    price: 3.50,
    category: 'salchipapas',
  },
  {
    id: 'salchi-especial',
    name: 'Especial',
    description: 'Papas fritas con carne de res picada, salchichas, especial queso, chirimol, aderezos.',
    price: 4.50,
    category: 'salchipapas',
  },
  {
    id: 'salchi-mixto',
    name: 'Mixto',
    description: 'Salchipapas mixtas con todo.',
    price: 5.00,
    category: 'salchipapas',
  },

  // === Mexicano ===
  {
    id: 'mex-tacos',
    name: 'Tacos',
    description: '3 tacos de res o pollo, chirimol, frijoles, queso y aderezo. Mixto $5.00',
    price: 4.50,
    category: 'mexicano',
  },
  {
    id: 'mex-nachos',
    name: 'Nachos',
    description: 'Carne de tu elecci\u00F3n, cama de nachos, frijoles, chirimol, quesillo derretido y sus aderezos. Mixto $5.50',
    price: 5.00,
    category: 'mexicano',
  },
  {
    id: 'mex-tortas',
    name: 'Tortas',
    description: 'Pan de torta, frijoles, carne de tu elecci\u00F3n, pepino, tomate, aguacate, lechuga, jam\u00F3n, aderezos. Mixto $5.50',
    price: 5.00,
    category: 'mexicano',
  },
  {
    id: 'mex-quesadillas',
    name: 'Quesadillas',
    description: 'Tortilla de harina, carne de tu elecci\u00F3n, queso, aguacate, frijoles y chirimol. Mixto $5.00',
    price: 4.50,
    category: 'mexicano',
  },
  {
    id: 'mex-birria',
    name: 'Tacos de Birria',
    description: '3 quesatacos de birria doble tortilla con su consom\u00E9 y verdura fresca.',
    price: 6.00,
    category: 'mexicano',
    note: 'S\u00E1bados y Domingos',
  },

  // === Bebidas ===
  {
    id: 'beb-cafe',
    name: 'Caf\u00E9',
    description: 'Caf\u00E9 caliente reci\u00E9n preparado.',
    price: 0.75,
    category: 'bebidas',
  },
  {
    id: 'beb-cafe-cremora',
    name: 'Caf\u00E9 con Cremora',
    description: 'Caf\u00E9 caliente con cremora.',
    price: 0.75,
    category: 'bebidas',
  },
  {
    id: 'beb-chocolate',
    name: 'Chocolate',
    description: 'Chocolate caliente.',
    price: 1.00,
    category: 'bebidas',
  },
  {
    id: 'beb-te-chai',
    name: 'T\u00E9 Chai',
    description: 'T\u00E9 chai con especias.',
    price: 1.50,
    category: 'bebidas',
  },
  {
    id: 'beb-sodas',
    name: 'Sodas',
    description: 'Sodas variadas.',
    price: 1.00,
    category: 'bebidas',
  },
  {
    id: 'beb-refresco',
    name: 'Refresco Natural',
    description: 'Refresco natural del d\u00EDa.',
    price: 0.75,
    category: 'bebidas',
  },
  {
    id: 'beb-te-helado',
    name: 'T\u00E9 Helado',
    description: 'T\u00E9 helado refrescante.',
    price: 1.00,
    category: 'bebidas',
  },
  {
    id: 'beb-licuados',
    name: 'Licuados',
    description: 'Licuados de frutas naturales.',
    price: 2.00,
    category: 'bebidas',
  },
  {
    id: 'beb-cerveza',
    name: 'Cerveza Nacional',
    description: 'Cerveza nacional bien fr\u00EDa.',
    price: 2.00,
    category: 'bebidas',
  },

  // === Extras ===
  {
    id: 'extra-tocino',
    name: 'Tocino',
    description: 'Porci\u00F3n extra de tocino crujiente.',
    price: 1.00,
    category: 'extras',
  },
  {
    id: 'extra-pepinillos',
    name: 'Pepinillos',
    description: 'Porci\u00F3n extra de pepinillos.',
    price: 1.00,
    category: 'extras',
  },
  {
    id: 'extra-papas',
    name: 'Papas',
    description: 'Orden extra de papas fritas.',
    price: 2.00,
    category: 'extras',
  },
  {
    id: 'extra-aderezo',
    name: 'Aderezo',
    description: 'Aderezo extra. Disponibles: BBQ, Chipotle, B\u00FAfalo.',
    price: 0.75,
    category: 'extras',
  },
];

export const negocioInfo = {
  nombre: 'Ya Llegue!',
  tipo: 'Snacks & Comida Rapida',
  telefono: '7256-8372',
  telefonoWhatsApp: '50372568372',
  instagram: '@yalleguesnacks',
  ubicacion: 'Corinto, Morazan, El Salvador',
};
