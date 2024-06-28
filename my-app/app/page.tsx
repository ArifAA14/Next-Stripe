'use client';
import getData from "./actions/search";



export default function Home() {
  const fetchData = async () => {
    try {
      const products = await getData();
      console.log(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded">
        Fetch Products
      </button>
   
    </main>
  );
}
