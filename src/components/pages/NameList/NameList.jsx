import React, { useEffect, useState } from "react";

import NameListItem from "./NameListItem";

function NameList() {

  const [loadData, setLoadData] = useState(Math.random(99));

  const [nameList, setNameList] = useState([
    {
      id: Math.random(99),
      "name": {
      "title": "mr",
      "first": "Brad",
      "last": "Gibson"
     },
     "location": {
      "city": "kilcoole",
      },
      "email": "brad.gibson@example.com",
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "picture": {
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
  },
  {
      id:Math.random(99),
      "name": {
        "title": "mrs",
        "first": "Alexa",
        "last": "Day"
      },
      "location": {
        "city": "Belt Line Rd",
      },
      "email": "alexa.day@example.com",
      "dob": {
        "date": "2004-11-20T09:44:18.674Z",
        "age": 18
      },
      "picture": {"medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
      },
    }
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      setNameList((nameList) => [...nameList, responseData.results[0]])
    });
  }, [loadData]);

const nameListComponent =  () => {
  return (
    nameList.map(aName => {
      return(<NameListItem 
        key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={`${aName.dob.date} ${aName.dob.age}`}
          avatar={aName.picture.medium}
          />)
    })
  );
};
const addUserHandler = () => {
  setLoadData(Math.random(100));
}


    return (
     <React.Fragment>
       <div className="container mt-5">
         <button className="btn btn-primary mb-2 shadow-lg" onClick={addUserHandler}>Add Name</button>
      <ul className="list-group">
        {nameListComponent()}
      </ul>
      </div>
      </React.Fragment>
    );
}

export default NameList;