export default {
   accounts: [
      { type: 'Cash', balance: 2130421 },
      { type: 'Credit cards', balance: 1324 },
      { type: 'Investments', balance: 6245245 },
      { type: 'Loans', balance: 16342545 },
      { type: 'Other assets', balance: 5432 }
   ],
   transactions: {
      pending: [{
         id: 1324,
         account: 'Bank of America',
         status: 'posted',
         amount: 2411,
         description: {
            original: 'Starbucks Coffee',
            user: ''
         },
         date: {
            original: 20110501,
            user: ''
         },
         category: 'Restaurants'
      }, {
         id: 132124,
         account: 'Bank of America',
         status: 'posted',
         amount: 2411,
         description: {
            original: 'Starbucks Coffee',
            user: ''
         },
         date: {
            original: 20111031,
            user: ''
         },
         category: 'Restaurants'
      }],
      posted: [{
         id: 132443,
         account: 'Bank of America',
         status: 'pending',
         amount: 342432,
         description: {
            original: 'Rent',
            user: ''
         },
         date: {
            original: 20111031,
            user: ''
         },
         category: 'Rent'
      }, {
         id: 113324,
         account: 'Bank of America',
         status: 'pending',
         amount: 342,
         description: {
            original: 'Coffee',
            user: ''
         },
         date: {
            original: 20111031,
            user: ''
         },
         category: 'Restaurants'
      }, {
         id: 43131324,
         account: 'Bank of America',
         status: 'pending',
         amount: 341342,
         description: {
            original: 'Shoes',
            user: ''
         },
         date: {
            original: 20111031,
            user: ''
         },
         category: 'Shopping'
      }]
   },
   networth: {
      summary: {
         amount: 1234543462,
         change: 341234
      },
      series: [
         {
            date: 1020310, amount: 10000
         },
         {
            date: 1022310, amount: 15000
         },
         {
            date: 1026310, amount: 12000
         },
         {
            date: 1028310, amount: 29000
         },
         {
            date: 1030310, amount: 17000
         },
         {
            date: 1033310, amount: 22000
         },
         {
            date: 1039310, amount: 25000
         },
      ],
      timeframe: [{ label: '3M' }, { label: '6M' }, { label: '1Y' }, { label: '3Y' }, { label: 'ALL' }]
   }
}