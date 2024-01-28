import Banner from '@/components/landing/Banner';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div className="[&>*:nth-child(even)]:bg-gg w-full">
        <Banner />
      </div>
    </main>
  );
}
