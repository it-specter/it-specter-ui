import React, { useState } from 'react';

/** @function Spinner */
const Spinner = ({ loading = true }) => {
  return loading ? (
    <img
      src="https://i.imgur.com/01yMDgZ.gif"
    />
  ) : null
}

/** @function Message */
const Message = ({ status = 'success', text }) => {
  return status && status !== 'loading' ? (
    <div className={`message ${status}`}>{text}</div>
  ) : null
}

/**
 * @function Field
 */
const Field = ({ field, onChange }) => {
    const { label, ...attributes } = field
  
    return (
      <React.Fragment>
        <label>{label}</label>
        {(() => {
          switch (attributes.type) {
            case 'textarea':
              return <textarea onChange={onChange} {...attributes} />
            default:
              return <input onChange={onChange} {...attributes} />
          }
        })()}
      </React.Fragment>
    )
  }

const AutoForm = ({ form }) => {
    const [fields, setFields] = useState(
        form.fields.map(field => ({
          ...field,
          name: field.name || field.label,
          value: ''
        }))
      )
      console.log(fields)
  return (
    <form>
      {fields.map(field => (
        <Field field={field} />
      ))}
      <div className="form-bottom">
        <button type="submit">
          {form.config.buttonText || 'Submit'}
        </button>
        {/* <Spinner loading={status === 'loading' && spinner} /> */}
      </div>

      {/* <Message status={status} text={messages[status]} /> */}
    </form>
  );
};

export default AutoForm;
