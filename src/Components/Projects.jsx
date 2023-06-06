import React from 'react'
import ProjectItems from './ProjectItems'
import project from '../assets/project.jpg'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-2-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Reprehenderit nulla mollit est quis nulla reprehenderit. Est laboris excepteur duis ea adipisicing aute. Ad veniam est cupidatat officia sit quis excepteur. Aliquip enim elit incididunt qui fugiat adipisicing nulla Lorem adipisicing eiusmod sint. Amet elit anim laboris magna officia non. Sint ipsum sit quis do. In aute dolore sunt sunt occaecat proident ipsum nulla laboris irure ullamco do nulla adipisicing.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItems img={project} title='Project' />
      <ProjectItems img={project1} title='Project1' />
      <ProjectItems img={project2} title='Project2' />
      <ProjectItems img={project3} title='Project3' />
      </div>
    </div>
  )
}

export default Projects
