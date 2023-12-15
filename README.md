# Air Fryer World

I have the pleasure to introduce you my first React project "Air Fryer World" which is also the final exam for my ReactJS course in SoftUni.

The project is deployed at vercel on the following link: https://air-fryer-world.vercel.app/

## Description:

Air Fryer World is e-commerce site for Air fryers, information about them, best devices and recipes.

- The website is built using ReactJS, Bootstrap and html-css template. 
- The website uses SoftUni Practice server for the database, storage and authentication and it's only for educational purposes.
| [Read the detailed documentation for this service](./https://github.com/softuni-practice-server/softuni-practice-server)

## Features:
### For guest users:
**1. Landing home page**

Brief information, image and Read more button.

**2. About Air Fryers page**

Static page with information

**3. Devices**

Most popular Air fryers, each holding a link to the offical web site of the manufacturer.

**4. All Recipes**

Catalog including four hard coded recipes and displays every added recipe featuring onclick "Details" feature.
- Details displays the title, an image, time to cook, ingredients, description and Comments section. Logged-in users can add comments.

**5. Register**

Allows users to register with their email and prefered password.

**6. Login**

The website allows registered users to log in and add or manage their recipes.

### For logged-in users:
**Everything mentioned above plus:**

**My Recipes**

Displays only user's recipes.

**Add Recipes**

Add Recipes feature with recipe name, photo, time to cook, ingredients and description.

**Add comment**

Logged in users can add comments to recipes.

## Technical Details:
#### React is used to build the website creating reusable components and provides a rich set of tools and built-in features:
**useState**: The useState hook is used to manage the state of the functional components.

**useEffect**: The useEffect hook is used to handle side effects in the functional components.

**useContext**: React Hook that lets you read and subscribe to context from your component.

**useParams**: The hook that lets you read a route's dynamic params filled in by the current URL.

**useNavigate**: The useNavigate hook returns a function that lets you navigate programmatically.

**React router**: React router allows applications that have many pages or components have many pages but the page is never refreshed instead the content is dynamically fetched based on the URL.


