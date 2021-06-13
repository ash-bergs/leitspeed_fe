import React, { useState } from 'react';

const initialFormValues = {
  card_front: '',
  card_back: '',
  active: false,
  public: false,
};

const EditForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  //TODO - Create changeHandlers for the Form Input fields below!
  //TODO - How do we want to manage this state? Should it stay in this form, or be lifted to App?

  return (
    <React.Fragment>
      <form>
        <label htmlFor="card_front" className="card_front">
          Front of Card
        </label>
        <input
          type="text"
          name="card_front"
          value={formValues.card_front}
          onChange={
            {
              /* NEEDS TO BE CREATED */
            }
          }
        />
        <label htmlFor="card_back" className="card_back">
          Back of Card
        </label>
        <input
          type="text"
          name="card_back"
          value={formValues.card_back}
          onChange={
            {
              /* NEEDS TO BE CREATED */
            }
          }
        />
        <label htmlFor="Active" className="active">
          Active:
        </label>
        <input
          type="checkbox"
          className="active"
          value="active"
          checked={formValues.active}
        />
        <label htmlFor="Public" className="public">
          Public:
        </label>
        <input
          type="checkbox"
          className="active"
          value="active"
          checked={formValues.public}
        />
      </form>
    </React.Fragment>
  );
};

export default EditForm;

/* -------------------------------------------------------------------------- */
/*                               About this Form                              */
/*
    * This form will be used to Add or Edit a card

    Card instance looks like:

    {
        user_id: 1, //! This will be attached... on the params? I need to review this, but for now we're not handling login
        deck_id: 1, //? Include on the form? Maybe a drop down? 
        card_front: 'What does enumerate do?', //* text included on the form
        card_back:
          ' Enumerate adds a counter to an iterable, and returns it in the form of an enumerate object. The object can be used directly in for loops, or converted into a list of tuples (using the list() method).',
        card_notes: ['Python method', 'Programming'], //* text included on the form 
        active: true, //* checkbox on the form
        public: true, //* checkbox on the form 
    }
*/
/* -------------------------------------------------------------------------- */
