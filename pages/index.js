import Head from 'next/head';
import Header from '../components/Header';
import ComplaintForm from '../components/ComplaintForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    < >
      <Head>
        <title>IUT Complaint Box</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex py-1 px-1">
          <div className="container mx-auto max-w-2xl">
            <ComplaintForm />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}