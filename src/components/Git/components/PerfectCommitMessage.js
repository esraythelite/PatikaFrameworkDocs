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
        title: 'Perfect Commit Message',
        images: [
            {
                img: goodCommit,
                title: 'git commit',
                subtitle: "Captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.",
                details: [
                    {
                        title: "Write a good message that summarizes what changed in this files",
                    },
                    {
                        title: "Message subject:",
                        subDetails: [
                            "Summary of what happened"
                        ]
                    },
                    {
                        title: 'Message body:',
                        subDetails: [
                            "What is different than before",
                            "What is the reason for the change",
                            "Is there anything to watch out for / anything particularly remerkable?"
                        ]
                    },
                ]
            }, 
            {
                img: gitCommitMessageExample,
                title: 'commit message',
                subtitle: "as example",
                details: [  
                    {
                        title: "Message subject:",
                        subDetails: [
                            "Add git documentation menu"
                        ]
                    },
                    {
                        title: 'Message body:',
                        subDetails: [
                            "Menu for git documentation",
                            "Add routing for app", 
                        ]
                    },
                    {                       
                        title: "Add Commit message on terminal",
                        subDetails: [
                            "Run command : git commit",
                            '"Git commit" opens your text editor for entering commit message',
                            "Write subject to 1.Line of the editor",
                            "Leave 2.Line of editor empty, for notify git you will enter body",
                            "Write message body from 3.Line, you can spread body to mulptiple lines"
                        ]
                    },
                ]
            }
        ],
        descriptions: [
            "Changes and commit message must be related",
            "Compose good commit message",
            "Select specific files/changes for next commit",
            'Message must contains "Summary of what happened", "What is different from than before" and "Reason for the changed"'
        ],
    }
]

const header = 'Perfect Commit Message';
const PerfectCommitMessage = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
} 

export default PerfectCommitMessage
