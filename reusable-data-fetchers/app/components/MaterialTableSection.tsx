import MaterialTableClient from './MaterialTableClient';

export default function MaterialTableSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Material-UI Table Example
        </h3>
      </div>
      <MaterialTableClient />
    </div>
  );
}