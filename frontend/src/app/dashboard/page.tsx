'use client';

import CardExpenseSummary from '@/components/Dashboard/CardExpenseSummary';
import CardPopularProducts from '@/components/Dashboard/CardPopularProducts';
import CardPurchaseSummary from '@/components/Dashboard/CardPurchaseSummary';
import CardSalesSummary from '@/components/Dashboard/CardSalesSummary';
import StatCard from '@/components/Dashboard/StatCard';
import { Package, TrendingDown, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title='Customer & Expenses'
        primaryIcon={<Package className='text-blue-600 h-6 w-6' />}
        dateRange='22 - 29 October 2024'
        details={[
          {
            title: 'Customer',
            amount: '175.00',
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: 'Expenses',
            amount: '10.00',
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <div className='md:row-span-1 xl:row-span-2 row-span-3 bg-gray-500'></div>
      <div className='md:row-span-1 xl:row-span-2 row-span-3 bg-gray-500'></div>
    </div>
  );
};

export default Dashboard;
