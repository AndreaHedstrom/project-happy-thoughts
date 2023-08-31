import React from 'react';

export const NewThought = ({ newThought, handleNewThoughtChange, onFormSubmit }) => {
  const handleInputChange = (event) => {
    handleNewThoughtChange(event);
  };

  return (
    <form className="message-input" onSubmit={onFormSubmit}>
      <p className="input-header">What&apos;s making you happy right now?</p>
      <textarea
        placeholder="What's on your mind?"
        value={NewThought}
        onChange={handleInputChange} />
      <div className="main">
        <button className="submit-button" type="submit" onClick={() => newThought()}>❤️Send your Happy Thought❤️
        </button>
      </div>
    </form>
  )
}