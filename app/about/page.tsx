import Image from "next/image";

export const metadata = {
  title: 'Ebrahim Ramadan',
  description: 'An overview of my career and technical contributions',
  openGraph: {
    title: 'Ebrahim Ramadan',
    description: 'An overview of my career and technical contributions',
    images: [{ url: '/opengraph-image' }]
  }
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>

      <a href="https://ebrahim-ramadan.vercel.app" target="_blank" rel="noopener noreferrer">
        <Image
          src="/dev.webp"
          alt="Ebrahim Ramadan"
          className="rounded-full bg-gray-100 block mt-2 mb-5 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <p className="mb-4">
        I’m a software engineer. My journey in tech began with computer vision and low-level programming, which laid the foundation for my expertise. Over time, I developed a strong passion for web development, TypeScript, and crafting seamless user experiences.
      </p>

      <p className="mb-4">
        My early contributions include building automation scripts and optimizing algorithms like  <a href="https://github.com/Ebrahim-Ramadan/Express-React-PlagiarismCheck.02" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">Plagiarism Checker</a> showcasing my ability to tackle foundational computer science challenges.
      </p>

      <p className="mb-4">
        In 2023, I collaborated on ML-based computer vision projects such as <a href="https://github.com/Ebrahim-Ramadan/Drowsiness_Detector" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">Drowsiness Detector</a>, that detects and alerts individuals when they exhibit signs of drowsiness while driving or operating machinery, and <a href="https://github.com/Ebrahim-Ramadan/PlateVision" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">PlateVision</a>, that detects vehicle license plates and extract the corresponding text from images.
      </p>

      <p className="mb-4">
        Throughout 2024, I have been shipping open-sourced tools like <a href="https://github.com/Ebrahim-Ramadan/gh-gists-unwrapped" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">GH Gists Wrapped</a>, <a href="https://github.com/Ebrahim-Ramadan/PinSync" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">PinSync</a>, <a href="https://github.com/Ebrahim-Ramadan/ThumbSync" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">ThumbSync</a>, <a href="https://github.com/Ebrahim-Ramadan/MarkForge-md-compiler" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">MarkForge</a>, <a href="https://github.com/Ebrahim-Ramadan/GoGrep" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">GoGrep </a>. Also some open-sourced CLIs and packages like <a href="https://typeshit-tool.vercel.app/" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">TypeShit</a>, <a href="https://github.com/Ebrahim-Ramadan/PinSync" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">PinSync</a>.
      </p>

      <p className="mb-4">
        I do not believe the language or the stack any project is built with determines how great that project is, however I built some cool stuff with <a href="https://github.com/Ebrahim-Ramadan?tab=repositories&language=go" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline font-bold">Go</a> and <a className="font-medium hover:text-blue-400 transiiton-all duration-200 underline" href="https://github.com/Ebrahim-Ramadan?tab=repositories&language=c%2B%2B">C++</a> I believe are worth mentioning.
      </p>

      <p className="mb-4">
        <a href="https://chat-jj.vercel.app" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">ChatJJ</a> is born, it allows you to talk to your already installed model on your machine, offline and fast, basically the fastest and most descent UI to get your answers. <a href="https://github.com/Ebrahim-Ramadan/vite-pwa-chatjj" className="text-blue-400 font-bold">Github</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">OSS Contributions</h2>

      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Authored <a href="https://rivo.gallery" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">Rivo</a>, the most popular art shop in Egypt, serving all kind of wall posters and printable vinyls.
        </li>
        <li className="mb-2">
        Authored <a href="https://f0-the-millio-dollar-project.vercel.app/" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">F0</a>: A popular background removal service, faster than most of the tools out there with much less subscription fees.  <a href="https://github.com/Ebrahim-Ramadan/F0" className="text-blue-400 font-bold">Github</a>
        </li>
        <li className="mb-2">
          I optimized the python version of <a href="https://github.com/Ebrahim-Ramadan/huffman-coding-python-optimized" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">The popular Huffman Coding project</a>, serving as a powerful tool for data compression and efficient data storage.
        </li>
        <li className="mb-2">
          Contributed to <a href="https://github.com/Ebrahim-Ramadan/PyMicroHTTP-CORS-websocket-and-db-supported-and-more" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">PyMicroHTTP</a>, a lightweight minimal HTTP server by <a href="https://github.com/hasssanezzz" className="font-bold hover:text-blue-400 transiiton-all duration-200 underline">Hassan Ezz</a>. I added routing, websocket support, and SQLite integration, CORS, rate limiting, and a basic templating engine
        </li>
        <li className="mb-2">
          Focusing more on (DX), I authored <a href="https://serendipity-ai.vercel.app/" className="font-medium hover:text-blue-400 transiiton-all duration-200 underline">Serendipity</a>, AI-powered platform for creating and exploring 3D objects. <a href="https://github.com/Ebrahim-Ramadan/serendipity-3d" className="text-blue-400 font-bold">Github</a>
        </li>
        <li className="mb-2">
          Managed Full Product Lifecycle: Oversaw projects from conception to deployment, ensuring high-quality deliverables and seamless user experiences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Looking Ahead</h2>
      <p className="mb-4">
        I’m excited to continue exploring the intersection of technology and creativity, building tools that solve real-world problems and inspire others to innovate. Whether it’s through open-source contributions, collaborative projects, or personal initiatives, I love Open Source, and I owe much of my career to it.
      </p>
    </div>
  );
}