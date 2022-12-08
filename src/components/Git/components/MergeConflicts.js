import React from 'react'
import DocPaper from '../../DocPaper'
import GitMergeConflicts from './../files/GitMergeConflicts.png'
import GitAutoMerge from './../files/GitAutoMerge.png'
import GitContradictoryChanges from './../files/GitContradictoryChanges.png'
import GitHowMergeWorks from './../files/GitHowMergeWorks.png'
import GitHowMergeWorksRealistic from './../files/GitHowMergeWorksRealistic.png'
import GitTheMergeCommit from './../files/GitTheMergeCommit.png'
import GitRebaseStraight from './../files/GitRebaseStraight.png'
import GitRebaseStartingSituation from './../files/GitRebaseStartingSituation.png'
import GitRebaseStep1 from './../files/GitRebaseStep1.png'
import GitRebaseStep2 from './../files/GitRebaseStep2.png'
import GitRebaseStep3 from './../files/GitRebaseStep3.png'

const contents = [
    {
        order: 1,
        type: 'img',
        title: 'When they might occur',
        subtitle: 'How and When Conflicts Occur',
        images: [
            {
                img: GitMergeConflicts,
                title: 'When integrating commits from different sources',
                details: [
                    { title: 'code changes' },
                    { title: 'file deletions' }
                ]
            },
            {
                img: GitAutoMerge,
                title: 'Most of time, there is no conflicts',
            },
            {
                img: GitContradictoryChanges,
                title: 'When contradictory changes happen',
                details: [
                    { title: 'Git confused, which changes must be applied!' },
                    { title: 'You have to choice which one is taken' },
                    { title: '"git merge <targetBranch>" merges current branch to target branch.' },
                    { title: 'If conflict occurs, you have to choice which changes must applied' },
                    { title: 'After all conflict resolved, commit changes and push it to target branch.' },
                    { title: '"git merge --abort" or "git rebase --abort" commands undo merge' },
                ]
            }
        ],
        descriptions: [

        ],
    },
    {
        order: 2,
        type: 'img',
        title: 'How a Merge Works',
        images: [
            {
                img: GitHowMergeWorks,
                title: 'A simplified scenario',
                details: [
                    { title: 'Branchs allway have a common commit. (C1, C2)' },
                    { title: 'Just branch B changed in this example' },
                ]
            },
            {
                img: GitHowMergeWorksRealistic,
                title: 'A more realistic scenario',
                details: [
                    { title: 'Branchs allway have a common commit. (C1, C2)' },
                    { title: 'Both branches changed here' },
                ]
            },
            {
                img: GitTheMergeCommit,
                title: 'Git Merge Commit',
                details: [
                    { title: 'After merge commit, C5 is the new common commit of brach-A' },
                    { title: 'C5 is the ancestor commit of new branches of created from branch-A, until new commit done to branch-A' },
                ]
            }
        ],
        descriptions: [

        ],
    },
    {
        order: 2,
        type: 'img',
        title: 'Git Rebase',
        images: [
            {
                img: GitRebaseStraight,
                title: 'A straight line of commits',
                details: [
                    { title: 'Branchs allway have a common commit. (C1, C2)' },
                    { title: 'Just branch B changed in this example' },
                ]
            },
            {
                img: GitRebaseStartingSituation,
                title: 'The starting situation',
                details: [
                    { title: 'We want to merge branch-B to its parent branch-A' },
                    { title: 'Just branch B changed in this example' },
                    { title: 'the command: git rebase branch-B' }
                ]
            },
            {
                img: GitRebaseStep1,
                title: 'Step 1',
                details: [
                    { title: 'Removing commits of branch-A after ancestor commit of branch-B as a temporary commits (C3), parking them somewhere ' },
                ]
            },
            {
                img: GitRebaseStep2,
                title: 'Step 2',
                details: [
                    { title: "Merging branch-B to it's ancestor" },
                    { title: "At this point, both branches are equal" },
                ]
            },
            {
                img: GitRebaseStep3,
                title: 'Step 3',
                details: [
                    { title: "Merg parked commits to branch-A, just after branch-B" },
                    { title: "At this point, both branches are equal" },
                    { title: 'Rebase rewrites commit history, because it changes the order of commits and;' },
                    { title: "C3* is a different commit from C3, with no parents (ancestor), but the changes are the same" },
                ]
            }
        ],
        descriptions: [
            'Rebase is not better or worst than merge',
            'It is different!',
            'Do not use rebase on commits that you have already pushed/shared to on a remote repository!',
            'Instead, use it for cleaning up your local commit history before merging it into a shared team branch.',
        ],
    }
]

const header = 'Merge Conflicts';
const MergeConflicts = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
}


export default MergeConflicts
