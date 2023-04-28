import { CiGlobe } from 'react-icons/ci'
import Image from 'next/image'
import logoDagangan from '@images/dagangan.png'
import logoHijup from '@images/hijup.webp'
import logoVirgo from '@images/virgonew.webp'
import logoAmrtha from '@images/amartha.png'
import Link from 'next/link'
// import Router from 'next/router'


const WorkCard = () => {

  let resume = [
    {
      company: 'Dagangan',
      title: 'Software Engineer Frontend',
      logo: logoDagangan,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
      url: 'https://belanja.dagangan.com/'
    },
    {
      company: 'HijUp',
      title: 'Software Engineer Frontend',
      logo: logoHijup,
      start: '2021',
      end: '2021',
      url: 'https://belanja.dagangan.com/'
    },
    {
      company: 'Virgo',
      title: 'Frontend Engineer',
      logo: logoVirgo,
      start: '2021',
      end: '2021',
      url: 'https://virgoku.id/'
    },
    {
      company: 'Amartha',
      title: 'Software Engineer',
      logo: logoAmrtha,
      start: '2018',
      end: '2021',
      url: 'https://amartha.com/id_ID/'
    },
  ]
  return (
    // <div className="rounded-2xl border w-ful border-zinc-100 p-6 dark:border-zinc-700/40 rounded-2xl dark:bg-gray-900 bg-white col-span-2 aspect-2/1">
    <div className="col-span-2  aspect-2/1 pb-4 md:pb-0 w-full flex items-center justify-center rounded-2xl dark:bg-gray-900 bg-white p-2 text-fuchsia-100 md:col-span-2">
      {/* <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2> */}
      {/* <ol className="space-y-4"> */}
      <ol className="">
        {resume.map((role: any, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {role.logo && <Image src={role.logo} alt="" className="h-5 w-5 rounded-full" unoptimized />}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center">
                {role.company}
                <Link href={role.url}>
                  <a target="_blank">
                    <CiGlobe size={12} className="ml-2 cursor-pointer" />
                  </a>
                </Link>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  );
};

export default WorkCard;
