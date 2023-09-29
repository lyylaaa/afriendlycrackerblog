import CameraIcon from './icons/CameraIcon'
import RightArrowIcon from './icons/RightArrowIcon'
import RightArrowIconLarge from './icons/RightArrowIconLarge'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-500 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{' '}
          <span className="text-sm font-medium">Flowbite is out! See what's new</span>
          <RightArrowIcon />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world's potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <RightArrowIconLarge />
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <CameraIcon />
            Watch video
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-14 text-left md:max-w-full max-w-sm m-auto">
          <div className="">
            <div className="flex flex-row">
              <div className="p-1">
                <CameraIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Customizable Categories</h3>
                <p>Host code that you don't want to share with the world in private.</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1">
                <CameraIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Customizable Categories</h3>
                <p>Host code that you don't want to share with the world in private.</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1">
                <CameraIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Customizable Categories</h3>
                <p>Host code that you don't want to share with the world in private.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero