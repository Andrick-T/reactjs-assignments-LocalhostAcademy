// Tchoukeu Andrick
import React, { useState } from "react";

function App() {
  const [heartRate, setHeartRate] = useState(70);
  const [isCritical, setIsCritical] = useState(false);

  // Logic to update the critical state based on heart rate
  const checkStatus = () => {
    setIsCritical(heartRate > 100 || heartRate < 60);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Heart Rate Monitor</h1>
      
      {/* Display of heart rate */}
      <p>Current Heart Rate: <strong>{heartRate} bpm</strong></p>

      {/* Buttons to increase/decrease heart rate */}
      <button onClick={() => setHeartRate(heartRate + 10)}>Increase Heart Rate</button>
      <button onClick={() => setHeartRate(heartRate > 0 ? heartRate - 10 : 0)}>Decrease Heart Rate</button>
      
      {/* Button to check state */}
      <button onClick={checkStatus} style={{ marginLeft: "10px" }}>
        Check Critical Status
      </button>

      {/* Conditional rendering of message */}
      <p style={{ color: isCritical ? "red" : "green", fontWeight: "bold", marginTop: "20px" }}>
        {isCritical 
          ? "High heart rate. Emergency Mode Activated" 
          : "Status: Stable"}
      </p>
    </div>
  );
}

export default App;

//We do not directly mutate the state variable in react because it can lead to unpredictable behavior and bugs. React relies on the immutability of state to efficiently determine when to re-render components. When we use the state setter function (like setHeartRate), React knows that the state has changed and can trigger a re-render of the component to reflect the new state. If we were to directly mutate the state variable (e.g., heartRate = heartRate + 10), React would not be aware of the change, and the component would not update as expected, leading to inconsistencies in the UI.

// setState causes a re-render of the component because it updates the state and tells React that the component's data has changed. When you call a state setter function (like setHeartRate), React schedules a re-render of the component to reflect the new state. During this re-render, React will compare the new state with the previous state and update the DOM accordingly to ensure that the UI stays in sync with the current state of the component. This is a fundamental part of how React manages state and updates the user interface efficiently.

// The difference between state and variables in React is that state is a special type of variable that is managed by React and can trigger re-renders when it changes, while regular variables do not have this capability. State is used to store data that can change over time and affect the rendering of the component, whereas regular variables are just temporary storage that does not persist across renders. When you update state using a setter function, React knows to re-render the component to reflect the new state, but if you update a regular variable, React will not be aware of the change and will not re-render the component.











//==================================================================================================================
// import React, { useState } from "react";
// import ReactionSystem from "./components/ReactionSystem";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Counter App</h1>
//       <p>Current count: {count}</p>
//       <button onClick={handleIncrement} style={{ padding: "10px", fontSize: "10px" }}>
//         Increment
//       </button>
//     </div>
//   );
// }

// function ThemeApp() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   const themeStyles = {
//     backgroundColor: isDarkMode ? "#333" : "#fff",
//     color: isDarkMode ? "#fff" : "#000",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   };

//   return (
//     <div style={themeStyles}>
//       <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
//       <button onClick={toggleTheme} style={{ padding: "10px", fontSize: "10px" }}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// function App() {
//   // 1. Déclarer le state à l'intérieur du composant
//   const [user, setUser] = useState({ name: "John Doe", age: 20 });

//   // 2. Déclarer la fonction de mise à jour à l'intérieur également
//   const updateAge = () => {
//     setUser({ ...user, age: user.age + 1 });
//   };

//   return (
//     <div>
//       {/*<Counter />
//       <p>User: {user.name}, Age: {user.age}</p>
//       <button onClick={updateAge}>Update Age</button>
//       <ThemeApp />*/}
//       <ReactionSystem />
//     </div>
//   );
// }

// export default App;

//  import UserCard from "./components/UserCard";

//  function App() {

//    return (
//      <>
//        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//          <h1>Localhost Academy JS Course</h1>
//          <UserCard
//            name="Fomubad Borista"
//            email="borista.fondi@example.com"
//            role="Teacher"
//            status="Active"
//            avatar="https://randomuser.me/api/portraits/men/75.jpg"
//          />

//          <UserCard
//            name="Tsafack Stela"
//            email="tsafack.stela@example.com"
//            role="Student"
//            status="Active"
//            avatar="https://randomuser.me/api/portraits/women/44.jpg"
//          />

//          <UserCard
//            name="Ebouele Benjamin"
//            email="ebouele.benjamin@example.com"
//            role="Student"
//            status="Active"
//            avatar="https://randomuser.me/api/portraits/men/45.jpg"
//          />

//          <UserCard
//            name="Nama Nkoa Guershom"
//            email="nama.nkoa.guershom@example.com"
//            role="Student"
//            status="not-Active"
//            avatar="https://randomuser.me/api/portraits/men/47.jpg"
//          />

//          <UserCard
//            name="Tsamo Rooswell"
//            email="tsamo.rooswell@example.com"
//            role="Student"
//            status="Active"
//            avatar="https://randomuser.me/api/portraits/men/44.jpg"
//          />
//        </div>
//        {/*<header>
//          <h1>Welcome to {academyName}</h1>
//          <p>This is a simple {sessionType} application.</p>
//        </header>

//        <main>
//          <h2>Session Details</h2>
//          <p>
//            In this session, we will cover the basics of React, including
//            components, JSX, and state management.
//          </p>
//          <h1>Let's Test something</h1>
//          <p>Logic Test: 2+2 is equal to {2 + 2}</p>
//        </main>*/}
//      </>
//    );
//  };

// export default App;
 
// import UsersList from "./components/UsersList";

// const allEmployees = [
//   {
//     id: 101,
//     name: "Fomubad Borista",
//     email: "borista.fondi@example.com",
//     role: "Admin",
//     active: true,
//     dept: "Engineering",
//     salary: 75000,
//   },
//   {
//     id: 102,
//     name: "Tsafack Stela",
//     email: "tsafack.stela@example.com",
//     role: "user",
//     active: false,
//     dept: "Marketing",
//     salary: 55000,
//   },
//   {
//     id: 103,
//     name: "Ebouele Benjamin",
//     email: "ebouele.benjamin@example.com",
//     role: "user",
//     active: true,
//     dept: "Sales",
//     salary: 60000,
//   },
//   {
//     id: 104,
//     name: "Nama Nkoa Guershom",
//     email: "nama.nkoa.guershom@example.com",
//     role: "user",
//     active: false,
//     dept: "Engineering",
//     salary: 50000,
//   },
//   {
//     id: 105,
//     name: "Tsamo Rooswell",
//     email: "tsamo.rooswell@example.com",
//     role: "user",
//     active: true,
//     dept: "Engineering",
//     salary: 70000,
//   },
// ];

// function EmployeeDashboard() {
//   const topEmployees = allEmployees.filter(
//     (emp) => emp.dept === "Engineering" && emp.salary > 60000,
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Top Engineering Employees</h1>
//       {topEmployees.length > 0 ? (
//         <ul>
//           {topEmployees.map((emp) => (
//             <li key={emp.id} style={{ marginBottom: "10px" }}>
//               <strong>{emp.name}</strong> - {emp.email} - ${emp.salary}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No top engineering employees found.</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>User Dashboard</h1>

//       <UsersList />
//       <EmployeeDashboard />
//     </div>
//   );
// }

// export default App;

