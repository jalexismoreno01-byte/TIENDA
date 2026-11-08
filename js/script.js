/* ============================================================
   1. DATOS DEL SITIO — Edita estos arreglos para cambiar el menú,
      la galería, los testimonios y las preguntas frecuentes.
   ============================================================ */

/* --- Categorías de la carta --- */
const CATEGORIAS = [
  {id:'todos',     nombre:'Todo'},
  {id:'entradas',  nombre:'Entradas'},
  {id:'pastas',    nombre:'Pastas'},
  {id:'pizzas',    nombre:'Pizzas'},
  {id:'risottos',  nombre:'Risottos'},
  {id:'carnes',    nombre:'Carnes y Pescados'},
  {id:'postres',   nombre:'Postres'},
  {id:'bebidas',   nombre:'Bebidas'}
];

/* --- Platos: {id, cat, nombre, desc, precio(COP), img, tags[]} ---
   tags disponibles: 'veg' (vegetariano), 'pic' (picante), 'chef' (favorito del chef), 'fav' (favorito de la casa) */
const PLATOS = [
  /* ===== ENTRADAS ===== */
  {id:1,  cat:'entradas', nombre:'Bruschetta Clásica', desc:'Pan tostado con tomate fresco, albahaca, ajo y aceite de oliva virgen.', precio:18900, img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=700&q=80', tags:['veg','fav']},
  {id:2,  cat:'entradas', nombre:'Carpaccio de Res', desc:'Láminas finas de res cruda con rúcula, parmesano y limón.', precio:27900, img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:3,  cat:'entradas', nombre:'Caprese alla Milanese', desc:'Mozzarella de búfala, tomate heirloom y albahaca con reducción balsámica.', precio:23900, img:'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:4,  cat:'entradas', nombre:'Arancini Sicilianos', desc:'Bolas de arroz risotto rellenas de mozzarella, fritas y doradas.', precio:21900, img:'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:5,  cat:'entradas', nombre:'Calamares a la Italiana', desc:'Anillos de calamar rebozados con limón y tártaro de la casa.', precio:26900, img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:6,  cat:'entradas', nombre:'Sopa Minestrone', desc:'Verduras de temporada, alubias y pasta corta en caldo de verduras.', precio:17900, img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:7,  cat:'entradas', nombre:'Antipasto Misto', desc:'Selección de embutidos italianos, quesos, aceitunas y pan artesanal.', precio:34900, img:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80', tags:['chef']},

  /* ===== PASTAS ===== */
  {id:10, cat:'pastas', nombre:'Spaghetti Carbonara', desc:'Guanciale, yema de huevo, pecorino romano y pimienta negra. Sin crema.', precio:36900, img:'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=80', tags:['fav']},
  {id:11, cat:'pastas', nombre:'Lasagna Bolognesa', desc:'Capas de pasta fresca con ragú de 6 horas, bechamel y mozzarella.', precio:38900, img:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80', tags:['chef','fav']},
  {id:12, cat:'pastas', nombre:'Fettuccine Alfredo', desc:'Fettuccine en salsa cremosa de mantequilla y parmesano ahumado.', precio:34900, img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:13, cat:'pastas', nombre:'Ravioles de Ricotta y Espinaca', desc:'Relleno casero con mantequilla de salvia y nuez moscada.', precio:37900, img:'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:14, cat:'pastas', nombre:'Penne all’Arrabbiata', desc:'Salsa de tomate picante con ajo y guindilla calabresa.', precio:31900, img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=80', tags:['veg','pic']},
  {id:15, cat:'pastas', nombre:'Spaghetti alle Vongole', desc:'Espagueti al mejillón y almejas en vino blanco, ajo y perejil.', precio:42900, img:'https://images.unsplash.com/photo-1560180474-e8563fd75bab?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:16, cat:'pastas', nombre:'Tagliatelle al Ragù', desc:'Cinta fresca con salsa boloñesa tradicional de carne y vino tinto.', precio:37900, img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80', tags:['fav']},
  {id:17, cat:'pastas', nombre:'Linguine al Pesto Genovese', desc:'Albahaca fresca, piñones, parmesano y aceite de oliva.', precio:33900, img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80', tags:['veg']},

  /* ===== PIZZAS ===== */
  {id:20, cat:'pizzas', nombre:'Pizza Margherita', desc:'Salsa de tomate San Marzano, mozzarella fior di latte y albahaca.', precio:32900, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80', tags:['veg','fav']},
  {id:21, cat:'pizzas', nombre:'Quattro Formaggi', desc:'Mozzarella, gorgonzola, parmesano y pecorino fundidos al horno.', precio:38900, img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80', tags:['veg','chef']},
  {id:22, cat:'pizzas', nombre:'Prosciutto e Rucola', desc:'Jamón parma crudo, rúcula fresca, tomate cherry y parmesano.', precio:41900, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:23, cat:'pizzas', nombre:'Diavola Picante', desc:'Salami picante, mozzarella, tomate y guindilla calabresa.', precio:36900, img:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=700&q=80', tags:['pic']},
  {id:24, cat:'pizzas', nombre:'Pizza Capricciosa', desc:'Jamón, champiñones, alcachofas, aceitunas y huevo.', precio:39900, img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:25, cat:'pizzas', nombre:'Pizza Bianca al Tartufo', desc:'Base blanca con crema de trufa, mozzarella y champiñón portobello.', precio:47900, img:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80', tags:['veg','chef']},
  {id:26, cat:'pizzas', nombre:'Pizza Ortolana', desc:'Verduras asadas de temporada, tomate y mozzarella. Sin carne.', precio:34900, img:'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=700&q=80', tags:['veg']},

  /* ===== RISOTTOS ===== */
  {id:30, cat:'risottos', nombre:'Risotto ai Funghi', desc:'Arroz carnaroli con setas silvestres, parmesano y aceite de trufa.', precio:43900, img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=80', tags:['veg','chef']},
  {id:31, cat:'risottos', nombre:'Risotto alla Milanese', desc:'Arroz con azafrán, mantequilla y hueso de tuétano.', precio:44900, img:'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:32, cat:'risottos', nombre:'Risotto al Nero di Seppia', desc:'Arroz negro con tinta de calamar, ajo, vino blanco y limón.', precio:46900, img:'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:33, cat:'risottos', nombre:'Risotto ai Frutti di Mare', desc:'Camarones, mejillones y calamar en caldo de mariscos.', precio:48900, img:'https://images.unsplash.com/photo-1560787313-5dff3307e257?auto=format&fit=crop&w=700&q=80', tags:['fav']},
  {id:34, cat:'risottos', nombre:'Risotto al Pomodoro Seco', desc:'Tomates secos, albahaca, mozzarella y pesto de la casa.', precio:39900, img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:35, cat:'risottos', nombre:'Risotto Zucca e Gorgonzola', desc:'Calabaza asada, gorgonzola dolce y piñones tostados.', precio:41900, img:'https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&w=700&q=80', tags:['veg']},

  /* ===== CARNES Y PESCADOS ===== */
  {id:40, cat:'carnes', nombre:'Osso Buco alla Milanese', desc:'Jarrete de res guisado con vino blanco, verduras y gremolata.', precio:68900, img:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80', tags:['chef','fav']},
  {id:41, cat:'carnes', nombre:'Saltimbocca alla Romana', desc:'Lomo de cerdo con prosciutto, salvia y vino blanco.', precio:59900, img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:42, cat:'carnes', nombre:'Bistec alla Fiorentina', desc:'Corte de res madurado 30 días, parrillado y con aceite de trufa.', precio:78900, img:'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=700&q=80', tags:['fav']},
  {id:43, cat:'carnes', nombre:'Pollo alla Cacciatora', desc:'Pollo guisado con tomate, aceitunas, alcaparras y vino tinto.', precio:46900, img:'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:44, cat:'carnes', nombre:'Salmone al Limone', desc:'Salmón sellado con mantequilla de limón, alcaparras y eneldo.', precio:57900, img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:45, cat:'carnes', nombre:'Cordero al Rosmarino', desc:'Pierna de cordero asada con romero, ajo y papas rústicas.', precio:72900, img:'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:46, cat:'carnes', nombre:'Fileto al Gorgonzola', desc:'Lomo de res con salsa de gorgonzola, nueces y pimientos asados.', precio:74900, img:'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80', tags:['chef']},

  /* ===== POSTRES ===== */
  {id:50, cat:'postres', nombre:'Tiramisú', desc:'Capas de savoiardi, café espresso y crema de mascarpone con cacao.', precio:21900, img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80', tags:['chef','fav']},
  {id:51, cat:'postres', nombre:'Panna Cotta', desc:'Crema cocida con vainilla de Madagascar y coulis de frutos rojos.', precio:18900, img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:52, cat:'postres', nombre:'Cannoli Sicilianos', desc:'Crujiente tubo relleno de ricotta dulce, pistacho y chocolate.', precio:19900, img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80', tags:['veg','fav']},
  {id:53, cat:'postres', nombre:'Panna Cotta de Café', desc:'Version intensa con espresso doble y caramelo salado.', precio:20900, img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:54, cat:'postres', nombre:'Gelato Artigianale', desc:'Tres boles de helado artesanal: pistacho, stracciatella y fresa.', precio:16900, img:'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:55, cat:'postres', nombre:'Sfogliatella', desc:'Pastel napolitano hojaldrado con relleno de ricotta y limón.', precio:17900, img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:56, cat:'postres', nombre:'Torta Caprese', desc:'Torta sin harina de chocolate y almendra, con helado de vainilla.', precio:22900, img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80', tags:['veg','chef']},

  /* ===== BEBIDAS ===== */
  {id:60, cat:'bebidas', nombre:'Vino Tinto Chianti (copa)', desc:'DOCG de Toscana, notas de cereza y hierbas mediterráneas.', precio:19900, img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80', tags:['chef']},
  {id:61, cat:'bebidas', nombre:'Vino Blanco Pinot Grigio', desc:'Fresco y cítrico, ideal para pescados y mariscos.', precio:18900, img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:62, cat:'bebidas', nombre:'Limonata Italiana', desc:'Limón fresca, menta y agua con gas. Refrescante y natural.', precio:11900, img:'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:63, cat:'bebidas', nombre:'Espresso Doppio', desc:'Doble extracción de tueste medio, cremoso y aromático.', precio:8900, img:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:64, cat:'bebidas', nombre:'Cappuccino Classico', desc:'Espresso con leche vaporizada y espuma densa de leche.', precio:10900, img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80', tags:['veg']},
  {id:65, cat:'bebidas', nombre:'Aperol Spritz', desc:'Aperol, prosecco y soda con naranja. El aperitivo de Italia.', precio:23900, img:'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=700&q=80', tags:['fav']},
  {id:66, cat:'bebidas', nombre:'Limoncello Casero', desc:'Licor de limón italiano servido bien frío, al estilo de la Amalfi.', precio:15900, img:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80', tags:[]},
  {id:67, cat:'bebidas', nombre:'Agua Mineral / Con Gas', desc:'Agua mineral fría 600 ml. Con o sin gas.', precio:7900, img:'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=700&q=80', tags:['veg']}
];

/* --- Galería de fotos --- */
const GALERIA = [
  {src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80', alt:'Salón principal del restaurante'},
  {src:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80', alt:'Pizza Margherita recién salida del horno'},
  {src:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80', alt:'Pasta fresca con salsa de tomate'},
  {src:'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80', alt:'Chef preparando un plato'},
  {src:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=80', alt:'Tiramisú de la casa'},
  {src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80', alt:'Mesa elegante lista para servir'},
  {src:'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80', alt:'Carne a la parrilla con guarnición'},
  {src:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80', alt:'Ambiente cálido de la trattoria'},
  {src:'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=1000&q=80', alt:'Mesa compartida con platos italianos'},
  {src:'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1000&q=80', alt:'Ingredientes frescos de la cocina'}
];

/* --- Testimonios --- */
const TESTIMONIOS = [
  {texto:'La mejor carbonara que he probado fuera de Roma. El ambiente es acogedor y el servicio impecable. Volveremos sin duda.', nombre:'Laura Méndez', rol:'Cliente desde 2019', foto:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', estrellas:5},
  {texto:'Reservamos para el aniversario y nos sorprendieron con un postre de cortesía. La lasaña es una obra de arte culinaria.', nombre:'Andrés y Carolina', rol:'Celebración aniversario', foto:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', estrellas:5},
  {texto:'Como vegetariano, siempre me cuesta elegir. Aquí hay tantas opciones deliciosas que pedí dos veces. El risotto de setas, increíble.', nombre:'Sofía Ramírez', rol:'Comensal frecuente', foto:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', estrellas:5},
  {texto:'Pedimos por WhatsApp y llegó todo caliente y perfectamente empaquetado. El proceso fue rapidísimo y muy fácil.', nombre:'Diego Torres', rol:'Pedido a domicilio', foto:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', estrellas:4}
];

/* --- Preguntas frecuentes --- */
const FAQS = [
  {p:'¿Cómo hago una reserva?', r:'Puedes completar el formulario de la sección Reservas o llamarnos al +57 300 123 4567. Recibirás una confirmación por teléfono en menos de 2 horas hábiles.'},
  {p:'¿Tienen opciones vegetarianas y veganas?', r:'Sí. Contamos con una amplia variedad de platos vegetarianos señalados con la etiqueta “vegetariano” en la carta, y podemos adaptar varias recetas a versión vegana solo pidiéndolo al ordenar.'},
  {p:'¿Puedo pedir para llevar o por WhatsApp?', r:'Claro. Agrega los platos al carrito y pulsa “Enviar pedido por WhatsApp”: recibirás el mensaje armado con el detalle y el total. Coordinamos el pago y la entrega o recogida en el local.'},
  {p:'¿Aceptan pagos con tarjeta?', r:'Sí, aceptamos tarjetas débito y crédito (Visa, Mastercard, American Express), pagos móviles y efectivo. Aceptamos también nequi y daviplata.'},
  {p:'¿Organizan eventos privados o cumpleaños?', r:'Sí, tenemos un salón privado para grupos de hasta 20 personas, menús personalizados y decoración temática. Escríbenos por el formulario de contacto o al correo hola@lagranroma.co.'},
  {p:'¿Tienen menú para niños y alergias?', r:'Contamos con porciones infantiles y podemos indicar alérgenos de cada plato (gluten, lactosa, frutos secos, mariscos). Informa al mesero sobre cualquier restricción alimentaria.'}
];

/* Número de WhatsApp del restaurante (formato internacional sin +) */
const WHATSAPP = '573001234567';

/* ============================================================
   2. UTILIDADES GENERALES
   ============================================================ */
const $  = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const fmtCOP = n => '$' + n.toLocaleString('es-CO') + ' COP';

/* Imagen con respaldo: si una URL de Unsplash falla, usa una imagen genérica */
function imgRespaltado(ev){
  const img = ev.target;
  img.onerror = null;
  img.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80';
}
window.addEventListener('error', e => { if(e.target && e.target.tagName === 'IMG') imgRespaltado(e); }, true);

/* ============================================================
   3. NAVEGACIÓN: HAMBURGUESA, SCROLL Y ENLACE ACTIVO
   ============================================================ */
const nav = $('#nav'), menuNav = $('#menuNav'), hamburguesa = $('#hamburguesa');

hamburguesa.addEventListener('click', () => {
  const abierta = menuNav.classList.toggle('abierto');
  hamburguesa.classList.toggle('abierta', abierta);
  hamburguesa.setAttribute('aria-expanded', abierta);
});
/* Cierra el menú móvil al tocar un enlace */
$$('#menuNav a').forEach(a => a.addEventListener('click', () => {
  menuNav.classList.remove('abierto');
  hamburguesa.classList.remove('abierta');
  hamburguesa.setAttribute('aria-expanded','false');
}));

/* Sombra en el header + botón "volver arriba" + enlace activo */
const btnTop = $('#btnTop');
const secciones = $$('main section, section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('sombra', y > 40);
  btnTop.classList.toggle('visible', y > 600);

  /* Resalta el enlace de la sección visible */
  let actual = 'inicio';
  secciones.forEach(s => { if (y >= s.offsetTop - 140) actual = s.id; });
  $$('#menuNav a').forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + actual));
}, {passive:true});
btnTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ============================================================
   4. MODO CLARO / OSCURO
   ============================================================ */
const btnTema = $('#btnTema');
function aplicarTema(oscuro){
  document.body.classList.toggle('oscuro', oscuro);
  btnTema.textContent = oscuro ? '☀️' : '🌙';
  btnTema.setAttribute('aria-label', oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  localStorage.setItem('granRomaTema', oscuro ? 'oscuro' : 'claro');
}
btnTema.addEventListener('click', () => aplicarTema(!document.body.classList.contains('oscuro')));
if (localStorage.getItem('granRomaTema') === 'oscuro') aplicarTema(true);

/* ============================================================
   5. CARTA: FILTROS POR CATEGORÍA + BUSCADOR EN TIEMPO REAL
   ============================================================ */
const gridPlatos = $('#gridPlatos'), categoriasEl = $('#categorias');
const buscador = $('#buscador'), sinResultados = $('#sinResultados'), resultadoInfo = $('#resultadoInfo');
let catActiva = 'todos', textoBusqueda = '';

/* Diccionario de etiquetas de tipo */
const ETIQUETAS = {veg:'Vegetariano', pic:'Picante', chef:'Favorito del chef', fav:'Favorito de la casa'};

/* Construye los botones de categoría */
CATEGORIAS.forEach(c => {
  const b = document.createElement('button');
  b.className = 'cat-btn' + (c.id === 'todos' ? ' activa' : '');
  b.textContent = c.nombre;
  b.dataset.cat = c.id;
  b.setAttribute('role','tab');
  b.setAttribute('aria-selected', c.id === 'todos');
  b.addEventListener('click', () => {
    catActiva = c.id;
    $$('.cat-btn', categoriasEl).forEach(x => {
      const on = x.dataset.cat === c.id;
      x.classList.toggle('activa', on);
      x.setAttribute('aria-selected', on);
    });
    pintarPlatos();
  });
  categoriasEl.appendChild(b);
});

/* Filtra y dibuja las tarjetas de platos */
function pintarPlatos(){
  const q = textoBusqueda.trim().toLowerCase();
  const lista = PLATOS.filter(p =>
    (catActiva === 'todos' || p.cat === catActiva) &&
    (!q || p.nombre.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  gridPlatos.innerHTML = lista.map((p, i) => `
    <article class="plato visible" style="animation-delay:${Math.min(i * 45, 400)}ms">
      <div class="plato-media">
        <img src="${p.img}" alt="${p.nombre} — ${p.desc}" loading="lazy" width="700" height="480">
        <div class="etiquetas">
          ${p.tags.map(t => `<span class="et-${t}">${ETIQUETAS[t]}</span>`).join('')}
        </div>
      </div>
      <div class="plato-cuerpo">
        <div class="plato-fila">
          <h3>${p.nombre}</h3>
          <span class="precio">${fmtCOP(p.precio)}</span>
        </div>
        <p class="plato-desc">${p.desc}</p>
        <button class="btn btn-rojo" data-id="${p.id}">Agregar al pedido</button>
      </div>
    </article>`).join('');

  /* Marca los platos ya agregados al carrito */
  $$('.plato .btn', gridPlatos).forEach(btn => {
    const enCarrito = CARRITO.some(c => c.id === +btn.dataset.id);
    if (enCarrito) { btn.classList.add('agregado'); btn.textContent = '✓ En tu pedido'; }
    btn.addEventListener('click', () => agregarAlCarrito(+btn.dataset.id, btn));
  });

  sinResultados.hidden = lista.length > 0;
  const catNombre = CATEGORIAS.find(c => c.id === catActiva).nombre;
  resultadoInfo.textContent = `${lista.length} plato${lista.length !== 1 ? 's' : ''} · ${catNombre}` +
    (q ? ` · resultados para “${textoBusqueda.trim()}”` : '');
}
buscador.addEventListener('input', e => {
  textoBusqueda = e.target.value;
  /* Al buscar, se revisa toda la carta sin importar la categoría */
  if (textoBusqueda.trim() && catActiva !== 'todos'){
    catActiva = 'todos';
    $$('.cat-btn', categoriasEl).forEach(x => {
      const on = x.dataset.cat === 'todos';
      x.classList.toggle('activa', on);
      x.setAttribute('aria-selected', on);
    });
  }
  pintarPlatos();
});

/* ============================================================
   6. CARRITO DE PEDIDO
   ============================================================ */
let CARRITO = [];
try { CARRITO = JSON.parse(localStorage.getItem('granRomaCarrito')) || []; } catch(e) { CARRITO = []; }

const carrito = $('#carrito'), capaCarrito = $('#capaCarrito'), carritoCuerpo = $('#carritoCuerpo');
const badge = $('#badgeCarrito'), chkPropina = $('#propina10');

function guardarCarrito(){ localStorage.setItem('granRomaCarrito', JSON.stringify(CARRITO)); }

function abrirCarrito(){
  carrito.classList.add('abierto');
  carrito.setAttribute('aria-hidden','false');
  capaCarrito.hidden = false;
  requestAnimationFrame(() => capaCarrito.classList.add('activa'));
  document.body.style.overflow = 'hidden';
}
function cerrarCarrito(){
  carrito.classList.remove('abierto');
  carrito.setAttribute('aria-hidden','true');
  capaCarrito.classList.remove('activa');
  setTimeout(() => capaCarrito.hidden = true, 350);
  document.body.style.overflow = '';
}
$('#btnCarrito').addEventListener('click', abrirCarrito);
$('#cerrarCarrito').addEventListener('click', cerrarCarrito);
capaCarrito.addEventListener('click', cerrarCarrito);
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarCarrito(); });

function agregarAlCarrito(id, btn){
  const plato = PLATOS.find(p => p.id === id);
  const item = CARRITO.find(c => c.id === id);
  if (item) item.cant++; else CARRITO.push({...plato, cant:1});

  if (btn){
    btn.classList.add('agregado');
    btn.textContent = '✓ En tu pedido';
    setTimeout(() => { btn.classList.remove('agregado'); btn.textContent = 'Agregar al pedido'; }, 1400);
  }
  guardarCarrito(); pintarCarrito(); abrirCarrito();
}
function cambiarCantidad(id, delta){
  const item = CARRITO.find(c => c.id === id);
  if (!item) return;
  item.cant += delta;
  if (item.cant <= 0) CARRITO = CARRITO.filter(c => c.id !== id);
  guardarCarrito(); pintarCarrito();
}
function eliminarItem(id){
  CARRITO = CARRITO.filter(c => c.id !== id);
  guardarCarrito(); pintarCarrito();
}

function pintarCarrito(){
  const unidades = CARRITO.reduce((s,c) => s + c.cant, 0);
  badge.textContent = unidades;
  badge.classList.toggle('visible', unidades > 0);

  if (!CARRITO.length){
    carritoCuerpo.innerHTML = `<div class="carrito-vacio">
      <div class="emoji">🍝</div>
      <p><strong>Tu pedido está vacío</strong></p>
      <p>Agrega platos del menú para empezar.</p>
    </div>`;
  } else {
    carritoCuerpo.innerHTML = CARRITO.map(c => `
      <div class="item-carrito">
        <img src="${c.img}" alt="${c.nombre}" loading="lazy">
        <div>
          <h4>${c.nombre}</h4>
          <span class="p">${fmtCOP(c.precio * c.cant)}</span>
          <div class="cant">
            <button data-accion="menos" data-id="${c.id}" aria-label="Quitar una unidad de ${c.nombre}">−</button>
            <span>${c.cant}</span>
            <button data-accion="mas" data-id="${c.id}" aria-label="Agregar una unidad de ${c.nombre}">+</button>
          </div>
        </div>
        <button class="quitar" data-accion="borrar" data-id="${c.id}" aria-label="Eliminar ${c.nombre}">🗑</button>
      </div>`).join('');

    $$('[data-accion]', carritoCuerpo).forEach(b => b.addEventListener('click', () => {
      const id = +b.dataset.id;
      if (b.dataset.accion === 'mas') cambiarCantidad(id, 1);
      if (b.dataset.accion === 'menos') cambiarCantidad(id, -1);
      if (b.dataset.accion === 'borrar') eliminarItem(id);
    }));
  }
  calcularTotales();
}

function calcularTotales(){
  const subtotal = CARRITO.reduce((s,c) => s + c.precio * c.cant, 0);
  const propina = chkPropina.checked ? Math.round(subtotal * 0.10) : 0;
  $('#subtotal').textContent = fmtCOP(subtotal);
  $('#propina').textContent = fmtCOP(propina);
  $('#total').textContent = fmtCOP(subtotal + propina);
}
chkPropina.addEventListener('change', calcularTotales);

$('#btnVaciar').addEventListener('click', () => {
  if (!CARRITO.length || confirm('¿Vaciar todo tu pedido?')){
    CARRITO = []; guardarCarrito(); pintarCarrito();
  }
});

/* Envío del pedido por WhatsApp con el detalle automático */
$('#btnWhatsapp').addEventListener('click', () => {
  if (!CARRITO.length){ alert('Agrega al menos un plato a tu pedido 🍕'); return; }
  const subtotal = CARRITO.reduce((s,c) => s + c.precio * c.cant, 0);
  const propina = chkPropina.checked ? Math.round(subtotal * 0.10) : 0;
  const lineas = CARRITO.map(c => `• ${c.cant} x ${c.nombre} — ${fmtCOP(c.precio * c.cant)}`).join('\n');
  const msg =
`*🍽 Pedido — La Gran Roma*
____________________
${lineas}
____________________
Subtotal: ${fmtCOP(subtotal)}
Propina (10%): ${fmtCOP(propina)}
*TOTAL: ${fmtCOP(subtotal + propina)}*

¡Hola! Quiero confirmar este pedido. Gracias.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

pintarCarrito();

/* ============================================================
   7. DIBUJO INICIAL DE LA CARTA
   ============================================================ */
pintarPlatos();

/* ============================================================
   8. FORMULARIO DE RESERVAS CON VALIDACIÓN
   ============================================================ */
const formReserva = $('#formReserva');
const fechaInput = $('#rFecha');
/* La fecha mínima es hoy */
fechaInput.min = new Date().toISOString().split('T')[0];

function marcarError(campo, idError, mensaje){
  const cont = campo.closest('.campo');
  cont.classList.toggle('invalido', !!mensaje);
  $(idError).textContent = mensaje || '';
  return !mensaje;
}

formReserva.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = $('#rNombre'), tel = $('#rTel'), fecha = $('#rFecha'),
        hora = $('#rHora'), personas = $('#rPersonas');

  let ok = true;
  ok = marcarError(nombre, '#eNombre',
        nombre.value.trim().length < 3 ? 'Escribe tu nombre completo (mínimo 3 letras).' : '') && ok;
  ok = marcarError(tel, '#eTel',
        /^[0-9+\s()-]{7,15}$/.test(tel.value.trim()) ? '' : 'Ingresa un teléfono válido (7–15 dígitos).') && ok;
  ok = marcarError(fecha, '#eFecha',
        !fecha.value ? 'Selecciona una fecha.' :
        (fecha.value < fechaInput.min ? 'La fecha no puede ser en el pasado.' : '')) && ok;
  ok = marcarError(hora, '#eHora', hora.value ? '' : 'Elige una hora de reserva.') && ok;
  ok = marcarError(personas, '#ePersonas', personas.value ? '' : 'Indica el número de personas.') && ok;

  if (!ok){ $('.campo.invalido input, .campo.invalido select')?.focus(); return; }

  /* Mensaje de confirmación animado */
  const datos = {
    nombre: nombre.value.trim(),
    fecha: new Date(fecha.value + 'T00:00:00').toLocaleDateString('es-CO', {weekday:'long', day:'numeric', month:'long', year:'numeric'}),
    hora: hora.value, personas: personas.value
  };
  $('#contenedorFormReserva').innerHTML = `
    <div class="confirmacion">
      <div class="check" aria-hidden="true">✓</div>
      <h3>¡Reserva confirmada, ${datos.nombre}!</h3>
      <p>Te esperamos el <strong>${datos.fecha}</strong> a las <strong>${datos.hora}</strong> para <strong>${datos.personas} persona${datos.personas === '1' ? '' : 's'}</strong>.</p>
      <p style="margin-top:.7rem">Enviaremos la confirmación a tu teléfono. Si necesitas cambiar algo, llámanos al +57 300 123 4567.</p>
      <button class="btn btn-dorado" id="otraReserva">Hacer otra reserva</button>
    </div>`;
  $('#otraReserva').addEventListener('click', () => location.reload());
});

/* ============================================================
   9. GALERÍA CON LIGHTBOX Y NAVEGACIÓN POR FLECHAS
   ============================================================ */
const galeriaGrid = $('#galeriaGrid'), lightbox = $('#lightbox'), lbImg = $('#lbImg'), lbPie = $('#lbPie');
let lbIndex = 0;

galeriaGrid.innerHTML = GALERIA.map((g, i) => `
  <figure class="galeria-item" data-idx="${i}" tabindex="0" role="button" aria-label="Ampliar: ${g.alt}">
    <img src="${g.src}" alt="${g.alt}" loading="lazy">
  </figure>`).join('');

function abrirLightbox(i){
  lbIndex = (i + GALERIA.length) % GALERIA.length;
  lbImg.src = GALERIA[lbIndex].src;
  lbImg.alt = GALERIA[lbIndex].alt;
  lbPie.textContent = `${lbIndex + 1} / ${GALERIA.length} — ${GALERIA[lbIndex].alt}`;
  lightbox.classList.add('abierto');
  document.body.style.overflow = 'hidden';
  $('#lbCerrar').focus();
}
function cerrarLightbox(){
  lightbox.classList.remove('abierto');
  document.body.style.overflow = '';
}
$$('.galeria-item', galeriaGrid).forEach(fig => {
  fig.addEventListener('click', () => abrirLightbox(+fig.dataset.idx));
  fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); abrirLightbox(+fig.dataset.idx); } });
});
$('#lbCerrar').addEventListener('click', cerrarLightbox);
$('#lbAnterior').addEventListener('click', () => abrirLightbox(lbIndex - 1));
$('#lbSiguiente').addEventListener('click', () => abrirLightbox(lbIndex + 1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('abierto')) return;
  if (e.key === 'Escape') cerrarLightbox();
  if (e.key === 'ArrowLeft') abrirLightbox(lbIndex - 1);
  if (e.key === 'ArrowRight') abrirLightbox(lbIndex + 1);
});

/* ============================================================
   10. CONTADORES ANIMADOS DE LA HISTORIA
   ============================================================ */
function animarContador(el){
  const objetivo = +el.dataset.objetivo, sufijo = el.dataset.sufijo || '';
  const duracion = 2000, inicio = performance.now();
  const paso = ahora => {
    const p = Math.min((ahora - inicio) / duracion, 1);
    const suave = 1 - Math.pow(1 - p, 3);            // easeOutCubic
    el.textContent = Math.round(objetivo * suave).toLocaleString('es-CO') + (p === 1 ? sufijo : '');
    if (p < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

/* ============================================================
   11. TESTIMONIOS EN CARRUSEL AUTOMÁTICO
   ============================================================ */
const carrusel = $('#carrusel'), puntosTest = $('#puntosTest');
carrusel.innerHTML = TESTIMONIOS.map((t, i) => `
  <div class="t-slide${i === 0 ? ' activa' : ''}" role="tabpanel">
    <div class="estrellas" aria-label="Calificación ${t.estrellas} de 5 estrellas">${'★'.repeat(t.estrellas)}${'☆'.repeat(5 - t.estrellas)}</div>
    <blockquote>“${t.texto}”</blockquote>
    <div class="autor">
      <img src="${t.foto}" alt="Foto de ${t.nombre}" loading="lazy">
      <div><b>${t.nombre}</b><small>${t.rol}</small></div>
    </div>
  </div>`).join('');
puntosTest.innerHTML = TESTIMONIOS.map((_, i) =>
  `<button class="${i === 0 ? 'activa' : ''}" data-idx="${i}" aria-label="Ver testimonio ${i + 1}"></button>`).join('');

let slideActual = 0, relojCarrusel;
function irASlide(i){
  slideActual = (i + TESTIMONIOS.length) % TESTIMONIOS.length;
  $$('.t-slide', carrusel).forEach((s, k) => s.classList.toggle('activa', k === slideActual));
  $$('button', puntosTest).forEach((b, k) => b.classList.toggle('activa', k === slideActual));
}
function iniciarCarrusel(){ relojCarrusel = setInterval(() => irASlide(slideActual + 1), 5500); }
function pararCarrusel(){ clearInterval(relojCarrusel); }
$$('button', puntosTest).forEach(b => b.addEventListener('click', () => { pararCarrusel(); irASlide(+b.dataset.idx); iniciarCarrusel(); }));
carrusel.addEventListener('mouseenter', pararCarrusel);
carrusel.addEventListener('mouseleave', iniciarCarrusel);
iniciarCarrusel();

/* ============================================================
   12. PREGUNTAS FRECUENTES (ACORDEÓN)
   ============================================================ */
$('#faqLista').innerHTML = FAQS.map((f, i) => `
  <div class="faq-item">
    <button class="faq-preg" aria-expanded="false" aria-controls="faq-res-${i}" id="faq-btn-${i}">
      ${f.p}<span class="flecha" aria-hidden="true">＋</span>
    </button>
    <div class="faq-resp" id="faq-res-${i}" role="region" aria-labelledby="faq-btn-${i}"><p>${f.r}</p></div>
  </div>`).join('');

$$('.faq-preg').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.parentElement, panel = $('.faq-resp', item);
  const abierto = item.classList.toggle('abierto');
  btn.setAttribute('aria-expanded', abierto);
  panel.style.maxHeight = abierto ? panel.scrollHeight + 'px' : 0;
}));

/* ============================================================
   13. TEMPORIZADOR DE LA OFERTA (cuenta hasta medianoche)
   ============================================================ */
function actualizarTemporizador(){
  const ahora = new Date();
  const fin = new Date(ahora); fin.setHours(24, 0, 0, 0);   // medianoche
  let resto = Math.max(0, fin - ahora) / 1000;
  const h = Math.floor(resto / 3600), m = Math.floor((resto % 3600) / 60), s = Math.floor(resto % 60);
  $('#tHoras').textContent = String(h).padStart(2,'0');
  $('#tMin').textContent   = String(m).padStart(2,'0');
  $('#tSeg').textContent   = String(s).padStart(2,'0');
}
actualizarTemporizador();
setInterval(actualizarTemporizador, 1000);

/* ============================================================
   14. FORMULARIO DE CONTACTO Y NEWSLETTER
   ============================================================ */
$('#formContacto').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = $('#cNombre'), email = $('#cEmail'), mensaje = $('#cMensaje');
  let ok = true;
  ok = marcarError(nombre, '#ecNombre', nombre.value.trim().length < 2 ? 'Escribe tu nombre.' : '') && ok;
  ok = marcarError(email, '#ecEmail', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? '' : 'Correo electrónico inválido.') && ok;
  ok = marcarError(mensaje, '#ecMensaje', mensaje.value.trim().length < 10 ? 'Cuéntanos algo más (mínimo 10 caracteres).' : '') && ok;
  if (!ok) return;
  $('#msgContacto').textContent = '✓ ¡Mensaje enviado! Te responderemos muy pronto. Grazie!';
  e.target.reset();
});

$('#formNews').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#emailNews'), msg = $('#msgNews');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())){
    msg.style.color = '#e08a8a';
    msg.textContent = '✕ Ingresa un correo válido.';
    return;
  }
  msg.style.color = '#9ec46a';
  msg.textContent = '✓ ¡Gracias por suscribirte! Revisa tu correo.';
  e.target.reset();
});

/* ============================================================
   15. ANIMACIONES AL HACER SCROLL (REVEAL + CONTADORES)
   ============================================================ */
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('visible');
    if (en.target.classList.contains('contador')) animarContador(en.target.querySelector('.contador-num'));
    observador.unobserve(en.target);
  });
}, {threshold:.18});

$$('.reveal').forEach(el => observador.observe(el));
$$('.contador').forEach(el => observador.observe(el));

/* ============================================================
   16. DETALLE FINAL: AÑO ACTUAL
   ============================================================ */
$('#anio').textContent = new Date().getFullYear();