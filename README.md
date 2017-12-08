# WorkReal

Have you ever had a job that sounded better than it actually was?
Or a bad employer who you can't say anything about for fear of repercussion?

WorkReal is a single-page __anonymous social network__ designed for mobile. You see _reals_,
the details of fellow professionals' workdays, sorted by closeness to your current role.
You can also see all the _reals_ for a single role of a single user--a _workreal_.

WorkReal is a way to get a feel for how your work compares with others in similar positions and to learn
about roles that turned out differently than advertised. You will find both positive and negative _workreals_,
and can send the role's holder a secret message to inquire for further details.

## MVPs
1. User Auth
  * email validation

2. Role
  * title
  * industry/sector
  * location (as specific as possible while remaining anonymous)
  * approx. start date (select from a season)
  * approx. end date (select from a season to terminate role; upon submit, a new role form)
  * current project(s)
  * can update email & password

3. _Reals_ (posting)
  * _for-real_ (form: _Describe your day's work, by project_)
  * _truthing_ (liking)
  * deleting (only if still in that role & on that project)
  * editing (only if still in that role & on that project)

4. Search (in nav; serves _reals_ index below)
  * see _reals_ by title, location, current project (defaults to _reals_ closest to current user's role)
  * click on title to see single user's _reals_ reverse-chronologically for that role

5. Secret Messages
  * send an email to a user by selecting their role & writing a message

## Bonus
6. Stats
  * post the time-breakdown of your workday by categories (including solo vs. team, arrival & departure)

7. Last Words
  * review a role as you leave it (including time-lags, culture points, & name of company)

8. Forgotten Password
  * fill out role details to sign in instead

## UX = dead-simple
  * Sign Up/In
  * if new user, fill out your current role
  * _Real_ page w/ most relevant _reals_ plus _for-real_
  * update role/credentials icon, search bar, & sign out icon in nav
  * signing out auto-closes the app

## Schema
`users`

| --- | --- |
| id       | integer |
| email    | email |
| password | string |

`roles` _(location datatype?)_

| --- | --- |
| id       | integer |
| user_id  | integer |
| title    | string |
| industry | string |
| state    | string |
| county   | string |
| city     | string |
| start    | date? |
| end      | date? |
| review   | text |

`projects`

| --- | --- |
| id      | integer |
| role_id | integer |
| name    | string |

`reals`

| --- | --- |
| id         | integer |
| role_id    | integer |
| project_id | integer |
| updated_at | timestamp |
| body       | text |

`likes`

| --- | --- |
| id       | integer |
| user_id  | integer |
| real_id  | integer |
