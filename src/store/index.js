import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
const descriptionValue = "авно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."+
 "Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное"+
 " распределение букв и пробелов в абзацах, которое не получается при простой дубликации Здесь ваш текст.. Здесь ваш текст.."+
 " Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию,"+
 " так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рожде"+
 "ния. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно"+
 " (например, юмористические варианты) авно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."+
 " Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение"+
 " букв и пробелов в абзацах, которое не получается при простой дубликации Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."+
 " Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по"+
 " ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие"+
 " годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты)."

export function createStore () {
    return new Vuex.Store({
      state: {
        products : [
          //Накладки
          //butterfly
            {id:1, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/bf9/bf9c3fc0f9cac3c4357617663c5dc3db.jpg", description: descriptionValue},
            {id:2, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description:descriptionValue},
            {id:3, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:4, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:5, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/888/888f55921f38ee87a093231bbe051cc7.png", description: descriptionValue},
            {id:6, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //xiom
            {id:7, category:1, brand:5, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/c32/c32451b288c05f0696c49dd59efad954.jpg", description: descriptionValue},
            {id:8, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:9, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:10, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:11, category:1, brand:5, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/965/96578dc0b3a68d18aedff687333322d7.jpg", description: descriptionValue},
            {id:12, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:13, category:1, brand:5, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/c4d/c4d4ef5b2f98889626b94676f7db7678.jpg", description: descriptionValue},
            {id:14, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //friendship
            {id:15, category:1, brand:8,label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/ea6/ea6f17a7e8526a6ff4c4689a1c158f6c.jpg", description: descriptionValue},
            {id:16, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:17, category:1, brand:8,label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/ec0/ec0db1dcc697374ea144ade8d25738e8.jpg", description: descriptionValue},
            {id:18, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:19, category:1, brand:8,label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/6fe/6fede4d7116ea87f086ce0edd2e57bf9.jpg", description: descriptionValue},
            {id:20, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Основания
            {id:21, category:2, brand:2,label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/395/395478a9408cfee7da20bd147f02b89e.jpg", description: descriptionValue},
            {id:22, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:23, category:2, brand:7,label: "Butterfly s40+", image:"https://www.vistasport.ru/upload/iblock/387/387de1507249d6e6bc8672176376ee08.jpg", description: descriptionValue},
            {id:24, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:25, category:2, brand:4,label: "Butterfly s40+", image:"https://www.vistasport.ru/upload/iblock/7ff/7ff6cd47ec83e24c1b3d32c7c06f2074.jpg", description: descriptionValue},
            {id:26, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:27, category:2, brand:3,label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/ae1/ae1507ba15730b1caa39e3d073f3c25e.jpg", description: descriptionValue},
            {id:28, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:29, category:2, brand:6,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/810/8107cb81294806e2ed79a23fd84b4513.png", description: descriptionValue},
            {id:30, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Одежда
            //Butterfly
            {id:31, category:4, brand:2,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/afa/afa4b830bdf9560d9ce66b28cf08be24.jpg", description: descriptionValue},
            {id:32, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:33, category:4, brand:2,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/b0f/b0fe1e20807e2bef4511e6fd734b14d0.jpg", description: descriptionValue},
            {id:34, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:35, category:4, brand:2,label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/6ce/6cedb7a13a32a07c3e366c2ad2110416.png", description:descriptionValue},
            {id:36, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Donic
            {id:37, category:4, brand:3,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/aec/aec7c957e11d0007b6a604ba89db3c3d.jpg", description: descriptionValue},
            {id:38, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:39, category:4, brand:3,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/7a7/7a7164b9a32bfb4ccd2628456af6090d.jpg", description: descriptionValue},
            {id:40, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:41, category:4, brand:3,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/b47/b47f5ccd3381ccbc79f1b390a9a16116.jpg", description: descriptionValue},
            {id:42, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Stiga
            {id:43, category:4, brand:1,label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/0b3/0b3c5775b75611445b5ad909be0959ea.jpg", description: descriptionValue},
            {id:44, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:45, category:4, brand:1,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/15c/15ce80c4379101ae6f37be4104a11289.jpg", description: descriptionValue},
            {id:46, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:47, category:4, brand:1,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg", description: descriptionValue},
            {id:48, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Yasaka
            {id:49, category:4, brand:4,label: "Butterfly Kisa", image:"https://tabletennis.ru/assets/images/products/3315/shirt-kosay-black-front-web.jpg", description: descriptionValue},
            {id:50, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:51, category:4, brand:4,label: "Butterfly Digins", image:"https://tabletennis.ru/assets/images/products/3315/shirt-kosay-black-front-web.jpg", description: descriptionValue},
            {id:52, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:53, category:4, brand:4,label: "BUTTERFLY Radial Cross", image:"https://tabletennis.ru/assets/images/products/3315/shirt-kosay-black-front-web.jpg", description: descriptionValue},
            {id:54, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            //Мячи
            {id:55, category:3, brand:7,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/d3d/d3d150b3f83eadb90f7ee343c6e06dae.png", description: descriptionValue},
            {id:56, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:57, category:3, brand:2,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/207/2074ea4496eabb5152429714603deeb9.jpg", description: descriptionValue},
            {id:58, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:59, category:3, brand:1,label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/05b/05ba12f809e4caf9214b77613cd3a992.jpg", description: descriptionValue},
            {id:60, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:61, category:3, brand:3,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/ce9/ce929db38e7f9b81638639d695d1fd22.jpg", description: descriptionValue},
            {id:62, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:63, category:3, brand:5,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/e10/e10f97af24be18cdfcc8a517c3537bbb.jpg", description: descriptionValue},
            {id:64, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:65, category:3, brand:1,label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg", description: descriptionValue},
            {id:66, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:67, category:3, brand:1,label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg", description: descriptionValue},
            {id:68, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},

            {id:69, category:5, brand:1,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg", description: descriptionValue},
            {id:70, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:71, category:5, brand:8,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg", description: descriptionValue},
            {id:72, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg", description: descriptionValue},
            {id:73, category:5, brand:8,label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"}  ],
            
            brands : [
              { id: 1, text: "stiga" },
              { id: 2, text: "butterfly" },
              { id: 3, text: "Donic" },
              { id: 4, text: "yasaka" },
              { id: 5, text: "xiom" },
              { id: 6, text: "tibhar" },
              { id: 7, text: "dhs" },
              { id: 8, text: "friendship" },
            ],
        
            categories:  [
              {id: 1, src: "https://www.vistasport.ru/upload/uf/dde/dde51349dd4ff63d4413ef1833d34897.svg", text: "Накладки"},
            {id:2, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg"},
                {id:3, src: "https://www.vistasport.ru/upload/uf/02e/02e45e38fc2dbcd8f100bd646f3ceb41.svg", text: "Основания"},
            {id:4, category:1, brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg"},
                {id:5, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Мячи" },
                {id:6, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Одежда" },
                {id:7, src: "https://www.vistasport.ru/upload/uf/dbb/dbb7d8113be06a0376bd47c72cc36175.svg",text:"Обувь" }
            ],
            
            pagination:{ totalPages: 6, pageLimit: 6,  currentPage: 1, startIndex: 0, endIndex: 5},
            displayCategory: 0,
            displayBrand: 0,
            categoryText: "All"
        }
      ,
      getters: getters,
      mutations: mutations
    })
  }