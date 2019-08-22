import { sobayasType } from '../common/types';

const sobayas: sobayasType = [
  {
    id: 'osakaya_sunaba',
    name: {
      jp: '大阪屋 砂場',
      en: 'Osakaya Sunaba',
      hiragana: 'おおさかや　すなば',
    },
    neighborhood: 'Toranomon',
    address: '1-10-6, Toranomon, Minato, Tokyo 105-0001',
    googlemaps: 'https://goo.gl/maps/vA5QGn71YHH2',
    fsq: '4bc3f589f8219c7427deb610',
    coords: { lat: 35.66822545367157, lng: 139.75069642066956 },
    pick: { jp: 'せいろ', en: 'Seiro' },
    review: {
      en:
        'Carrying the name of Sunaba, meaning "sandbox", this historic soba place has its origin in Osaka. With over a hundred years of history, the building is registered as a cultural property by the government. If you are not a big fan of soba, you should see this beautiful building and feel the authentic soba-place vibe inside. Oh yes.',
      jp:
        'とにかく建物自体がよい。夕方くらいに交差点の反対側から見るととても美しい2階建ての建物にうっとりする。中もとてもよい雰囲気で、なんども通いたくなる。おそばもおいしいのだが、カレーうどんもおいしい。',
    },
    big3: 'sunaba',
    vibe: ['traditional'],
  },
  {
    id: 'matsunaga',
    name: {
      jp: '松永',
      en: 'Matsunaga',
      hiragana: 'まつなが',
    },
    neighborhood: 'Jingumae',
    address: 'Jingumae 2-19-12, Shibuya, Tokyo 150-0001',
    googlemaps: 'https://goo.gl/maps/PdXi9rijKLB2',
    fsq: '4bc294a7461576b0ecab7d32',
    coords: { lat: 35.673569558713105, lng: 139.71011635849277 },
    pick: {
      jp: 'ざるそば',
      en: 'Zaru Soba',
    },
    review: {
      en:
        'Small and very neat place between Sendagaya and Omotesando. You may sense a bit of hipster vibe when you look around. Noodles are cooked perfectly, relatively thin and a little firm, and I like it. Nice soba.',
      jp:
        'おしゃれな町並みのなかにあるだけあって、おしゃれな人率がたかい。すこし固めに茹でられている印象で個人的には好き。雰囲気はきれいでありながらも、硬すぎない。もりそばとざるそばって何がちがうんだっけ、という疑問に悩まされる。カウンター細めの麺。',
    },
    vibe: ['traditional', 'modern'],
  },
  {
    id: 'asahiya',
    name: {
      jp: '朝日屋',
      en: 'Asahiya',
      hiragana: 'あさひや',
    },
    neighborhood: 'Mita',
    address: 'Shiba 5-14-12, Minato, Tokyo 108-0014',
    googlemaps: 'https://goo.gl/maps/vqoVC6qtGoD2',
    fsq: '4bb6b5566edc76b0b26b311c',
    coords: { lat: 35.647987119944425, lng: 139.74446479406564 },
    pick: {
      jp: '天おろし',
      en: 'Ten Oroshi',
    },
    review: {
      en:
        'One of the most easy-going soba place on Sobasquare. You can even enjoy baseball game on the TV, I guess. The atmosphere almost makes you to want to order too much. Variety of side menus such as "Potato salad". Mita\'s "salary-man" vibe.',
      jp:
        'Sobasquareの中でももっとも easy-going なお蕎麦屋さんのひとつ。1階にはTVあり、野球の中継が楽しめる。なんだか、「固くならなくていいんだよ」と語りかけられているような雰囲気で、目に飛び込んでくる「ポテトサラダ」などそば意外のものも注文したくなる。天おろしのつめたいやつを食べて、おいしい。三田のサラリーマン率が高い。',
    },
    vibe: ['casual'],
  },
  {
    id: 'tamawarai',
    name: {
      jp: '玉笑',
      en: 'Tamawarai',
      hiragana: 'たまわらい',
    },
    neighborhood: 'Omotesando',
    address: 'Jingūmae 5-23-3, Shibuya, Tokyo 150-0001',
    googlemaps: 'https://goo.gl/maps/F9HA2rjSi6L2',
    fsq: '4e2264d562e1964dbb71fa6d',
    coords: { lat: 35.66450796317949, lng: 139.70461370807925 },
    pick: {
      jp: '粗挽きせいろ',
      en: 'Arabiki Seiro',
    },
    review: {
      en:
        'Highly acclaimed Michelin-Star soba place in Meiji-jingu. Nice flavorful and beautiful soba noodles are served in sophisticated space. Arabiki Seiro, meaning coarse-ground, is strongly recommended must-have menu. Also Sobagaki and Tofu dishes. Reservation recommended.',
    },
    vibe: ['modern'],
  },
  {
    id: 'muromachi_sunaba',
    name: {
      jp: '室町砂場',
      en: 'Muromachi Sunaba',
      hiragana: 'むろまちすなば',
    },
    neighborhood: 'Akasaka',
    address: 'Akasaka 6-3-5, Minato, Tokyo 107-0062',
    googlemaps: 'https://goo.gl/maps/ZwFRKHjqSfv',
    fsq: '4b5693daf964a520aa1528e3',
    coords: { lat: 35.671166, lng: 139.736184 },
    pick: {
      jp: 'もり',
      en: 'Mori',
    },
    big3: 'sunaba',
    vibe: ['traditional'],
    review: {
      en:
        "One of the most beloved soba place in Tokyo. This historical sobaya sits quietly on the narrow street right beside Akasaka Station. It's small but very rich sobaya feeling. If you are lucky, you can take the Tatami seat on the back. Straight forward flavoful Sunaba style soba. You might want to go with Omiri(big size).",
    },
  },
  {
    id: 'yusui',
    name: {
      jp: '湧水',
      en: 'Yusui',
      hiragana: 'ゆうすい',
    },
    neighborhood: 'Chofu',
    address: 'Jindaiji Motomachi 5-9-1, Chofu, Tokyo 182-0017',
    googlemaps: 'https://goo.gl/maps/c2NHsb47WVr',
    fsq: '4b6fa4daf964a520e4f82ce3',
    coords: { lat: 35.66761350347936, lng: 139.54694504363616 },
    pick: {
      jp: '湧水そば',
      en: 'Yusui Soba',
    },
    vibe: ['traditional', 'casual'],
    review: {
      en: '',
      jp: '',
    },
  },
  {
    id: 'nagasaka_sarashina_nunoya_tahee',
    name: {
      jp: '永坂更科 布屋太兵衛',
      en: 'Nagasaka Sarashina Nunoya Tahee',
      hiragana: 'ながさかさらしな　ぬのやたへい',
    },
    neighborhood: 'Azabu Juban',
    address: 'Azabujūban 1-8-7, Minato, Tokyo 106-0045',
    googlemaps: 'https://goo.gl/maps/78NUdR34w8w',
    fsq: '4c3c53197f49c9b6a5aa6be3',
    coords: { lat: 35.655785, lng: 139.735781 },
    pick: {
      jp: 'なめこそば（生粉打）',
      en: 'Nameko Soba',
    },
    big3: 'sarashina',
    vibe: ['traditional'],
    url: 'http://www.nagasakasarasina.co.jp/index.html',
    review: {
      en:
        'The flagship of over 20 places of Tahee\'s family. Originally founded in Azabu-juban by the man who was selling fabric (also good at making soba) a long time ago. Clean, plenty of seats, traditional but friendly vibe. Noodles come with two types of dipping soup, labeled "Spicy" and "Sweet", and to be really honest, "Spicy" is not spicy at all. Frankly it\'s "Sweet" and "Slightly less sweet".',
    },
  },
  {
    id: 'kanzesui',
    name: {
      jp: '観世水',
      en: 'Kanzesui',
      hiragana: 'かんぜすい',
    },
    neighborhood: 'Akasaka',
    address: 'Akasaka 3-12-22 B1F, Minato, Tokyo 107-0052',
    googlemaps: 'https://goo.gl/maps/ud87UUGKn9x',
    fsq: '4ba83510f964a52051d139e3',
    coords: { lat: 35.674314140162565, lng: 139.7376952013867 },
    pick: {
      jp: '田舎そば',
      en: 'Inaka Soba',
    },
    vibe: ['modern', 'casual'],
  },
  {
    id: 'honmura_an',
    name: {
      jp: '本むら庵',
      en: 'Honmura An',
      hiragana: 'ほんむらあん',
    },
    neighborhood: 'Roppongi',
    address: 'Roppongi 7-14-18, Minato, Tokyo 106-0032',
    googlemaps: 'https://goo.gl/maps/M6wusTwwj8R2',
    fsq: '4c0b2058bbc676b0152c4bd5',
    coords: { lat: 35.663327112759944, lng: 139.7306648673925 },
    pick: {
      jp: 'せいろ',
      en: 'Seiro',
    },
    review: {
      en:
        "Nice soba place close to Roppongi station. They once had a soba restaurant in New York city but it's now closed. You might feel modern vibe inside and of course soba and tasty dipping sauce are great. Seems like something with Uni (sea urchin) is a thing but I've never tried yet. Look forward to next visit.",
      jp: '',
    },
    vibe: ['modern'],
  },
  {
    id: 'kaoriya',
    name: {
      jp: '香り家',
      en: 'Kaoriya',
      hiragana: '',
    },
    neighborhood: 'Ebisu',
    address: 'Ebisu 4-3-10,Shibuya, Tokyo 150-0013',
    googlemaps: 'https://goo.gl/maps/9VCbwJL7AaJ2',
    fsq: '4b5adf08f964a52030d828e3',
    coords: { lat: 35.64569911831459, lng: 139.7119438648224 },
    pick: {
      jp: 'そば切り',
      en: 'Sobakiri',
    },
    url: 'http://foodgate.net/shop/kaoriya.html',
    vibe: ['modern', 'casual'],
  },
  {
    id: 'kanda_yabusoba',
    name: {
      jp: 'かんだやぶそば',
      en: 'Kanda Yabusoba',
      hiragana: 'かんだ　やぶそば',
    },
    neighborhood: 'Kanda Awajicho',
    address: 'Kanda Awajicho 2-10, Chiyoda, Tokyo 101-0063',
    googlemaps: 'https://goo.gl/maps/isM2csp9maD2',
    fsq: '4b8a2256f964a520646132e3',
    coords: { lat: 35.696997829457445, lng: 139.76867727935314 },
    url: 'http://www.yabusoba.net/',
    pick: {
      jp: 'せいろうそば、なめこそば',
      en: 'Seirou Soba, Nameko Soba',
    },
    review: {
      en:
        'A successor to Yabu Soba, one of The Big Three of Soba. This old-school place in Kanda, once suffered from a fire in 2013 after over a hundred years of its history, successfully made a comeback in 2014 and people are delighted. Some people talk about "the good old days" before the fire, but who cares. Just have a nice soba.',
    },
    big3: 'yabu',
    vibe: ['traditional'],
  },

  {
    id: 'kanda_matsuya',
    name: {
      jp: 'かんだまつや',
      en: 'Kanda Matsuya',
      hiragana: 'かんだ　まつや',
    },
    neighborhood: 'Kanda Sudacho',
    address: '1 Chome-13 Kanda Sudacho, Chiyoda, Tokyo 101-0041',
    googlemaps: 'https://goo.gl/maps/vB4bmTUW3nS2',
    fsq: '4b568608f964a520ea1328e3',
    coords: { lat: 35.696122436509405, lng: 139.76877804030664 },
    pick: {
      jp: 'やまかけ',
      en: 'Yamakake',
    },
    review: {
      en:
        'Another prestigious soba place in Kanda. Good-looking old building, nice staffs, and above all it has amazing atmosphere harmonized with their great dishes and service. It is, literally, lively but relaxing for some reason. I like "Yamakake" which is cold soba noodle with Japanese yam\'s soup.',
      jp:
        '雰囲気がとてもいい。人気も高く、ヴァイブスがかなりよい。なんだか、昔の蕎麦屋さんってこんな感じだったんだろうかというかんじ。店員さんは、「せわしない」という言葉がぴったりだ。気分もよくなるので、ついつい何かいつもと違うものを食べたくなる。私は「山かけ」が大好きだ。黄金に輝いた表面を見ると、うっとりしてしまう。冷たい麺をぜひすすりたい。',
    },
    vibe: ['traditional'],
  },
  {
    id: 'shirou',
    name: {
      jp: 'しろう',
      en: 'Shirou',
      hiragana: 'しろう',
    },
    neighborhood: 'Omotesando',
    address: 'Jingumae 3-5-1, Shibuya, Tokyo 150-0001',
    googlemaps: 'https://goo.gl/maps/ssbGUS5hujt',
    fsq: '4b8a2256f964a520646132e3',
    coords: { lat: 35.696997829457445, lng: 139.76867727935314 },
    pick: {
      jp: '粗挽き',
      en: 'Arabiki',
    },
    vibe: ['traditional', 'modern'],
    review: {
      en:
        'Relaxed, quiet soba place in Omotesando. Given the location and the quality, always busy especially at lunch time. The coarse-ground soba is the best way to taste rich soba flavor.',
    },
    url: 'http://www.shiro-tokyo.jp',
  },
  {
    id: 'toshian',
    name: {
      jp: '利庵',
      en: 'Toshian',
      hiragana: 'としあん',
    },
    neighborhood: 'Shirokanedai',
    address: 'Shirokanedai 5-17-2, Minato, Tokyo 108-0071',
    googlemaps: 'https://goo.gl/maps/V38aUyuK5n42',
    fsq: '4b234413f964a520cc5424e3',
    coords: { lat: 35.63770283027483, lng: 139.72357039903517 },
    pick: {
      jp: 'ゆず切りそば',
      en: 'Yuzukiri Soba',
    },
    review: {
      en:
        "Remodeled Japanese-style old house creates traditional but friendly vibe. Given that location, Shirokanedai, in other words Polk Street of Tokyo, you'd pick up classy and yet cozy feelings along the way. Yuzu-kiri (Yuzu flavored soba noodles) is especially perfect for hot days. Seems like Tenpura and Dashimaki-tamago are very popular, too.",
    },
    vibe: ['casual', 'traditional'],
  },
  {
    id: 'shogetsu',
    name: {
      jp: '松月',
      en: 'Shogetsu',
      hiragana: 'しょうげつ',
    },
    neighborhood: 'Shirokane',
    address: 'Shirokane 5-7-12, Minato, Tokyo 108-0072',
    googlemaps: 'https://goo.gl/maps/yzM59UnFoU92',
    fsq: '4bc4291bf8219c74d707b710',
    coords: { lat: 35.64407177834142, lng: 139.7276585122843 },
    pick: {
      jp: '松月せいろ',
      en: 'Shogetsu Seiro',
    },
    review: {
      en:
        'One of the most easy-going soba place on Sobasquare. While the location, Shirokane, is recognized as an affluent neighborhood, this place is very casual and relaxed. The original menu, Shogetsu Seiro comes with somewhat sweet dipping soup and hot noodles. 10 min walk from Shirokane-Takanawa Station.',
    },
    vibe: ['casual'],
  },
  {
    id: 'hoteiya',
    name: {
      jp: '布袋屋',
      en: 'Hoteiya',
      hiragana: 'ほていや',
    },
    neighborhood: 'Higashi Azabu',
    address: 'Higashi-Azabu 1-7-2, Minato, Tokyo 106-0044',
    googlemaps: 'https://goo.gl/maps/YgMAsbzqmDF2',
    fsq: '4f1e2694e4b0475df9cdfed7',
    coords: { lat: 35.657808630397646, lng: 139.74368515566425 },
    pick: {
      jp: '三とろ',
      en: 'Santoro',
    },
    vibe: ['casual'],
  },
  {
    id: 'nioka',
    name: {
      jp: '二丘',
      en: 'Nioka',
      hiragana: '',
    },
    neighborhood: 'Shirokane Takanawa',
    address: 'Takanawa 1-4-21 2F, Minato, Tokyo, Japan',
    googlemaps: 'https://goo.gl/maps/qszFVHEeE27dWHDp6',
    fsq: '4c0dc430336220a1d64bcb77',
    coords: { lat: 35.643852, lng: 139.736016 },
    pick: {
      jp: 'もりそば',
      en: 'Mori Soba',
    },
    review: {
      en:
        'Nice and cozy soba place in Shirokane Takanawa, Noe Valley of Tokyo. Noodles have tender texture and are flavorful at the same time. There’s another entrance on the main street, not on the uphill on the back.',
      jp: '',
    },
    vibe: ['casual'],
  },
  {
    id: 'notoji',
    name: {
      jp: '能登治',
      en: 'Notoji',
      hiragana: 'のとじ',
    },
    neighborhood: 'Shimbashi',
    address: 'Shinbashi 3−7−5, Notoji Bldg 1F, Minato, Tokyo',
    googlemaps: 'https://goo.gl/maps/NyhY8yro5KafgKFw5',
    fsq: '4bf3788794af2d7fc08f3972',
    coords: { lat: 35.66549887652342, lng: 139.7550630569458 },
    pick: {
      jp: '胡麻せいろ',
      en: 'Goma(sesame) Seiro',
    },
    url: 'http://shinbashi.notoji.jp/',
    review: {
      en:
        'Small nice soba place in Shimbashi. They directly buy buckwheat flour from the contracted farm in Hokkaido. Feels traditional and yet easy-going atmosphere. As you might guess, abundant Shimbashi-salary-man vibe here. By the way, go check out their beautiful parallax website.',
      jp: '',
    },
    vibe: ['casual'],
  },
  {
    id: 'owariya',
    name: {
      jp: '尾張屋',
      en: 'Owariya',
      hiragana: 'おわりや',
    },
    neighborhood: 'Kanda Sudacho',
    address: '1-24-7 Kanda Sudacho, Chiyoda, Tokyo',
    googlemaps: 'https://goo.gl/maps/R9cH1kCnh2GMyXHx5',
    fsq: '4bfdf6fb8992a593c1f7acb0',

    coords: { lat: 35.69437172490809, lng: 139.770980535169 },
    pick: {
      jp: 'カレー南蛮',
      en: 'Curry namban',
    },
    review: {
      en:
        "Another cozy soba place in Kanda neighborhood. Having nearly 100 years of the history, they are well known for wide variety of food. Besides fine-tuned soba noodles, you can enjoy almost whatever you have in your mind like Tenpura, Yakitori and Sake. I guess it's great for Nomi-kai (Party-like use), too.",
      jp: '',
    },
    vibe: ['traditional', 'casual'],
  },
  {
    id: 'santoko',
    name: {
      jp: '山灯香',
      en: 'Santoko',
      hiragana: 'さんとうこう',
    },
    neighborhood: 'Mishuku',
    address: 'Taishido 1 Chome−4−35, Setagaya, Tokyo',
    googlemaps: 'https://goo.gl/maps/Ss4WdDoHuRP8f44f9',
    fsq: '4b55a829f964a520abea27e3',
    coords: { lat: 35.646719, lng: 139.677588 },
    pick: {
      jp: 'fill',
      en: 'fill',
    },
    url: 'http://foodgate.net/shop/santoko.html',
    review: {
      en:
        'As a brother of Kaoriya in Ebisu, they have that cool long tray-like soba plate. Somewhat thick and flavorful noodles are great. According to the website, the concept is "Jazz and soba". Yes. Also good for Izakaya-style use. Although bit far from the stations (Sangen-chaya or Ikejiri-Ohashi), it\'s worth to walk.',
      jp: '',
    },
    vibe: ['modern'],
  },
  {
    id: 'asada',
    name: {
      jp: 'あさだ',
      en: 'Asada',
      hiragana: 'あさだ',
    },
    neighborhood: 'Asakusa-bashi',
    address: '2-29-11 Asakusabashi, Taito, Tokyo',
    googlemaps: 'https://goo.gl/maps/ETrTeVLEoQptL5Rm9',
    fsq: '4d009e80ba1da1cdb4928928',
    coords: { lat: 35.69959922597898, lng: 139.78774806740597 },
    pick: {
      jp: 'せいろそば',
      en: 'Seiro soba',
    },
    url: 'https://www.asada-soba.co.jp',
    review: {
      en:
        'Opened over 150 years ago by the guy who was a grain merchant. Since then, it has been passed down for eight generations. With the spirit of Edo-mae, this iconic sobaya (Soba place) serves its own 100% buckwheat noodle, all sorts of small elegant dishes and sake.',
      jp: '',
    },
    vibe: ['traditional'],
  },
  {
    id: 'azabu_nagasaka_sarashina_hq',
    name: {
      jp: '麻布永坂更科本店',
      en: 'Azabu Nagasaka Sarashina HQ',
      hiragana: 'あざぶながさかさらしなほんてん',
    },
    neighborhood: 'Azabu Juban',
    address: '1-2-7 Azabujuban, Minato, Tokyo',
    googlemaps: 'https://goo.gl/maps/TqHojKWQywkGP6vb6',
    fsq: '4b56ef49f964a520ce1f28e3',
    coords: { lat: 35.6564766474301, lng: 139.73693673986588 },
    pick: {
      jp: '御膳そば',
      en: 'Gozen soba',
    },
    url: 'http://www.sarashina-honten.com',
    review: {
      en:
        'One of three Sarashina family members in Azabu-juban. The signature, Gozen Soba, is fine white soba noodles and very nice feeling. Plenty of option to order, including tasty Dashi-maki (Japanese-style omelet). Soba menus are smaller potion in general so that you have the room to enjoy different dishes and drinks.',
      jp: '',
    },
    big3: 'sarashina',
    vibe: ['traditional'],
  },
  {
    id: 'sanada',
    name: {
      jp: '真田',
      en: 'Sanada',
      hiragana: 'さなだ',
    },
    neighborhood: 'Ginza',
    address: '5-6-5 3F, Ginza, Chuo, Tokyo',
    googlemaps: 'https://goo.gl/maps/StqLSUqHbbjqLjdC8',
    fsq: '555304dd498e23b3f40a0027',
    coords: { lat: 35.671167955251235, lng: 139.7642431111445 },
    pick: {
      jp: 'fill',
      en: 'fill',
    },
    url: 'https://ginza-sanada.com',
    review: {
      en:
        'Nice and modern feeling soba place at the center of Ginza. They serve Shin-shu (Nagano Prefecture) style soba and very neat small appetizers like Tofu or Miso and other things. Another branch is  in Ginza Six building.',
      jp: '',
    },
    vibe: ['modern'],
  },
];

export default sobayas;
