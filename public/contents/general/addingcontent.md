Wellcome to Patika Framework developed by .NET team. We are glad you are here to add a new content! 😃

You should follow the steps to add new content in the framework documentation:

> 1. Download the repository of the documentation from [our Github page](https://github.com/esraythelite/PatikaFrameworkDocs).
> 2. Clone the code in your program and open.
> 3. Here is the main page.
> >![image](/images/MainPage.png) 
> 4. Create your content skeleton in **menu.json** file under public:
> >![contentskeleton](/images/ContentSkeleton.jpg)
> 
> > - The json document is explained as:
> 
>>> **title**
: give your title to your conent
>
>>> **author**
: write your name and surname
>
>>> **version**
: if your content is blong to the first version write down 1.1 if not 1.2
>
>>> **link**
: give the path of your md file as */contents/exampletitle.md (your title and yout md file name must be the same!)
>
>>> **status**
: if your content is ready to review enter 0, if it is reviewing enter 1, and if it is verified by other colleagues enter 2
>
>>> **isGeneral**
: if your content is not depend on the version of the framework (meaning it is general) write true, else false
>
>>> **children[]**
: this is the field where you can write down as many subheadings as you want (max 3 is preferrable) as indicated in the red rectangle in the above image (*notice that all subheadings must also have their own md files*)
> 5. Add your md file under public/public/contents as followiing
> >![createmdfile](/images/CreateMdFile.png)
> 
> >  *** *The name of the file should not contain numbers, symbol, and uppercase characters*
> 
> >![mdfile](/images/MdFile.png)
> 
> > You can go to the [link](https://www.markdownguide.org/cheat-sheet/) and design your Markdown file.
> 
> ### Have a nice work!