export default {
  config: {
    messages: {
      success: 'We received your message! Thanks for inquiring.',
      error:
        'An error occurred during submittal. Please contact us at support@xyz.com',
    },
    buttonText: 'Send',
    spinner: true,
  },
  fields: [
    {
      label: 'Name',
      placeholder: 'Marco',
      required: true,
    },
    {
      label: 'Essen',
      placeholder: 'Hello',
      required: true,
    },
    {
      label: 'Location',
      placeholder: 'New York, NY',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'xyz@gmail.com',
      required: true,
    },
    {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message...',
      required: true,
    },
  ],
};
