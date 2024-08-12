import Head from 'next/head';
import Header from '../components/Header';
import PolicyPage from '../components/PolicyPage';
import Footer from '../components/Footer';

export default function Policy() {
  return (
    <>
      <Head>
        <title>Policy - IUT Complaint Box</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-1 px-4">
          <div className="container mx-auto max-w-2xl">
            <h1 className="block mb-5 py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">Policy</h1>
            <PolicyPage />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
