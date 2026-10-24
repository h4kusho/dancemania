/* ============================================================================
   DANCE MANIA — ФАЙЛ ДАННЫХ САЙТА
   ----------------------------------------------------------------------------
   Откройте этот файл в обычном Блокноте — менять код не нужно, только тексты.
   Правила (их всего три):
   1. Меняйте только то, что стоит МЕЖДУ кавычками "..." или цифры (цены).
   2. Не удаляйте запятые в конце строк и скобки { } [ ].
   3. Сохраните файл (Ctrl+S) и обновите страницу в браузере (F5).

   КАК ИЗМЕНИТЬ ЦЕНУ:     найдите товар по названию → поменяйте число в  price: 1290
   КАК ЗАМЕНИТЬ ФОТО:     поменяйте ссылку в  photo: "https://..."
                          (можно вставить ссылку с любого сайта или положить файл
                          в папку images/ и написать  photo: "images/foto1.jpg")
   КАК ДОБАВИТЬ ТОВАР:    скопируйте любой блок { ... }, вставьте после него
                          и поменяйте значения. Не забудьте запятую после } !
   КАК УБРАТЬ ТОВАР:      удалите весь блок от { до }, (или поставьте перед
                          блоком две косые черты  //  в каждой строке).
   ============================================================================ */

window.SITE = {

  /* ───────────── 1. БРЕНД И ЛОГОТИП ───────────── */
  brand: {
    name: "Dance Mania",
    tagline: "Одежда и обувь для танцев · Екатеринбург",
    logo: "https://dancemania.store/image/catalog/logo2%20%281%29%20%282%29.png",
    footerLogo: "https://dancemania.store/image/logo-footer.png",
    year: 2020                       // год основания (для подвала)
  },

  /* ───────────── 2. ЦВЕТА (HEX-коды) ───────────── */
  theme: {
    accent: "#c0365f",               // главный цвет кнопок и акцентов
    dark:   "#1d1720"                // цвет тёмных блоков и заголовков
  },

  /* ───────────── 3. КОНТАКТЫ ───────────── */
  contacts: {
    address: "г. Екатеринбург, ул. Радищева, 4",
    addressNote: "Напротив ТРЦ «Гринвич», перекрёсток ул. 8 Марта — ул. Радищева. Вход в магазин «Музторг», павильон 219",
    hours: [
      { days: "Пн–Сб", time: "10:00–20:00" },
      { days: "Вс",    time: "10:00–19:00" }
    ],
    phones: [
      { label: "Наличие товара", text: "8-992-004-06-44", tel: "+79920040644" },
      { label: "Оптовые заказы", text: "8-908-908-83-44", tel: "+79089088344" }
    ],
    email: "dancemania_ekb@mail.ru",
    vk: "https://vk.com/danceman_ekb",
    instagram: "https://www.instagram.com/dancemania_ekb/",
    // Карта (координаты магазина). Менять не нужно, если адрес прежний.
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=60.5900%2C56.8260%2C60.6090%2C56.8350&layer=mapnik&marker=56.830831%2C60.599502",
    mapLink: "https://yandex.ru/maps/?pt=60.599502,56.830831&z=17&l=map"
  },

  /* ───────────── 4. ГЛАВНЫЙ ЭКРАН ───────────── */
  hero: {
    eyebrow: "Магазин танцевальной одежды",
    title: "Одежда для танцев, в которой хочется двигаться",
    text: "Профессиональная форма для бальных и спортивных танцев, хореографии и художественной гимнастики. Только проверенные производители по честным ценам — с примеркой в магазине в центре Екатеринбурга.",
    image: "https://dancemania.store/image/catalog/odejda.jpg",
    ctaText: "Смотреть каталог",
    ctaSecondaryText: "Как нас найти",
    // Цифры под заголовком (можно менять/удалять)
    stats: [
      { value: "1 200+", label: "товаров в каталоге" },
      { value: "6 лет",  label: "работаем в Екатеринбурге" },
      { value: "Опт",    label: "и скидки постоянным клиентам" }
    ]
  },

  /* ───────────── 5. КАТЕГОРИИ (кнопки-фильтры) ─────────────
     id — короткое слово латиницей (оно же указывается у товара в category) */
  categories: [
    { id: "skirts",  name: "Юбки" },
    { id: "tops",    name: "Топы и боди" },
    { id: "shorts",  name: "Шорты и велосипедки" },
    { id: "gym",     name: "Художественная гимнастика" }
  ],

  /* ───────────── 6. ТОВАРЫ ─────────────
     name     — название
     price    — цена в рублях, ТОЛЬКО ЦИФРЫ без пробелов
     oldPrice — старая цена для скидки (необязательно, можно удалить строку)
     badge    — плашка на фото: "Хит", "Новинка" и т.п. (необязательно)
     photo    — ссылка на фото
     url      — страница товара на текущем сайте (кнопка «Подробнее»)
     category — id категории из списка выше */
  products: [
    {
      name: "Юбка-платок «Бахрома» Ens, сетка 2",
      price: 1290,
      category: "skirts",
      photo: "https://dancemania.store/image/cache/catalog/15-228x228.jpg",
      url: "https://dancemania.store/yubka-platok-bahroma-ens-setka-2"
    },
    {
      name: "Юбка-платок «Бахрома» Ens, сетка 3",
      price: 1890,
      category: "skirts",
      photo: "https://dancemania.store/image/cache/catalog/%D1%8E%D0%B1%D0%BA%D0%B0%20%D0%BF%D0%BB%D0%B0%D1%82%D0%BE%D0%BA%20%D1%81%D0%B5%D1%82%D0%BA%D0%B0%201-228x228.jpg",
      url: "https://dancemania.store/yubka-platok-bahroma-ens-setka-3"
    },
    {
      name: "Юбка-платок «Бахрома» Atel",
      price: 1290,
      category: "skirts",
      photo: "https://dancemania.store/image/cache/catalog/%D1%8E%D0%B1%D0%BA%D0%B0%20%D0%B7-228x228.jpg",
      url: "https://dancemania.store/yubka-platok-bahromaatel"
    },
    {
      name: "Юбка-платок «Бахрома» Atel, леопард",
      price: 1900,
      category: "skirts",
      photo: "https://dancemania.store/image/cache/catalog/glook19-3-16-4-228x228.jpg",
      url: "https://dancemania.store/yubka-platok-bahromaatel-leo"
    },
    {
      name: "Велошорты Mids Mesh, белые",
      price: 1550,
      category: "shorts",
      photo: "https://dancemania.store/image/cache/catalog/188/DSC_7198%20%281%29-228x228.jpg",
      url: "https://dancemania.store/1-veloshorty-mid-net-drop-white"
    },
    {
      name: "Лента Chacott 4 м Junior, Purple",
      price: 2100,
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/%D0%9B%D0%B5%D0%BD%D1%82%D0%B0%20Chacott%204%D0%BC%20Junior%20%D1%86%D0%B2.%20Purple%20Art.%2098077-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-4m-junior-col-purple"
    },
    {
      name: "Лента Chacott 4 м Junior, Aqua Blue",
      price: 2100,
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/%D0%9B%D0%B5%D0%BD%D1%82%D0%B0%20Chacott%204%D0%BC%20Junior%20%D1%86%D0%B2.%20Aqua%20Blue%20Art.%2098023-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-4m-junior-cv-aqua-blue"
    },
    {
      name: "Лента Chacott 5 м Gradation, Coral FIG",
      price: 4000,
      badge: "FIG",
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/%D0%9B%D0%B5%D0%BD%D1%82%D0%B0%20Chacott%205%D0%BC%20Gradation%20%D1%86%D0%B2.%20Coral%20FIG%20Art.%2098750-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-5m-gradation-cv-coral-fig"
    },
    {
      name: "Лента Chacott 5 м Medium, Pink FIG",
      price: 2200,
      badge: "FIG",
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/Ribbon-Chacott_58043-Pink-New_FIG-0-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-5m-medium-cv-pink-fig"
    },
    {
      name: "Лента Chacott 6 м, Aqua Blue FIG",
      price: 2300,
      badge: "FIG",
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/Ribbon-Chacott_58023-Aqua_Blue-New_FIG-0-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-6m-cv-aqua-blue-fig"
    },
    {
      name: "Лента Chacott 6 м, Blue FIG",
      price: 2300,
      badge: "FIG",
      category: "gym",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/Ribbon-Chacott_58025-Blue-New_FIG-0-228x228.jpg",
      url: "https://dancemania.store/lenta-chacott-6m-cv-blue-fig"
    },
    {
      name: "Топ Rombo Primabella",
      price: 2490,
      category: "tops",
      photo: "https://dancemania.store/image/cache/catalog/cf38fd667818e1a714ac0c61a8091a63-228x228.jpg",
      url: "https://dancemania.store/bluza-top-rombo"
    },
    {
      name: "Боди Bali, леопард классический",
      price: 1990,
      category: "tops",
      photo: "https://dancemania.store/image/cache/catalog/%D0%B8%D1%8E%D0%BD%D1%8C%202024/DMAlina_by_Dariarock-259-228x228.jpg",
      url: "https://dancemania.store/0-bodi-bali-leopard-klassicheskij"
    },
    {
      name: "Боди Malibuc, light gold",
      price: 2990,
      category: "tops",
      photo: "https://dancemania.store/image/cache/catalog/%D0%9A%D0%BE%D0%BD%D0%BE%D0%BF%D0%BB%D1%8F/IMG_6655-228x228.jpg",
      url: "https://dancemania.store/0-bodi-malibuc"
    },
    {
      name: "Боди Malibuc, лунно-синий",
      price: 2990,
      category: "tops",
      photo: "https://dancemania.store/image/cache/catalog/%D0%9A%D0%BE%D0%BD%D0%BE%D0%BF%D0%BB%D1%8F/IMG_6511-228x228.jpg",
      url: "https://dancemania.store/0-bodi-malibuc-lunnyj-sinij"
    }
  ],

  // Сколько всего товаров на старом сайте и куда ведёт кнопка «Весь каталог»
  catalogTotal: "1 200+",
  catalogUrl: "https://dancemania.store/odezhda",

  /* ───────────── 7. ПРЕИМУЩЕСТВА ─────────────
     icon — один из: hanger, tag, store, scissors, truck, heart */
  advantages: [
    { icon: "hanger",   title: "Большой выбор",       text: "Более 1 200 позиций: от тренировочных топов до костюмов для конкурсов и гимнастических лент Chacott." },
    { icon: "store",    title: "Примерка в магазине", text: "Приходите в павильон 219 на Радищева, 4: подберём размер и фасон, чтобы одежда не стесняла движения." },
    { icon: "tag",      title: "Опт и скидки",        text: "Выгодные условия для школ, студий и постоянных клиентов Екатеринбурга. Звоните по оптовому номеру." },
    { icon: "scissors", title: "Собственное ателье",  text: "Пошив и подгонка костюмов под ваши параметры — отдельный раздел «Ателье» в нашем каталоге." }
  ],

  /* ───────────── 8. ОТЗЫВЫ ─────────────
     ВНИМАНИЕ: сейчас здесь ПРИМЕРЫ для демонстрации дизайна (помечены на сайте
     плашкой «Макет»). Замените на реальные отзывы клиентов и удалите строку
     demo: true — плашка пропадёт. Если отзывов нет — оставьте reviews: [],
     и блок скроется сам. */
  reviews: [
    { name: "Имя клиента",  role: "Мама танцовщицы",   text: "Здесь будет настоящий отзыв клиента о магазине, качестве одежды или удобстве заказа.", demo: true },
    { name: "Имя клиента",  role: "Тренер бальных танцев", text: "Здесь будет настоящий отзыв клиента о магазине, качестве одежды или удобстве заказа.", demo: true },
    { name: "Имя клиента",  role: "Гимнастка",          text: "Здесь будет настоящий отзыв клиента о магазине, качестве одежды или удобстве заказа.", demo: true }
  ],

  /* ───────────── 9. ФОРМЫ ЗАЯВОК ─────────────
     mode — куда отправлять заявки (выберите ОДИН вариант):
       "demo"      — ничего не отправляется, форма только показывает «Спасибо»
                     (для показа клиенту — рабочий режим по умолчанию)
       "telegram"  — заявки приходят в Telegram (инструкция ниже)
       "email"     — заявки приходят на почту (через бесплатный FormSubmit.co)

     TELEGRAM за 3 минуты:
       1) В Telegram откройте @BotFather → /newbot → получите токен
          (длинная строка вида 123456:ABC-DEF...) → вставьте в botToken
       2) Напишите своему новому боту любое сообщение
       3) Откройте в браузере  https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
          найдите  "chat":{"id": 123456789  → это ваш chatId
       ⚠ Токен виден в коде страницы. Для демо это нормально; для боевого
         сайта лучше режим "email" или пересылка через сервер.

     EMAIL: впишите адрес в email.to. При первой заявке FormSubmit пришлёт
            письмо с кнопкой «Подтвердить» — нажмите её один раз. */
  form: {
    mode: "demo",
    telegram: { botToken: "", chatId: "" },
    email: { to: "dancemania_ekb@mail.ru" },
    successText: "Спасибо! Заявка отправлена — мы свяжемся с вами в ближайшее время."
  }
};
