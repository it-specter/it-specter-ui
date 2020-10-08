import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Grid } from 'ITSpecterUI';
import { Card } from 'ITSpecterUI';

const Spinner = ({ loading }) => {
  return loading ? <img src="https://i.imgur.com/01yMDgZ.gif" /> : null;
};

const Message = ({ status, text }) => {
  return status && status !== 'loading' ? (
    <div className={`message ${status}`}>{text}</div>
  ) : null;
};

const Field = ({ field, onChange }) => {
  const { label, ...attributes } = field;

  return (
    <React.Fragment>
      <label>{label}</label>
      {(() => {
        switch (attributes.type) {
          case 'textarea':
            return <textarea onChange={onChange} {...attributes} />;
          default:
            return <input onChange={onChange} {...attributes} />;
        }
      })()}
    </React.Fragment>
  );
};

const MemoField = memo(Field);

const AutoForm = ({ form, onSubmit, status }) => {
  const fieldsRef = useRef();

  const [fields, setFields] = useState(
    form.fields.map((field) => ({
      ...field,
      name: field.name || field.label,
      value: '',
    }))
  );

  const updateFields = (name, value) => {
    const newFields = fields.map((field) => {
      return field.name === name ? { ...field, value } : field;
    });
    setFields(newFields);
  };

  useEffect(() => {
    fieldsRef.current = updateFields;
  });

  useEffect(() => {
    if (status === 'success') {
      setFields(fields.map((field) => ({ ...field, value: '' })));
    }
  }, [status, fields]);

  const handleChange = useCallback((e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.value;

    const update = () => {
      fieldsRef.current(name, value);
    };

    update();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value };
    }, {});

    onSubmit(formData);
    console.log(formData)
  };

  const { messages, spinner } = form.config;

  return (
    <Grid variant="FlexContainer" justify="center">
      <Grid variant="FlexItems" xs="10" sm="10" md="4" lg="4">
        <Card height="300">
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <MemoField key={field.name} field={field} onChange={handleChange} />
            ))}
            <div className="form-bottom">
              <button disabled={status === 'success'} type="submit">
                {form.config.buttonText || 'Submit'}
              </button>
              <Spinner loading={status === 'loading' && spinner} />
            </div>
            <Message status={status} text={messages[status]} />
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AutoForm;
