import { Free, Paid } from '../../components'

export const data = [
  {
    title: 'Dip your toe',
    desc: 'Just getting started? No problem at all! Our free plan will take you a long way.',
    price: 0,
    isFree: true,
    Icon: Free,
    options: [
      'Unlimited products',
      'Basic analytics',
      'Limited marketplace exposure',
      '10% fee per transaction',
    ],
  },
  {
    title: 'Dive right in',
    desc: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
    price: 25,
    isFree: false,
    Icon: Paid,
    options: [
      'Custom domains',
      'Advanced analytics and reports',
      'High marketplace visibility',
      '5% fee per transaction',
    ],
  },
]
