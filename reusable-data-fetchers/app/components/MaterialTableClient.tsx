'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CircularProgress } from '@mui/material';

// Import the Material Table component with dynamic import
const MaterialProductTable = dynamic(
  () => import('../../components/third-party/MaterialTable'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center p-8">
        <CircularProgress />
      </div>
    )
  }
);

export default function MaterialTableClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex justify-center p-8">
        <CircularProgress />
      </div>
    );
  }

  return <MaterialProductTable />;
}