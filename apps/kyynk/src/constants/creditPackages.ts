export const creditPackages = [
  {
    id: 1,
    name: 'Starter',
    price: 999, // $9.99
    credits: 100,
    bonus: 0,
    baseCredits: 100,
    savings: 0,
    popular: false,
    bestValue: false,
    pricePerCredit: 9.99,
  },
  {
    id: 2,
    name: 'Popular',
    price: 1999, // $19.99
    credits: 250,
    bonus: 50,
    baseCredits: 200,
    savings: 25, // 25% bonus
    popular: true,
    bestValue: false,
    pricePerCredit: 7.99,
  },
  {
    id: 3,
    name: 'Premium',
    price: 3999, // $39.99
    credits: 600,
    bonus: 150,
    baseCredits: 450,
    savings: 33, // 33% bonus
    popular: false,
    bestValue: false,
    pricePerCredit: 6.66,
  },
  {
    id: 4,
    name: 'VIP',
    price: 7999, // $79.99
    credits: 1400,
    bonus: 400,
    baseCredits: 1000,
    savings: 40, // 40% bonus
    popular: false,
    bestValue: true,
    pricePerCredit: 5.71,
  },
  {
    id: 5,
    name: 'Ultimate',
    price: 14999, // $149.99
    credits: 3200,
    bonus: 1200,
    baseCredits: 2000,
    savings: 60, // 60% bonus
    popular: false,
    bestValue: false,
    pricePerCredit: 4.69,
  },
];

export function getPackById(id: number) {
  return creditPackages.find((p) => p.id === id) ?? null;
}
