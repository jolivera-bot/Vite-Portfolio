import React from 'react'
import WorkItems from './WorkItems';

const Work = () => {

  const data = [
    {
      year: 2012,
      title: 'Data entry',
      duration: '3 months',
      details: 'Proident culpa sit nulla aute id labore consequat ea dolore ipsum cillum esse consequat tempor.'
    },
    {
      year: 2014,
      title: 'Tech support',
      duration: '8 months',
      details: 'Proident culpa sit nulla aute id labore consequat ea dolore ipsum cillum esse consequat tempor.'
    },
    {
      year: 2015,
      title: 'Email support',
      duration: '3 Years',
      details: 'Proident culpa sit nulla aute id labore consequat ea dolore ipsum cillum esse consequat tempor.'
    },
  ]

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work;
