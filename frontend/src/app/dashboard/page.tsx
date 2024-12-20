'use client';

import CardExpenseSummary from '@/components/Dashboard/CardExpenseSummary';
import CardPopularProducts from '@/components/Dashboard/CardPopularProducts';
import CardPurchaseSummary from '@/components/Dashboard/CardPurchaseSummary';
import CardSalesSummary from '@/components/Dashboard/CardSalesSummary';
import StatCard from '@/components/Dashboard/StatCard';
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react';

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
      <StatCard
        title='Dues & Pending Orders'
        primaryIcon={<CheckCircle className='text-blue-600 h-6 w-6' />}
        dateRange='22 - 29 October 2024'
        details={[
          {
            title: 'Dues',
            amount: '250.00',
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: 'Pending Orders',
            amount: '146.00',
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Sales & Discount'
        primaryIcon={<Tag className='text-blue-600 h-6 w-6' />}
        dateRange='22 - 29 October 2024'
        details={[
          {
            title: 'Sales',
            amount: '1234.00',
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: 'Discount',
            amount: '200.00',
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
