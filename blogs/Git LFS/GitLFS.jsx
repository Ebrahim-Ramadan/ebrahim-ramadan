
import { Separator } from '@/components/globals/Icons'

import React from 'react'
import { BackToBlogs, Badge, BlogFooter, BlogHeader, CMD,  HeadingTitle, HighLight, LinkComponent, ListElement, Quote } from '../Globals'

export const GitLFS = () => {
        const GitLFSLinks = [
            {
                url: 'https://medium.com/@sharmojj/managing-large-files-with-git-lfs-1472e886591c',img: '/Blogs/medium.png'
            },
            {
                url: 'https://app.daily.dev/posts/managing-large-files-with-git-lfs-qvcmriucv',img: '/Blogs/daily.dev.png'
},
            {
                url: 'https://dev.to/ebrahimramadan/managing-large-files-with-git-lfs-3327',img: '/Blogs/dev.jpg'
},
    ]
    
  return (
      <div className="flex w-full py-16 p-4 md:p-24 lg:px-96 flex-col  gap-8 text-lg">
          
          <BlogHeader
              imgPath='/Blogs/lfs.jpg'
              title='Git LFS (large file system) hell'
              desc='Managing Large Files with Git LFS '
          />
        <p className="mb-4">
              I recently faced a first-thing-for-everything challenge while working on my portfolio (this site). I had some quite 
              <LinkComponent
                  href='https://ebrahim-ramadan.vercel.app/#Web-UIs'
                  text='large .gif files'
              />
              that I decided to manage using Git LFS (Large File Storage). However, things didn’t go as smoothly as I anticipated. Here's how I went through it and what I learned along the way.
          </p>
          <div className="flex flex-row items-center justify-center">
          <Quote
          text='--distributed-even-if-your-workflow-isnt'
          />
         </div>
          <p>
              
              <LinkComponent
               href='https://git-scm.com/'
               text='Git'
              />
              is a powerful version control system with many benefits, a tool we all use on a daily basis, but when it comes to situations like storing/managing large files, it is important to note that storing large files directly in Git can significantly slow down operations like pulling, pushing, and cloning the repository. This can frustrate collaborators who rely on these operations to work efficiently.
          </p>
          <p>
              When a large file is added to a Git repository, every collaborator on the repository must download the entire file, including 
              <HighLight
              text=' all versions of it. ' />
              This process can be time-consuming, especially for collaborators with slower internet connections. Additionally, storing large files on Git can result in a large repository size, making collaboration difficult.
          </p>
          <p>
              That is when
              <LinkComponent
                  text='Git LFS'
                  href='https://git-lfs.github.com/'
              />
              comes into play. It is a Git extension that allows you to store large files in a separate, encrypted repository, and stores a single text pointer in the current regular repository that points to the actual centent in the remote server. This means that only the collaborators who need the file can download it, reducing the size of the repository and improving collaboration.
          </p>
         
          <div >
              
              <HeadingTitle
              text='Installing'
              ID='Installing'
              />
              Refer to Git LFS, note that required Git &#8805; 1.8.2

              <CMD
                cmd={`#windows
                download git-lfs.github.com
                git lfs install
                
                #macOS
                brew install git-lfs
                git lfs install
                
                #Linux
                sudo apt-get install git-lfs
                git lfs install`}
              />
                  
              this will return output like this
              <CMD
                  cmd={`#Updated Git Hooks
                  #Git LFS initialized`}
              />
          </div>
          <div>
          <HeadingTitle
              text='Tracking Files'
              ID='Tracking-Files'
              />
         
              
              To track that .gif type of file in my repo, I just ran

              <CMD
               
                cmd= {`                git add .gitattributes
                git lfs track "*.gif`}
              />
this cmd let me git lfs track all .gif files in the repo directory, also will actually create the <LinkComponent
              text='.gitattributes'
              href='https://git-scm.com/docs/gitattributes'
              /> file in the root of the repo dir, so it has something like
              <CMD
             cmd='*.gif filter=lfs diff=lfs merge=lfs -text'
              />
              This is git mechanism that binds special behaviors to certain file patterns. Git LFS binds to filters using tracked file patterns via the .gitattributes file. And then you can absolutely commit/push
              <CMD
              cmd={`git add .
              git commit -m "gif files to lfs"
              git push origin main`}
              />

          </div>
          <div>
              see now the gif file content does not exist on my actual repo, It is jsut a pointer. so when someone clones or pulls the changes, git will try to pull the changes, there are a few ways to ensure the LFS content is
              <HighLight
              text='retrieved&available'
              />
              :
              <ListElement>
              a) Before deploying, you can run `git lfs fetch --all` to download all LFS objects.
              </ListElement>
              <ListElement>
b) On-demand fetching: Some hosting platforms (like GitHub Pages) can fetch LFS content on-demand when requested.
                  
              </ListElement>
              <ListElement>
                  c) Custom server logic: You could implement server-side logic to fetch LFS content when requested.

              </ListElement>
          </div>
          <div>
              <HeadingTitle
                  text='Untracking Files'
                  ID='Untracking-Files'
              
              />
              
              I could not have the content served for me on dev nor production, so I tried to untrack the files by compressing them to be less than 50MB (gh repo limit). first thing to strat with:
              <CMD
              cmd='git lfs untrack "*.gif"'
              />
              now you have to pull the files contents from the lfs remote server to your local machine by running:

              <CMD
            cmd='git lfs pull
            '
              />
              This command downloads the actual file content for any LFS-tracked files referenced in your repository.as it would be for any other regular file in the repository.
            

          </div>
          <div>
              
          <HeadingTitle
              text='Problems I confronted'
              ID='Problems-I-confronted'
              />
              <Badge
                      href='https://github.com/ebrahim-Ramadan/ebrahim-ramadan'
                  text='Source Code'
                  />
              To ensure the file type is completely removed from LFS tracking, you should remove it from the LFS cache. Run the following command:
              <CMD
              cmd='git rm --cached "*.gif"
              '
              >
                  <p>git rm --cached "*.gif"</p>
              </CMD>
              Ensure the file is untracked by Git LFS and that the actual file content is present in your local working directory. You can check if the file is tracked/not by listing all the files there:
              <CMD
              cmd='git lfs ls-files
              '
              />
              
          </div>
          <div>
              
          <HeadingTitle
              text='Gitlab Issues'
              ID='Gitlab-Issues'
              />
              
              
              <LinkComponent
              text='Gitlab'
              href='https://about.gitlab.com/'
              />
              checks files on push to detect LFS pointers. If it detects LFS pointers, GitLab tries to verify that those files already exist in LFS. If you use a separate server for Git LFS, and you encounter this problem:
              <ListElement>
                 - Verify you have installed Git LFS locally.
              </ListElement>
              <ListElement>
              - Consider a manual push with <HighLight text='`git lfs push --all`' />.
              </ListElement>
              
If you store Git LFS files outside of GitLab, you can disable Git LFS on your project.
              
          </div>
<Separator/>

          <div>
              
          <HeadingTitle
              text='Hosting LFS objects externally'
              ID='Hosting-LFS-objects-externally'
              />
              
              You can host LFS objects externally by setting a custom LFS URL:
              
              <CMD
            cmd='git config -f .lfsconfig lfs.url <URL>
            '
              />
             
              You might do this if you store LFS data on an appliance, like 
              <HighLight
              text='Nexus Repository'
              />.
              If you use an external LFS store, GitLab can’t verify the LFS objects. Pushes then fail if you have GitLab LFS support enabled.

              To stop push failures, you can disable Git LFS support in your
              <LinkComponent
              text='project settings'
              href='https://docs.gitlab.com/ee/user/project/lfs/settings.html'
              />
             . However, this approach might not be desirable, because it also disables GitLab LFS features like:
              <ListElement>
              - Verifying LFS objects.                  
</ListElement>
              <ListElement>
           - GitLab UI integration for LFS.
</ListElement>
              
          </div>
          <div>
          <HeadingTitle
              text='Machine Learning reproducibility crisis'
                  ID='Machine-Learning-reproducibility-crisis'
                  />
              <Badge text='ML devs'
                  href='https://dev.to/robogeek/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-3cnm?ref=ebrahim-ramadan-portfolio-webdev-git-lfs-blog
                  '
                  />

              <Quote
              text='The so-called crisis is because of the difficulty in replicating the work of co-workers or fellow scientists, threatening their ability to build on each others work or to share it with clients or to deploy production services. Since machine learning, and other forms of artificial intelligence software, are so widely used across both academic and corporate research, replicability or reproducibility is a critical problem.'
              />
             
              <div className='mt-2'>
                  Read the
                  <LinkComponent
                      href='https://dev.to/robogeek/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-3cnm?ref=ebrahim-ramadan-portfolio-webdev-git-lfs-blog'
                  text='full article'
                  />
                  by David on 
                  <LinkComponent
                      href='https://dev.to/robogeek/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-3cnm?ref=ebrahim-ramadan-portfolio-webdev-git-lfs-blog'
                  text='Why Git and Git-LFS is not enough to solve the Machine Learning Reproducibility crisis'
                  />
                   and see how machine learning use git LFS in its models, datasets, and others it is really helpful for the ML devs.  
              </div>
          </div>
          <BlogFooter textToCopy='https://ebrahim-ramadan.vercel.app/blogs/GitLFS' BlogLinks={GitLFSLinks}   />
         
    </div>
  )
}

export default GitLFS