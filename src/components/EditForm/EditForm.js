import React, { useState } from 'react';

const initialFormValues = {
  card_front: '',
  card_back: '',
  active: false,
  public: false,
};

const EditForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  //TODO - Create changeHandlers for the Form Input fields below! (1/2 done!) (AE 6/13)
  //TODO - How do we want to manage this state? Should it stay in this form, or be lifted to App?

  // 🔫 change handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      // spread in existing values ?
      ...formValues,
      [name]: value,
    });
  };

  //TODO: (AE 6/13)
  // ✅ change handler
  // ? Why do check boxes need to be handled specially again? I need to refresh on this 🗞📰
  // For now they are just hardcoded to false
  // these checkboxes are both boolean values, so this handler need only set it to whatever it *wasn't* before

  /* ---------------------- 👇 This isn't working - why? 🤔 ---------------------- */
  // This is too much like the handler above it, and I think that's because I'm not understanding some fundamental thing about checkbox change events. Time to do some research! 🤓
  const onCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      // !value will set the value to whatever it isn't
      [name]: !value,
    });
  };

  console.log('form values', formValues);

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
          onChange={onChange}
        />
        <label htmlFor="card_back" className="card_back">
          Back of Card
        </label>
        <input
          type="text"
          name="card_back"
          value={formValues.card_back}
          onChange={onChange}
        />
        <label htmlFor="Active" className="active">
          Active:
        </label>
        <input
          type="checkbox"
          className="active"
          value="active"
          checked={formValues.active}
          onChange={onCheckboxChange}
        />
        <label htmlFor="Public" className="public">
          Public:
        </label>
        <input
          type="checkbox"
          className="active"
          value="active"
          checked={formValues.public}
          onChange={onCheckboxChange}
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
