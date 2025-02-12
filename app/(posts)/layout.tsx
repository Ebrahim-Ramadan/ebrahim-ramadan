
export const revalidate = 60;

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10">
      {children}
    </article>
  );
}