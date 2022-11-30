import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'NullEmailSender',
    language: 'csharp',
    startingLineNumber: 4,
    item: ` 
    namespace Patika.Framework.Identity.Service
    {
        public class NullEmailSender : IEmailSender
        {
            public Task SendEmailAsync(string email, string subject, string htmlMessage) => Task.CompletedTask;
        }
    } `,
    descriptions: [
       ],
  } 
]

const header = 'Patika.Framework.Identity.Service';
const NullEmailSender = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default NullEmailSender