import React from 'react'

export const GitLFS = () => {
  return (
    <div className="flex w-full p-4 md:p-44 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Managing Large Files in Next.js with Git LFS</h1>

        <p className="mb-4">
            I recently faced an intriguing challenge while working on my Next.js project. I had some large image files that I decided to manage using Git LFS (Large File Storage). However, things didn’t go as smoothly as I anticipated. Here's how I navigated through the obstacles and what I learned along the way.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Step 1: Setting Up Git LFS</h2>

        <p className="mb-4">The first step was to set up Git LFS in my project. This was straightforward:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git lfs install</code></pre>
        
        <p className="mb-4">I then tracked my large files:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git lfs track "*.png"</code></pre>
        
        <p className="mb-4">Everything seemed to be in place. I added the files, committed them, and pushed them to the repository:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git add public/example.png
git commit -m "Add large image file to LFS"
git push origin main</code></pre>

        <h2 className="text-2xl font-semibold mb-4">Step 2: The Unexpected Hiccup</h2>

        <p className="mb-4">However, when I pulled my project on another machine, the image in the <code className="bg-gray-200 px-2 py-1 rounded">/public</code> directory was just a pointer file and not the actual image. My Next.js app couldn’t read it.</p>

        <h2 className="text-2xl font-semibold mb-4">Step 3: Pulling LFS Files</h2>

        <p className="mb-4">I needed to ensure that Git LFS pulls the actual files. I ran:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git lfs pull</code></pre>

        <p className="mb-4">This command fetched the actual image content. I checked to make sure the image was correctly placed in the <code className="bg-gray-200 px-2 py-1 rounded">/public</code> directory.</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>ls -lh public/example.png</code></pre>

        <h2 className="text-2xl font-semibold mb-4">Step 4: Untracking Files from LFS</h2>

        <p className="mb-4">Later, I decided to untrack the files from Git LFS and revert to normal Git tracking. Here’s how I did it:</p>

        <h3 className="text-xl font-semibold mb-2">Remove Tracking:</h3>
        <p className="mb-4">First, I updated the <code className="bg-gray-200 px-2 py-1 rounded">.gitattributes</code> file to stop tracking the image type with LFS:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git lfs untrack "*.png"</code></pre>

        <h3 className="text-xl font-semibold mb-2">Commit Changes:</h3>
        <p className="mb-4">I committed the changes to <code className="bg-gray-200 px-2 py-1 rounded">.gitattributes</code>:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git add .gitattributes
git commit -m "Stop tracking PNG files with LFS"</code></pre>

        <h3 className="text-xl font-semibold mb-2">Convert LFS Files to Normal Files:</h3>
        <p className="mb-4">To convert the LFS files back to normal files, I needed to re-commit them:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git add public/example.png
git commit -m "Recommit PNG files as regular Git files"
git push origin main</code></pre>

        <h3 className="text-xl font-semibold mb-2">Verify File Presence:</h3>
        <p className="mb-4">I verified that the files were correctly untracked and present in the <code className="bg-gray-200 px-2 py-1 rounded">/public</code> directory as regular files.</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>git lfs ls-files</code></pre>

        <p className="mb-4">The files were no longer listed, indicating they were successfully untracked.</p>

        <h2 className="text-2xl font-semibold mb-4">Step 5: Ensuring Deployment Works</h2>

        <p className="mb-4">I made sure my deployment process didn’t depend on LFS anymore. For instance, in Vercel, I removed any LFS-specific commands from <code className="bg-gray-200 px-2 py-1 rounded">vercel.json</code>.</p>

        <p className="mb-4">Here’s an example if you’re using <code className="bg-gray-200 px-2 py-1 rounded">vercel.json</code>:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4"><code>`
          build stuff hena
          `</code></pre>

        <p className="mb-4">No need for a <code className="bg-gray-200 px-2 py-1 rounded">build</code> hook to pull LFS files anymore.</p>

        <h2 className="text-2xl font-semibold mb-4">Step 6: Final Testing</h2>

        <p className="mb-4">Finally, I tested my application locally and after deployment to ensure that everything worked seamlessly. The images in the <code className="bg-gray-200 px-2 py-1 rounded">/public</code> directory were correctly loaded by Next.js without any issues.</p>

        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>

        <p className="mb-4">
            Through this journey, I learned the nuances of managing large files with Git LFS and how to transition back to normal Git tracking. Documenting these steps not only helped me solve the problem but also turned out to be a valuable learning experience.
        </p>
        <p className="mb-4">
            In my portfolio blog, I hope this narrative helps others facing similar challenges. If you’re diving into Git LFS, remember to thoroughly test your setup, especially if you plan to untrack files later. Happy coding! 🚀
        </p>
    </div>
  )
}
