import { useRouter } from 'next/router';

export default function NextPage() {
  const router = useRouter();
  const { number } = router.query; // Access the dynamic parameter

  return (
    <div>
      <h1>This is the Next Page</h1>
      <p>Received number: {number}</p>
      <button onClick={() => router.push('/')}>Go Back</button>
    </div>
  );
}