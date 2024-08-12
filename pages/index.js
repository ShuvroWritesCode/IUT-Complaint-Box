import Head from 'next/head';
import Header from '../components/Header';
import ComplaintForm from '../components/ComplaintForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Present IUT Complaint Box</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-1 px-4">
          <div className="container mx-auto max-w-2xl">
            {/* <h1 className="font-serif text-lg mb-2">Submit Your Complaint</h1> */}
            <ComplaintForm />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
