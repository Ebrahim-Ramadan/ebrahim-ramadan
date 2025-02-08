import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">
        Guillermo Rauch (
        <Link target="_blank" href="https://twitter.com/rauchg">
          @rauchg
        </Link>
        )
      </div>
      <div>
        <Link target="_blank" href="https://github.com/rauchg/blog">
          Source
        </Link>
      </div>
    </footer>
  );
}