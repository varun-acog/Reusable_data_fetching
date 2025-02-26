import UserList from './components/UserList';
import ProductList from './components/ProductList';
import MaterialTableSection from './components/MaterialTableSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Reusable Data Fetching System
        </h1>

        <div className="grid grid-cols-1 gap-10">
          <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Server-Side Fetching Example
            </h2>
            <ProductList />
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Client-Side Fetching Example
            </h2>
            <UserList />
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Third-Party Component Integration
            </h2>
            <MaterialTableSection />
          </section>
        </div>
      </div>
    </main>
  );
}
