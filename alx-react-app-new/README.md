Building up from the prev project named alx-react-app.Go ahead and duplicate the previous directory with your react app and name it alx-react-app-new

Objective: Enhance the existing React components (UserProfile, Header, MainContent, and Footer) with inline CSS styling.

Instructions:

Style the Header Component:

Open the Header.jsx file.
Add inline CSS to the <header> tag to change the background color, text color, and text alignment. For example:
 <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
   <h1>My Favorite Cities</h1>
 </header>
Style the UserProfile Component:

Open the UserProfile.jsx file.
Apply inline styling to enhance the appearance of the user’s name, age, and bio. Consider changing font sizes, colors, and margins.
Example:
 <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>
Style the MainContent and Footer Components:

Apply similar inline styling to MainContent.jsx and Footer.jsx. Experiment with different CSS properties to make these components visually appealing.
Run the Application:

Start your application to see the styled components.
Ensure that the inline styling is correctly applied and the components are visually enhanced.