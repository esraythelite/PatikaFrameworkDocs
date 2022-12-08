import React from 'react'
import DocPaper from '../../DocPaper'
import gitMainlineDevelopment from './../files/GitMainlineDevelopment.png'
import gitStateReleaseFutureBranches from './../files/GitStateReleaseFutureBranches.png'
import gitHubFlow from './../files/GitHubFlow.png'
import gitFlow from './../files/GitFlow.png'


const contents = [
  {
    order: 1,
    type: 'text',
    title: 'A Written Convention',
    subtitle: 'Agree on a Branching Workflow in Your Team',
    descriptions: [
      "Git allows you to create branches - but it doesn't tell you how to use them!",
      "You need a written best practices of how work is ideally structured in your team - to avoid mistakes and collisions.",
      "It highly depends on your team/team size, on your project, and how to handle releases.",
      'It helps to onboard new team members ("This is how we work here")'
    ],
  },
  {
    order: 2,
    type: 'text',
    title: 'Integrating Changes & Structuring Releases',
    descriptions: [
      '1. Mainline Development ("Allways Be Integrating")',
      "2. State, Release and Feature Branches",
    ],
  },
  {
    order: 3,
    type: 'img',
    title: 'Mainline Development',
    images: [
      {
        img: gitMainlineDevelopment,
        title: '"Allways Be Integrating"',
        details: [
          {
            title: '- few branches',
          },
          {
            title: '- relatively small commits to manage easily',
          },
          {
            title: '- high-quality testing & QA standards',
          },
        ]
      }
    ],
    descriptions: [
      'We will not use this flow',
    ],
  },
  {
    order: 4,
    type: 'img',
    title: 'State, Release and Feature Branches',
    images: [
      {
        img: gitStateReleaseFutureBranches,
        title: 'Branches Enchance Structures & Workflows',
        details: [
          {
            title: '- different types of branches',
          },
          {
            title: '- ...fulfill different types of jobs',
          }
        ]
      }
    ],
    descriptions: [
      'We will not use this flow',
    ],
  },
  {
    order: 5,
    type: 'img',
    title: 'Long-Running & Short-Lived Branches',
    subtitle: 'Two main types of branches',
    images: [
      {
        img: gitStateReleaseFutureBranches,
        title: 'types of branches',
        details: [
          {
            title: 'Long-Running:',
            subDetails: [
              'exists through the complete lifetime of the project',
              'often they mirror "stages" in your development life cycle',
              'common convention: no direct commits!',
              'ex: master (main), develop'
            ]
          },
          {
            title: 'Short-Lived:',
            subDetails: [
              'for new features, bug fixes, refactorings, experiments...',
              'will be deleted after integration (merge/rebase)',
              'ex: Future branches', 
            ]
          }
        ]
      }
    ],
    descriptions: [
      '1. Mainline Development ("Allways Be Integrating")',
      "2. State, Release and Feature Branches",
    ],
  },
  {
    order: 6,
    type: 'img',
    title: 'Two Example Branching Strategies', 
    images: [
      {
        img: gitHubFlow,
        title: 'GitHub Flow',
        details: [
          {
            title: 'Very simple very lean:',
            subDetails: [
              'only one long-running branch -> main ', 
              '+ future branches', 
            ]
          }
        ]
      },
      {
        img: gitFlow,
        title: 'Git Flow',
        details: [
          {
            title: 'more structure, more rules',            
          }, 
          {
            title: 'long-running: "main" and "develop"',            
          },
          {
            title: 'Short-Lived: features, realeses, hotfixes',           
          }
        ]
      }
    ],
    descriptions: [      
      "We prefer git flow :) ",
    ],
  },
  {
    order: 7,
    type: 'text',
    title: 'The "Best" Branching Model',     
    descriptions: [    
      "There is no perfect model!" ,
      "Consider your project, release cycle, and team",
      'Take inspiration from existing models like "Github Flow", "Git Flow"',
      "=> create your own model!"
    ],
  }
]

const header = 'Branching Strategies';
const Branching = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default Branching
