import React from 'react'
import DocPaper from '../../DocPaper'
import GitWithoutPullRequest from './../files/GitWithoutPullRequest.png'
import GitWithPullRequest from './../files/GitWithPullRequest.png'
import GitConfirmedPullRequest from './../files/GitConfirmedPullRequest.png'
import GitForkAndPullRequest from './../files/GitForkAndPullRequest.png'



const contents = [
  {
    order: 1,
    type: 'img',
    title: 'Communicating About and Reviewing Code', 
    images: [
      {
        img: GitWithoutPullRequest,
        title: 'Without Pull Requests',
        details: [
          {
            title: "Directly merging to main branch",
          },
          {
            title: 'No code review, no communication about changes',
          }
        ] 
      }
      ,
      {
        img: GitWithPullRequest,
        title: 'Creating Pull Request',
        subtitle: 'Creating a pull request before merging',        
      },
      {
        img: GitConfirmedPullRequest,
        title: 'Accepting Pull Request',
        subtitle: 'Accepting pull request mergs the branch to main branch',
        details: [
          {
            title: 'Pull request accepting must be done by other team members',
          }, 
        ]
      }],
    descriptions: [
      "Main concept: wait for code review, contributing about changes with team and confirmation of changes before merging feature branch to main",
      "Do not directly merg to main branch",
      "Pull request mechanism works differently on github, gitlab, bitbucket etc."
    ],
  },
  {
    order: 2,
    type: 'img',
    title: 'Contributing Code to Other  Repositories', 
    images: [
      {
        img: GitForkAndPullRequest,
        title: 'Fork',
        subtitle:'Fork is your personal copy of the repository.' 
      }],
    descriptions: [
      "Sometimes you can't directly access to repository; but you can fork the repository (especially open source repositories).",
      "In this fork you can create your own branches do some changes. After you pushed changes, you can create a pull request to main repository.",
    ],
  }
]

const header = 'Pull Requests';
const PullRequests = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default PullRequests
