export type Category = '荤菜' | '素菜' | '汤' | '主食'

export type Dish = {
  id: string
  category: Category
  name: string
  blurb: string
  imageUrl: string
}

/** Seeded from docs/homestyle-dishes.csv — ~26 道家常菜 */
export const dishes: Dish[] = [
  {
    id: 'hongshaorou',
    category: '荤菜',
    name: '红烧肉',
    blurb: '五花肉慢炖上色，肥而不腻，下饭经典。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red%20braised%20pork%20belly.jpg',
  },
  {
    id: 'gongbaojiding',
    category: '荤菜',
    name: '宫保鸡丁',
    blurb: '鸡丁配花生米，酸甜微辣，川味家常代表。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kung%20Pao%20Chicken%20at%20Yujiayan%20Restaurant%20%2820230510123120%29.jpg',
  },
  {
    id: 'mapodoufu',
    category: '荤菜',
    name: '麻婆豆腐',
    blurb: '嫩豆腐配肉末豆瓣，麻辣鲜香，浇饭极佳。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Authentic%20Mapo%20Tofu.jpg',
  },
  {
    id: 'yuxiangrousi',
    category: '荤菜',
    name: '鱼香肉丝',
    blurb: '肉丝配木耳笋丝，酸甜微辣却无鱼，开胃下饭。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Fish-flavoured%20shredded%20pork%20at%20Meizhou%20Dongpo%20Restaurant%20Shangdi%20%2820190808185406%29.jpg',
  },
  {
    id: 'huiguorou',
    category: '荤菜',
    name: '回锅肉',
    blurb: '先煮后炒的五花肉配青椒蒜苗，浓香够味。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Twice-cooked%20Pork%20%E5%9B%9E%E9%94%85%E8%82%89%20%281648213963%29.jpg',
  },
  {
    id: 'tangcupaigu',
    category: '荤菜',
    name: '糖醋排骨',
    blurb: '排骨外焦里嫩，酸甜酱汁裹匀，孩子也爱吃。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/T%C3%A1ngc%C3%B9%20p%C3%A1ig%C7%94.jpg',
  },
  {
    id: 'qingjiaorouusi',
    category: '荤菜',
    name: '青椒肉丝',
    blurb: '青椒爽脆配肉丝，快手一锅，清爽不油腻。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Green%20pepper%20steak%20%28%E9%9D%92%E6%A4%92%E8%82%89%E7%B5%B2%29%20%2826880875325%29.jpg',
  },
  {
    id: 'kelejiichi',
    category: '荤菜',
    name: '可乐鸡翅',
    blurb: '鸡翅焖可乐至酱汁收浓，甜香入味，步骤简单。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20Wings%20in%20Coca%20Cola%20Sauce.jpg',
  },
  {
    id: 'qingzhengyu',
    category: '荤菜',
    name: '清蒸鱼',
    blurb: '整鱼蒸熟淋热油葱姜，清鲜少油，宴客也稳妥。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cantonese%20style%20steamed%20fish%20and%20special%20side%20dishes%20in%20lunch.jpg',
  },
  {
    id: 'ganbiandoujiao',
    category: '荤菜',
    name: '干煸豆角',
    blurb: '豆角煸至起皱再炝肉末豆瓣，干香带辣。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sichuan-style-dried%20fried%20Green%20Beans%20with%20Minced%20Pork%20-%20Aberdeen%20Seafood%2C%20Brighton%202026-07-19.jpg',
  },
  {
    id: 'fanqiechaoadan',
    category: '素菜',
    name: '番茄炒蛋',
    blurb: '西红柿出汤裹鸡蛋，酸甜软嫩，十分钟上桌。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Stir%20Fried%20Tomatoes%20with%20Scrambled%20Eggs.jpg',
  },
  {
    id: 'disanxian',
    category: '素菜',
    name: '地三鲜',
    blurb: '茄子土豆青椒过油再烩，东北家常的咸鲜香。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Di%20san%20xian%20%28home-made%29.jpg',
  },
  {
    id: 'liangbanhuanggua',
    category: '素菜',
    name: '凉拌黄瓜',
    blurb: '拍碎黄瓜拌蒜香醋汁，爽口开胃，夏天必备。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pai%20huang%20gua.jpg',
  },
  {
    id: 'hongshaoqiezi',
    category: '素菜',
    name: '红烧茄子',
    blurb: '茄子吸酱软烂入味，甜咸适中，配米饭正好。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hong%20shao%20qie%20zi.jpg',
  },
  {
    id: 'qingchaoqingcai',
    category: '素菜',
    name: '清炒青菜',
    blurb: '小油菜或上海青快炒，保留清甜，均衡餐桌。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Stir%20Fried%20Bok%20Choy%2C%20Aug%202025.jpg',
  },
  {
    id: 'suanrongxilanhua',
    category: '素菜',
    name: '蒜蓉西兰花',
    blurb: '焯水后蒜蓉爆香快炒，翠绿清香；配图为蒜香炒西兰花。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Stir-fried%20broccoli.jpg',
  },
  {
    id: 'shousibaocai',
    category: '素菜',
    name: '手撕包菜',
    blurb: '包菜手撕大火爆炒，微焦香甜；配图含培根，家常可纯素。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Stir%20Fried%20Cabbage%20and%20Bacon%20%E5%9F%B9%E6%A0%B9%E9%AB%98%E4%B8%BD%E8%8F%9C.jpg',
  },
  {
    id: 'suanrongkongxincai',
    category: '素菜',
    name: '蒜蓉空心菜',
    blurb: '空心菜大火蒜蓉爆炒，清脆带蒜香；配图为相近空心菜炒。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pak%20boong%20fai%20daeng.jpg',
  },
  {
    id: 'xihongshijidantang',
    category: '汤',
    name: '西红柿鸡蛋汤',
    blurb: '番茄煮汤打入蛋花，酸鲜暖胃，最省事的一碗汤。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tomato%20and%20egg%20soup.jpg',
  },
  {
    id: 'zicaidanhuatang',
    category: '汤',
    name: '紫菜蛋花汤',
    blurb: '紫菜泡发加蛋花少许虾皮，清淡鲜美；配图为蛋花汤，可按需加紫菜。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Egg%20drop%20soup%20%28%E8%9B%8B%E8%8A%B1%E6%B9%AF%29.jpg',
  },
  {
    id: 'lianoupaiguutang',
    category: '汤',
    name: '莲藕排骨汤',
    blurb: '排骨与莲藕慢炖，汤乳白微甜，秋冬滋补家常汤。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lotus%20Root%20Soup.jpg',
  },
  {
    id: 'baimifan',
    category: '主食',
    name: '白米饭',
    blurb: '东北米或香米蒸熟，粒粒分明，配菜底座。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Steamed%20rice%20in%20bowl%2001.jpg',
  },
  {
    id: 'danchaofan',
    category: '主食',
    name: '蛋炒饭',
    blurb: '隔夜米饭配鸡蛋大火翻炒，粒粒分明不坨。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Chinese%20egg%20fried%20rice.jpg',
  },
  {
    id: 'congyoubanmian',
    category: '主食',
    name: '葱油拌面',
    blurb: '热油浇葱花拌面条，葱香简单，夜宵也合适。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai%20oil%20noodle.jpg',
  },
  {
    id: 'shuijiao',
    category: '主食',
    name: '水饺',
    blurb: '猪肉韭菜或白菜馅水煮，蘸醋蒜，合家围桌。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Szechuan%20style%20boiled%20jiaozi%20in%20Kichijoji%2C%20Tokyo.jpg',
  },
  {
    id: 'mantou',
    category: '主食',
    name: '馒头',
    blurb: '发酵面团蒸熟暄软，可配粥或夹菜吃。',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/ClassicwhiteMantou.jpg',
  },
]

export const categories: Array<'全部' | Category> = [
  '全部',
  '荤菜',
  '素菜',
  '汤',
  '主食',
]

export const heroImageUrl =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Red%20braised%20pork%20belly.jpg'
