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
        <main className="flex py-1 px-1">
          <div className="container mx-auto max-w-2xl">
            <ComplaintTable /> 
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}