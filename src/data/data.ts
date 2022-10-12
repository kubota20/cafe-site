import {
  NavItems,
  IntroductionImg,
  IntroductionData,
  EmploymentData,
} from '../types/dataTypes'

import Img2 from '../imgs/img2.jpg'

export const navItems: NavItems[] = [
  {
    title: 'ホーム',
    link: '/',
  },
  {
    title: '商品一覧',
    link: '/product',
  },
  {
    title: 'お問い合わせ',
    link: '/inquiry',
  },
]

export const introductionImg: IntroductionImg[] = [
  {
    img: Img2,
  },
]

export const introductionData: IntroductionData[] = [
  {
    id: 1,
    dataHead: '店舗名',
    data: 'sweets cafe',
  },
  {
    id: 2,
    dataHead: '営業時間',
    data: '平日: 11:00~21:00\n土日祝日: 11:00~20:00',
  },
  {
    id: 3,
    dataHead: '定休日',
    data: '火曜日',
  },
  {
    id: 4,
    dataHead: 'アクセス',
    data: '◯ ◯ 駅より徒歩5分',
  },
  {
    id: 5,
    dataHead: '所在地',
    data: '〒000-0000\n見本県見本町000-00',
  },
  {
    id: 6,
    dataHead: 'お問い合せ',
    data: '電話番号:\n 000-000-000',
  },
]

export const employmentData: EmploymentData[] = [
  {
    id: 1,
    dataHead: '● 仕事内容',
    data: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル。サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル。',
  },
  {
    id: 2,
    dataHead: '● 勤務地',
    data: 'sweets cafe\n見本県見本町000-00',
  },
  {
    id: 2,
    dataHead: '● 給料',
    data: '[ア・パ]時給910円～1,300円\n土日祝 時給 1,100円以上',
  },
]
