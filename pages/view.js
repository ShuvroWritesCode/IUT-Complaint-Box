import Head from 'next/head';
import Header from '../components/Header';
import ComplaintTable from '../components/ComplaintTable';
import Footer from '../components/Footer';

export default function View() {
  return (
    <>
      <Head>
        <title>View - IUT Complaint Box</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex py-1 px-8">
          <div className="container border-2 border-red-pastel rounded-xl">
            <h1 className="block mt-5 mb-5 py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">View</h1>
            <ComplaintTable />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
