import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The pathname {router.pathname} does not exist.</p>
    </div>
  );
}