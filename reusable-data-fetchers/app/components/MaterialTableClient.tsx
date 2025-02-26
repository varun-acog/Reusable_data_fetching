'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import the Material Table component with dynamic import
const MaterialProductTable = dynamic(
  () => import('../../components/third-party/MaterialTable'),
  { ssr: false }
);

export default function MaterialTableClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading material table component...</div>;
  }

  return <MaterialProductTable />;
}