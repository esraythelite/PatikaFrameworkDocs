import React from 'react'
import DocPaper from '../../DocPaper'
import badCommit from './../files/GitBadCommit.png'
import goodCommit from './../files/GitGoodCommit.png'
import gitStatus from './../files/GitStatus.png'
import gitCommitMessageExample from './../files/GitCommitMessageExample.png'


const contents = [
    {
        order: 1,
        type: 'img',
        title: 'Perfect Commit',
        images: [
            {
                img: gitStatus,
                title: 'git status',
                subtitle: 'Displays the state of the working directory and the staging area.',
                details: [
                    "Untracked files are newly added, and not pushed to the repo yet"
                ]
            }, {
                img: badCommit,
                title: 'git add',
                subtitle: 'adds changes in the working directory to the staging area',
                details: [
                    {
                        title: '"git add <file1 file2 ..>" adds selected files',
                    },
                    {
                        title: '"git add ." adds all changed files. Use this command when all changes are related',
                    },
                    {
                        title: "Do not add all changes in a single commit",
                    },
                    {
                        title: "Seperate changes by context"
                    }
                ]
            }],
        descriptions: [
            "Add the right changes",
            "Changes and commit message must be related",
        ],
    }
]

const header = 'Perfect Commit';
const PerfectCommit = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
} 

export default PerfectCommit
