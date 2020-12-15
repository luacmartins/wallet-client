const data = {
   monthly: {
      summary: {
         total: 3234,
         percent: 12
      },
      series: [
         {
            category: "Accommodation",
            amount: 1600
         }, {
            category: "Transportation",
            amount: 700.23
         }, {
            category: "Food & Drinks",
            amount: 1200.43
         }, {
            category: "Entertainment",
            amount: 322.12
         }, {
            category: "Shopping",
            amount: 356.35
         }, {
            category: "Other",
            amount: 34.13
         }
      ],
      timeframe: [{ label: 'MTD' }, { label: '1M' }, { label: '6M' }, { label: '1Y' }, { label: 'YTD' }]
   },
   average: [
      { category: 'Accommodation', monthly: 1234, yearly: 21344 },
      { category: 'Transportation', monthly: 344, yearly: 2434 },
      { category: 'Food & Drinks', monthly: 1544, yearly: 3544 },
      { category: 'Entertainment', monthly: 134, yearly: 1244 },
      { category: 'Others', monthly: 14, yearly: 224 },
   ],
   overtime: {
      summary: {
         change: 23,
         time: 6,
         unit: 'months'
      },
      timeframe: [{ label: '6M' }, { label: '1Y' }, { label: '2Y' }, { label: '3Y' }, { label: 'ALL' }],
      series: {
         categories: ['Accommodation', 'Food & Drinks', 'Transportation', 'Entertainment', 'Others'],
         series: [
            { date: 123134325, 'Accommodation': 1252, 'Food & Drinks': 1341, 'Transportation': 841, 'Entertainment': 234, 'Others': 34 },
            { date: 125134325, 'Accommodation': 1252, 'Food & Drinks': 1041, 'Transportation': 741, 'Entertainment': 264, 'Others': 65 },
            { date: 128134325, 'Accommodation': 1352, 'Food & Drinks': 1101, 'Transportation': 531, 'Entertainment': 134, 'Others': 14 },
         ]
      }
   }
}

export default data