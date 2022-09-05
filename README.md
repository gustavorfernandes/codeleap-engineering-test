# Engineering Test

<img src="https://codeleap.co.uk/static/838fbf40bc335c2ffd2ea5ee19ed3baa/cf9b5/codeleap_logo_white.png" width="400px">

Front-End challenge held to participate in the CodeLeap selection process.

## Starting

Access links:

Application: 

```bash
https://codeleap-engineering-test-gustavo-fernandes.vercel.app/
```

API endpoints:

The data used is hosted at the following URL:

```bash
https://dev.codeleap.co.uk/careers/
```

## The challenge

The following features were requested for this challenge:

- Login screen with simple functionality that keeps the username stored in string format
- Dashboard page where posts will be listed through API data consumption
- Ability to create posts
- Possibility to edit or delete the post if the user is compatible
- List update automatically when a new post is created
- Sort the list by the most recent on top

# Testing the project

## Login screen

On the login screen, the user will be able to enter their username. By clicking the enter button, the user will be taken to the dashboard page. If the input is empty, the enter button must be disabled.

## Dashboard screen

On this screen, we have the post creation card and the feed with the API data, which should appear as soon as the page is loaded.

## Creating a post

In the post creation form, the user must write the title and content of the post, in their respective fields. If any of these fields is empty, the create button must be disabled. 

By clicking on the create button, the list will be updated with the new post. If the user owns some of the posts, the icons for editing and deleting the post will appear.

## Editing a post

By clicking on the edit icon, a modal will be opened, with a form similar to the one for creating a post. The user will then be able to edit the post as desired and save by clicking the save button.

## Deleting a post

When clicking on the delete post icon, an alert will appear on the screen, asking the user if he really wants to delete the post. By clicking ok, the post will be deleted. By clicking cancel, the alert will be closed by returning to the main page.
