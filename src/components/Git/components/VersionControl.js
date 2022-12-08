import React from 'react'
import DocPaper from '../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'text',
        title: 'What is version control?',
        subtitle: 'Also known as source control',
        descriptions: [
            'Version control is the practice of tracking and managing changes to software code.',
            'Version control systems are software tools that help software teams manage changes to source code over time.',
            'As development environments have accelerated, version control systems help software teams work faster and smarter. ',
            'They are especially useful for DevOps teams since they help them to reduce development time and increase successful deployments.',
            'Version control software keeps track of every modification to the code in a special kind of database. ',
            'If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.'
        ],
    },
    {
        order: 2,
        type: 'text',
        title: 'Why we have to use version control systems',
        descriptions: [
            'Using version control software is a best practice for high performing software and DevOps teams. Version control also helps developers move faster and allows software teams to preserve efficiency and agility as the team scales to include more developers.',
            'Version Control Systems (VCS) have seen great improvements over the past few decades and some are better than others. VCS are sometimes known as SCM (Source Code Management) tools or RCS (Revision Control System). One of the most popular VCS tools in use today is called Git. Git is a Distributed VCS, a category known as DVCS, more on that later. Like many of the most popular VCS systems available today, Git is free and open source. Regardless of what they are called, or which system is used, the primary benefits you should expect from version control are as follows.',
            'Benefits of version control systems are listed on the next section',],
    },
    {
        order: 3,
        type: 'text',
        title: 'Benefits of version control systems',
        descriptions: [
            '___',
            'A complete long-term change history of every file :',
            '* Every individuals changes',
            '* Including the creation and deletion of files',
            '* History info : Author, date and written notes about changes',
            "* Having the complete history enables going back to previous versions",
            '___',
            'Branching and merging :',
            "* Having team members work concurrently is a no-brainer, but even individuals working on their own can benefit from the ability to work on independent streams of changes",
            '* Creating a "branch" in VCS (Version Control System) tools keeps multiple streams of work independent from each other while also providing the facility to merge that work back together, enabling developers to verify that the changes on each branch do not conflict. ',
            "* Many software teams adopt a practice of branching for each feature or perhaps branching for each release, or both",
            "* There are many different workflows that teams can choose from when they decide how to make use of branching and merging facilities in VCS.",           
            '___',
             'Traceability :',
            '* Being able to trace each change made to the software and connect it to project management and bug tracking software such as Jira, and being able to annotate each change with a message describing the purpose and intent of the change can help not only with root cause analysis and other forensics. ',
            '* Having the annotated history of the code at your fingertips when you are reading the code, trying to understand what it is doing and why it is so designed can enable developers to make correct and harmonious changes that are in accord with the intended long-term design of the system. ',
            '* This can be especially important for working effectively with legacy code and is crucial in enabling developers to estimate future work with any accuracy.',
        ],
    },
    {
        order: 4,
        type: 'text',
        title: 'Developing software without any version control using',
        subtitle: 'It is possible, but..',
        descriptions: [
            'While it is possible to develop software without using any version control, doing so subjects the project to a huge risk that no professional team would be advised to accept.',
            'So the question is not whether to use version control but which version control system to use.',
            'There are many options, but we already choiced to use Git. The most widely used modern version control system in the world today is Git.',
            'Other popular software industry VCS options: ',
            '* Mercurial',
            "* SVN ",
            '* Perforce', 
        ],
    } 
]

const header = 'Version Control';
const VersionControl = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
}

export default VersionControl
