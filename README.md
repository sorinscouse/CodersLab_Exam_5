<img alt="Logo" src="https://mentor.coderslab.pl/wp-content/uploads/2018/12/CL_IT_logo_ENG_1040x261_black_YELLOW-1.png" width="400">

# React &ndash; exam

## Guidelines for github

1. [*Fork*](https://guides.github.com/activities/forking/) the repository containing exercises.
2. Clone the repository onto your computer using the command: `git clone repository_address`.
You will find the address of the repository by pressing "Clone or download" button on its webpage.
3. Complete the exercises and commit changes to your repository using the commands below.
`git add filename` will add a single file which you have changed.
If you want to add all the changed files at once, use `git add .`.
Remember that the fullstop (dot) at the end of this command is important!
Next, commit changes using `git commit -m "description_of_changes"`.
4. Push changes to your repository on GitHub by typing: `git push origin master`.
5. Create a [*pull request*](https://help.github.com/articles/creating-a-pull-request) to the original repository when you have finished all the exercises.

## Guidelines for completing the tasks

These exercises are tested using **special automatic tests**. Therefore, make sure that:

* If an exercise requires that a specific text is entered / returned / displayed, it should be exactly that text.

* Function/component names must be the same as stated in the exercise.

* Complete the exercises in appropriate **js** files.

* Always check if your solution works. If it throws errors, it will not be evaluated - in such case, better comment the **sensitive** parts.


* **Remember to modify appropriately _webpack.config.js_ file when doing the exercises, so that you point to the currently used file in _entry_.**


---------------------------------------------------------------------

## Exercises

### Exercise 1
(2 pts)

Render the following elements in the ```App``` component:
- `h1` with the text: "Hello World",
- `span` with the text "Exam".

### Exercise 2
(3 pts)

Create a component named `Address`. Through props, it should take: `name`, `lastname`, `street`, `housenumber`, `postcode`, and `city`.

The component should render (example in HTML):
```HTML
<h1>{name} {last name}</h1>
<p>{street} {house number}</p>
<p>{postal code} {city}</p>
```

Name, last name, address, house number, and city should be **nonempty strings**. Postal code should contain **exactly 5 or 6 digits**. If any of the conditions are not met, block the component display.

Render this component with any data.

### Exercise 3
(3 pts)

Create a component named `Surprise`. It should render a `h1` element with the text: "Wait for it...". After 5 seconds, the text in `h1` should change to "Surprise!".

### Exercise 4
(5,5 pts)

Create a component named `PizzaToppings`. It should display two `ul` lists in a `div` element.
The first list contains by default: Tomato sauce, Pineapple, Corn, Tomato. The other one is empty.
Any element that is clicked should move from the first list to the other.

### Exercise 5
(6,5 pts)

Create a component named `ContactForm`. It should contain a form with the following (controlled) elements:
* `input` for a name,
* `select` with options: Customer Service, IT Department, Marketing,
* `input type=email` for email address,
* `textarea` for the message,
* `input type="submit"` button for submitting.

When the form is submitted, validate it:
* name must be a nonempty string - if the condition is not met, write the following information above the form: "The name field must be filled"
* e-mail must contain a "@"  - if the condition is not met, write the following information above the form: "The email field must be filled and must contain @"
* message must be a nonempty string - if the condition is not met, write the following information above the form: "The message field must be filled"

If all conditions are met, display "Thank you for your message. It was sent to: " and the department name.

**Good luck :)**
