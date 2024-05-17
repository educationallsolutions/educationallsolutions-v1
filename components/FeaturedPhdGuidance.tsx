"use client"
import Link from 'next/link'
import { Spotlight } from '@/components/ui/Spotlight';
import courseData from "@/data/phdGuidanceData.json";
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean
}

const PhdGuidance = () => {

  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className='py-12 text-black'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className='text-center'>
        <h2 className=' text-lg text-teal-600 font-semibold tracking-wide uppercase'>Featured Ph.D Guidance</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl font-sans'>Learn with the Best</p>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className=' flex justify-center'>
              <BackgroundGradient className='flex flex-col rounded-[22px] dark:bg-zinc-200 overflow-hidden h-full max-w-sm'>
                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                  <p className=' text-xl sm:text-xl text-zinc-200 mt-4 mb-2 dark:text-black'>{course.title}</p>
                  <p className='text-lg text-neutral-300 dark:text-neutral-400 flex-grow'>{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-amber-400 hover:border-amber-400 hover:text-black border-2 border-transparent">
                      Learn More
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      {/* <div className='mt-20 text-center text-black'>
        <Link href={"/phd-guidance"}
          className=''
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            View All Courses
          </button>
        </Link>
      </div> */}
    </div>
  )
}

export default PhdGuidance