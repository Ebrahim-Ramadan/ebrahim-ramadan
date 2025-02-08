import Image from "next/image";

export const metadata = {
  title: 'Ebrahim Ramadan',
  description: 'An overview of my career and technical contributions',
  openGraph: {
    title: 'Vercel',
    description: 'An overview of my career and technical contributions',
    images: [{ url: '/about/opengraph-image' }]
  }
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About</h1>

      <a href="https://twitter.com/rauchg" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/rauchg-3d4cecf.jpg"
          alt="Ebrahim Ramadan"
          className="rounded-full bg-gray-100 block mt-2 mb-5 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <p className="mb-4">
        I’m a software engineer and CEO of Vercel. I’m originally from Lanús, Buenos Aires, Argentina. I owe much of my career to the Web and Open Source.
      </p>

      <p className="mb-4">
        I spent my early teens advocating for and teaching people how to use Linux and later developed a passion for JavaScript and Web development.
      </p>

      <p className="mb-4">
        After joining the <a href="https://en.wikipedia.org/wiki/MooTools" className="text-blue-500 hover:underline">MooTools</a> core team, I got my first full-time job as a frontend engineer at 18 years old and relocated to San Francisco, CA.
      </p>

      <p className="mb-4">
        I started my first company <a href="https://techcrunch.com/2013/09/25/automattic-acquires-file-sharing-service-cloudup-to-build-faster-media-library-and-enable-co-editing/" className="text-blue-500 hover:underline">Cloudup</a> in SF which was later acquired by Automattic, the company behind WordPress, to power their editing and site building technology.
      </p>

      <p className="mb-4">
        After being involved in creating numerous influential open source projects like <a href="https://socket.io" className="text-blue-500 hover:underline">Socket.IO</a> and <a href="https://mongoosejs.com" className="text-blue-500 hover:underline">Mongoose</a>, I saw the opportunity in creating tooling and cloud infrastructure to make the Web faster, with a focus on developer experience (DX).
      </p>

      <p className="mb-4">
        <a href="https://nextjs.org" className="text-blue-500 hover:underline">Next.js</a> and <a href="https://vercel.com" className="text-blue-500 hover:underline">Vercel</a> were born. Our platform now helps power the online presence of companies like Washington Post, Porsche, Under Armour, and Nintendo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technical contributions</h2>

      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          I contributed to <a href="https://en.wikipedia.org/wiki/MooTools" className="text-blue-500 hover:underline">MooTools</a> as part of their core team and led the development of the MooTools Forge package repository.
        </li>
        <li className="mb-2">
          Authored one of the first books on Node.js (<a href="https://www.amazon.com/Smashing-Node-js-JavaScript-Guillermo-Rauch/dp/1119962595" className="text-blue-500 hover:underline">“Smashing Node.js: JavaScript Everywhere”</a>), after identifying the potential for JS to run on both server and client.
        </li>
        <li className="mb-2">
          My previous startup <a href="https://learnboost.com/" className="text-blue-500 hover:underline">LearnBoost</a> was one of the earliest adopters of Node.js in production. We made critical contributions to projects in the ecosystem like <a href="https://expressjs.com/" className="text-blue-500 hover:underline">Express.js</a>, <a href="https://github.com/senchalabs/connect" className="text-blue-500 hover:underline">Connect</a>, <a href="https://github.com/dscape/jade" className="text-blue-500 hover:underline">Jade</a>, <a href="https://stylus-lang.com/" className="text-blue-500 hover:underline">Stylus</a>, and many others.
        </li>
        <li className="mb-2">
          Authored <a href="https://mongoosejs.com/" className="text-blue-500 hover:underline">Mongoose</a>, which remains the most popular way of accessing MongoDB data in the JavaScript ecosystem.
        </li>
        <li className="mb-2">
          Authored <a href="https://socket.io" className="text-blue-500 hover:underline">Socket.IO</a>, a popular library for real-time communication. Its underlying <a href="https://github.com/socketio/engine.io" className="text-blue-500 hover:underline">engine</a> powers Notion’s realtime sync and the first Coinbase trading product.
        </li>
        <li className="mb-2">
          Authored <a href="https://github.com/vercel/hyper" className="text-blue-500 hover:underline">Hyper</a>, a cross-platform Terminal emulator built on Web technologies with over 42,000 daily active developers.
        </li>
        <li className="mb-2">
          Designed and co-authored <a href="https://nextjs.org/" className="text-blue-500 hover:underline">Next.js</a>, the most popular React framework. I later introduced it at the <a href="https://www.youtube.com/watch?v=MxFfUs6sYnw" className="text-blue-500 hover:underline">ViennaJS meetup</a> and <a href="https://www.youtube.com/watch?v=evaMpdSiZKk" className="text-blue-500 hover:underline">React Conf</a>.
        </li>
        <li className="mb-2">
          I collaborated with <a href="https://shud.in/" className="text-blue-500 hover:underline">Shu Ding</a> on the design and conception of <a href="https://swr.vercel.app/" className="text-blue-500 hover:underline">SWR</a>.
        </li>
        <li className="mb-2">
          Built a popular file-sharing platform called <a href="https://techcrunch.com/2013/06/21/cloudup-is-a-fast-dead-simple-way-to-share-and-view-files-on-any-platform-without-the-folders/" className="text-blue-500 hover:underline">Cloudup</a>, building on <a href="https://github.com/Automattic/mydb" className="text-blue-500 hover:underline">realtime infrastructure for MongoDB</a> I authored inspired by Firebase and a proprietary predecessor to Electron for cross-platform Web-based desktop apps.
        </li>
        <li className="mb-2">
          Conceived and co-authored a turn-based, multi-player virtual machine running a copy of Windows XP <a href="https://www.dailydot.com/debug/windows-xp-virtual-machine/" className="text-blue-500 hover:underline">that went viral</a>, inspired by <a href="https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon" className="text-blue-500 hover:underline">Twitch plays Pokemon</a>.
        </li>
        <li className="mb-2">
          Authored several other popular, smaller utilities that have accumulated billions of downloads, like <a href="https://github.com/vercel/ms" className="text-blue-500 hover:underline">ms</a>, <a href="https://github.com/rauchg/wifi-password" className="text-blue-500 hover:underline">wifi-password</a>, <a href="https://github.com/rauchg/spot" className="text-blue-500 hover:underline">spot</a>, and <a href="https://github.com/rauchg/slackin" className="text-blue-500 hover:underline">slackin</a>.
        </li>
      </ul>
    </div>
  );
}
