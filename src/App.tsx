import { Fragment, type CSSProperties } from 'react';
import './App.css'


function formatName(firstName: string, lastName: string) {
 return `${firstName} ${lastName}`;
}


function App() {
 const title = 'React';
 const element = <h1>Hello {title}</h1>;

 const a = 5;
 const b = 10;
 
 const isLoggedIn = true;
 
 const username = ''
 
 const user = { firstName: 'James', lastName: 'Smith'}
 
 const fruits = ['Banana', 'Apple', 'Orange'];
 const numbers = [1, 2, 3]
 
 const ulStyles: CSSProperties = { textAlign: 'left', color: 'green' }

 const imgUrl = 'https://placehold.co/100'
 const imgAlt = 'Image placeholder'

 if (!isLoggedIn) {
   return null
 }

  return (
    <Fragment>
        {element}

        <span>Total: {a * b}</span>

        <p>{username || 'Guest'}</p>

        <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h2>
        {isLoggedIn && <h3>Hello, {formatName(user.firstName, user.lastName)}!</h3>}

        <h2>Hello, {null}</h2>
        <h2>Hello, {false}</h2>
        <h2>Hello, {undefined}</h2>

        <p>{fruits}</p>
        <p>{numbers}</p>
        <p>{user.firstName} {user.lastName}</p>

        <ul className={(fruits.length > 0 ? 'visible' : 'hidden')} style={ulStyles}>
          {fruits.map((item, index) =>
            <li key={index} style={{ color: item === 'Apple' ? 'green' : 'gray' }}>
              {item}
            </li>
          )}
        </ul>

        <img src={imgUrl} alt={imgAlt} />
    </Fragment>
  )
}

export default App
