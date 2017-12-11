import axios from 'axios';
//
export const login = (user) => (
  axios.post('http://192.168.3.43:3000/api/session', {user})
);

export const signup = (user) => (
  axios.post('http://192.168.3.43:3000/api/users', {user})
);


export const logout = () => (
  axios.delete('http://192.168.3.43:3000/api/session')
);



// export const signup = user => (
//   $.ajax({
//     url: '/api/users',
//     method: 'POST',
//     data: user
//   })
//
// )

// export const signup = user => (
//   fetch('http://localhost:3000/api/users', {
//     method: 'POST',
//     body: ({user})
//   }).catch(e => console.error("error",e))
//
// )



// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });
// export const login = user => (
//   $.ajax({
//     url: '/api/session',
//     method: 'POST',
//     data: user
//
//   })
// )
//
// export const logout = () => (
//   $.ajax({
//     url: '/api/session',
//     method: 'DELETE'
//   })
// )
