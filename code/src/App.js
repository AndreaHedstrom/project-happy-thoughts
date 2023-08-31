/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { AllThoughts } from 'components/AllThoughts';
import { NewThought } from 'components/NewThought';

export const App = () => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: NewThought
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  };

  const onLikesIncrease = (LikeID) => {
    const options = { method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${LikeID}/like`, options)
      .then((res) => res.json())
      .then(console.log('xxx'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div className="main">
      <div className="new-message">
        <NewThought
          newThought={newThought}
          handleNewThoughtChange={onNewThoughtChange}
          onFormSubmit={onFormSubmit} />
      </div>
      <div className="all-messages">
        <AllThoughts
          loading={loading}
          thoughts={thoughts}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>
  )
}
