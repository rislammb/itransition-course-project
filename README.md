# Course Project

Use this (depending of what group you are in):
**.NET**: C#, Blazor or MVC (you choose)
or
**JavaScript**: JavaScript or TypeScript (you choose), React (ask if you want to replace React with Angular)

`You can use any database and any other libraries, components or even frameworks (but not replace specified above).`
There are no limitations in the area of architecture or used services (you don't even have to separate front and back; it's not a recommendation, but you may go this way). Also, you may replace Bootstrap with any CSS framework and/or UI library you like.

You have to implement _a Web application for customisable forms_ (quizzes, tests, questionnaires, polls, etc.). Something similar to Google Forms. Users define "_templates_" (the set of questions, their names and descriptions, etc.), and other users fill out "forms" (their specific answers) using these templates (e.g., enter or select values in the fields).

E.g., I create a template with one integer-valued question "How many apples do you eat per day?" Users fill out corresponding forms, and I can analyse the answers.

### Next

Non-authenticated users cannot create templates, leave comments and likes, or fill out the forms. But they can use search and view templates in read-only mode.

Admin-page allow user management—view; block; unblock; delete; add to admins; remove from admins. ADMIN IS ABLE TO REMOVE ADMIN ACCESS FROM ITSELF; it’s important.

Admin sees all pages as their author (for example, admin can open a template of another user and add a question to it or open a form for the user and edit an answer; so, admin is virtually the owner of every template and every form).

Filled-out forms (answers) can be seen by the author as well as the creator of the responding template and admins. Templates are accessible for viewing for everyone.

Only the admin or creator of the template can manage it (add/delete/edit questions).

Only the admin or creator of the form can manage it (delete it or edit answers).

Users can register and authenticate via site forms.

Every page (in the top header) provides access to the full-text search. Search results are always templates (e.g., if text is found in the question description or template comments, the search result links to the template itself, not to the question or comment).

### Next

Every user has its own personal page where they can manage the sortable table of templates (create new, delete, or edit) and the sortable table of the filled forms (probably on two separate tabs).

Each template in the table is a link to the template page that contains several tabs:

1. general settings like title, description, etc. (see below) as well as access settings (all authenticated users or specified user only),
1. editable set of questions,
1. "results", i.e. all filled-out forms based on the given template (with the links to the forms, of course),
1. aggregation of the results/answers (e.g., average value for a numeric field, most often answer for a string field, etc.).

The template author can click any form in the list on the template page and open the form filled by another user in read-only mode.

When the template is shown to the other user, it can be filled out (stored as a "form") if that user is authenticated, and access settings allow that user to fill out the form.

### Next

Settings of the template are the following:

1. title,
1. description (with markdown formatting support),
1. topic (one value from the predefined list, for example, "Education," "Quiz," and, of course, "Other"—new values to this list are added through the database; there is no need for the UI),
1. optional image/illustration (uploaded by the users into the cloud),
1. tags (the user can enter several tags; it’s necessary to support autocompletion—when the user starts text entering, you have to display a dropdown with tags starting with the entered letter already stored in the database).

Every template can be marked as "public" (can be filled by any authenticated user), or the user selects the set of users registered on the site. The control for the user selection should provide autocompletion for names _and_ for e-mails. Added users can be removed. Provide some sorting of the selected user (user-switchable between name and e-mail).

### Next

Of course, the template allows to specify custom questions ("fields"). There are fixed fields: user (filled automatically) and date (filled automatically).

Also, it's possible to add several questions with the following types:

1. up to 4 single-line strings,
1. up to 4 multiple-line texts,
1. up to 4 positive integers,
1. up to 4 checkboxes.

Each question has a title, description, and a boolean value that defines whether the question will be displayed in the table of the filled-out forms (on the tab of the template).

It's possible to reorder questions with drag'n'drop.

For example, I want to create a questionnaire for job candidates. I add the following questions:

1. Single-line question "Position" ("What position do you apply for?"),
1. Integer-value question "Experience" ("Work on the commercial projects or freelance (in years)"),
1. Single-line question "Contact" ("Phone number or Skype"),
1. Text question "Additional information"/("Write anything in the field below").

Main page of the app contains:

1. gallery of latest templates (name, description or image, author),
1. table of the top 5 most popular templates (with the largest number of filled forms);
1. tag cloud (when the user clicks on the tag, you display the list of templates—in general, you should use “search results page” for it).

When the template is opened (by the author or another user that has access), there is a comments list at the bottom. Comments are linear, added only to the end (it’s impossible to insert a comment after a previous one). Comments have to be updated automatically—when the template page is opened and somebody adds a comment to it, it should be added automagically (it’s possible to have a 2-5 second delay).

Every template also has "likes" (no more than one from one user per given template).

### Next

The application should support two languages: English and any other—Polish, Spanish, Uzbek, Georgian, etc. (the user selects one and the choice is saved). Only UI is translated, not the user content.

The application should support two visual themes (skins): light and dark (the user selects one and the choice is saved).

It’s required:

1. to use CSS framework, e.g., Bootstrap (but you can use any CSS other framework and any set of control),
1. to support different screen resolutions (including mobile phones), be adaptive,
1. to use ORM to access data (sequelize, prism, typeorm, EF—anything you like),
   1 to use a full-text search engine (either an external library or using native database features).

DON'T:

1. don't use a full database scan with SELECTs,
1. don't upload images to your Web server,
1. don't perform database queries in the loop.

**Is it possible to use the X library? Yes, yes to all, remember my choice.**

### Next

Optional requirements (for a separate grade, only if all other requirements are implemented):

1. authentication via social networks,
1. add questions with the type “one from the given list” with the ability to specify a list of available options (e.g., template auther create a "Position" question with options "Developer"/"DevOps"/"Tester"),
1. add any number of questions of any type (not 0 or 1 or 2 or 3 or 4, but any number of them),
1. add the "E-mail me the copy of my answers" checkbox to the form.

IMPORTANT NOTE. Do not copy any code from code heaps. IT’S MUCH BETTER TO DO LESS, BUT UNDERSTAND COMPLETELY WHAT YOU WRITE EXACTLY. I’m dead serious—we will ask you to modify your code on the fly, add something or change something, will ask you questions, and will check your ability to work with your project code. It’s _more important than the number of implemented requirements_. Your supervisor saw a lot of similar projects and knows probably most of the available stuff on this topic on the Internet. Do not copy. Use libraries as much as possible. But don’t copy.

_You have to use ready components, libraries, and controls_. E.g., use a ready-to-use control to render markdown or a ready-to-use control to upload images with drag'n'drop or a ready-to-use control to enter tags or a ready-to-use control to render tag cloud, etc. The less custom code your app contains, the better.

AND THE MOST IMPORTANT: Start your work from the deployment of the static "Hello, world" page and **have a deployable version all the time**.

**_AND EVEN MORE IMPORTANT: Defend your project even if you've done a small part of it._**

### Next

Please don't even think about using JSON to serialise forms. It's a bad idea. You will need to _edit_ templates, and answers should be somehow preserved. E.g., it's possible to change the question title. Or remove the question. Of course, you shouldn't try to edit filled-out forms on the fly.

Think about this problem in this way: all the forms for a given template should be "compatible," and you need to calculate aggregate values for them.

Also, don't even think about generating tables in the database on the fly. It's bad idea for several reasons.

You need up to 4 questions of each type only. It means that you can consider the questions fixed and only manage whether they are shown and what titles are rendered. The relational database fits this task _perfectly_. It will work fast, and you won't get into trouble with "I don't know how to aggregate data from documents with different fields."
