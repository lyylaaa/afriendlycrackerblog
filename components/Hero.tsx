import IgIcon from './icons/IgIcon'
import RightArrowIcon from './icons/RightArrowIcon'
import RightArrowIconLarge from './icons/RightArrowIconLarge'
import LearnIcon from './icons/LearnIcon'
import DiscoverIcon from './icons/DiscoverIcon'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="/blog"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xs bg-primary-400 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{' '}
          <span className="text-sm font-medium">Look at our latest post!</span>
          <RightArrowIcon />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Discover, Learn and Secure!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          This is an innovative project focused on cybersecurity education, where we tackle complex
          news and concepts but make them easily understandable, making online security a topic
          accessible to all ૮₍ • ᴥ • ₎ა
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <RightArrowIconLarge />
          </a>
          <a
            href="https://www.instagram.com/afriendlycracker/"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div className="mr-2">
              <IgIcon />
            </div>
            Join us on IG
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-14 text-left md:max-w-full max-w-sm m-auto">
          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">News</h3>
                <p>Every weekend there will be news in the world of cybersecurity!</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <DiscoverIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Discover</h3>
                <p>
                  Read about technologies you've never heard of and share them with your friends!
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <LearnIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Learn</h3>
                <p>Learn computer science concepts in depth along with mathematics!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
