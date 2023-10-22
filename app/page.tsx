import { AuhtForm } from './components/AuthForm';

export default function Home() {
  return (
    <main className='relative flex h-screen w-full items-center justify-center bg-gray-950'>
      <div className='flex flex-col'>
        <div className=' 50 relative flex flex-col p-8'>
          <AuhtForm />
        </div>
      </div>
    </main>
  );
}
