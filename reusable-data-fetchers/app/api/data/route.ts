import { NextRequest, NextResponse } from 'next/server';
import { FetcherRegistry } from '../../../lib/FetcherRegistry';

// Import all fetchers to ensure they're registered with the registry
import '../../../fetchers/UserDataFetcher';
import '../../../fetchers/ProductDataFetcher';

/**
 * Unified API endpoint for data fetching
 * Accepts component name as a query parameter and returns the data from the appropriate fetcher
 */
export async function GET(request: NextRequest) {
  // Get the component name from the query parameters
  const searchParams = request.nextUrl.searchParams;
  const componentName = searchParams.get('component');

  if (!componentName) {
    return NextResponse.json(
      { error: 'Missing component name' },
      { status: 400 }
    );
  }

  // Check if a fetcher exists for this component
  if (!FetcherRegistry.hasFetcher(componentName)) {
    return NextResponse.json(
      { error: `No fetcher registered for component: ${componentName}` },
      { status: 404 }
    );
  }

  try {
    // Get the appropriate fetcher and execute it
    const fetcher = FetcherRegistry.getFetcher(componentName);
    if (!fetcher) {
      throw new Error(`Fetcher not found for component: ${componentName}`);
    }
    
    const data = await fetcher();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}