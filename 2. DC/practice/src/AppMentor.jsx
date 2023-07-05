import React, { useState } from "react";

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "Jake",
    title: "Developer",
    mentor: {
      name: "Nick",
      title: "Senior Developer",
    },
  });

  const [persons, setPersons] = useState({
    name: "Jake",
    title: "Developer",
    mentor: [
      {
        name: "Nick",
        title: "Senior Developer",
      },
      {
        name: "Nancy",
        title: "Senior Developer",
      },
    ],
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({ ...prev, mentor: { ...person.mentor, name } }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({ ...prev, mentor: { ...person.mentor, title } }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>

      <ul>
        {persons.mentor.map((element) => {
          return (
            <>
              <li>
                {element.name} ({element.title})
              </li>
            </>
          );
        })}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶으신가요?`);
          const current = prompt(`뭘로 바꾸고 싶으신가요?`);

          setPersons((person) => ({
            ...person,
            mentor: person.mentor.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
          console.log(person);
        }}
      >
        멘토 이름 바꾸기
      </button>

      <button
        onClick={() => {
          const inputName = prompt(`추가할 멘토의 이름을 입력해주세요`);
          const inputTitle = prompt(`추가할 멘토의 직함을 입력해주세요`);

          setPersons((person) => ({
            ...person,
            mentor: [...persons.mentor, { name: inputName, title: inputTitle }],
          }));
          console.log(persons);
        }}
      >
        멘토 추가
      </button>

      <button
        onClick={() => {
          const input = prompt(`삭제할 멘토의 이름을 입력해주세요.`);

          setPersons((person) => ({
            ...person,
            mentor: person.mentor.map((mentor, i) => {
              if (mentor.name === input) {
                return persons.mentor.splice(i, 1);
              }
              return mentor;
            }),
          }));
          console.log(person);
        }}
      >
        멘토 삭제
      </button>
    </div>
  );
}
