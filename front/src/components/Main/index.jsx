import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import StyledMain from './style';

function Main() {
  const [characters, setCharacter] = useState([]);
  const [userFirstname, setUserFirstname] = useState([]);

  const submitUser = () => {
    Axios.post('http://localhost:5050/api/insert', {
      userFirstname: userFirstname,
    }).then(() => {
      alert('Succesfull new Soldier !');
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:5050/api').then(({ data }) => {
      setCharacter(data);
    });
  }, []);

  return (
    <StyledMain>
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form class='new-member-form'>
          <label for='name'>Nom de l&apos;Argonaute</label>
          <input
            id='name'
            name='userFirstname'
            type='text'
            placeholder='Insert your Soldier'
            onChange={(e) => {
              setUserFirstname(e.target.value);
            }}
          />
          <button type='submit' onClick={submitUser}>
            Envoyer
          </button>
        </form>

        <h2>Membres De l'équipage</h2>
        <section class='member-list'>
          <div class='member-item'>
            <ul>
              {characters.map((character) => {
                return (
                  <>
                    <li>{character.firstname}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </StyledMain>
  );
}

export default Main;
