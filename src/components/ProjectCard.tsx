'use client'

// import { BlurImage, Link } from '@tszhong0411/ui'
import Image from 'next/image';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Link from 'next/link';


// import { type ProjectMetadata } from '@/lib/mdx'

type ProjectCardProps = any
type ProjectCardsProps = {
  projects: any[]
}

const ProjectCards = (props: ProjectCardsProps) => {
  const { projects } = props

	console.log('projects', projects)

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  )
}

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, techstack, slug, url } = props

	console.log('props', props)

  return (
    <div
      // href={''}
      className='group rounded-xl px-2 py-4 shadow-feature-card dark:shadow-feature-card-dark'
    >
      {/* <BlurImage */}
			<Image
        src={`/images/projects/${slug}/cover.png`}
        width={1280}
        height={832}
        // imageClassName='group-hover:scale-105'
        alt={name}
        className='rounded-lg'
      />
      <div className='flex-1 px-2 py-4'>
        <div className='space-y-2'>
					<div className='flex gap-2 items-center'>
						<h2 className='text-2xl font-bold'>{name}</h2>
						<a href={url} target="_blank">
							<HiArrowRightOnRectangle size={20} className='cursor-pointer' />
						</a>
					</div>
          <div className='text-muted-foreground'>{description}</div>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {techstack.map((t) => {
            const { label } = t

            return (
              <div
                key={label}
                className='rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900'
              >
                {label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
