const contact = {
  title: 'Contact Me',
  subtitle: 'Feel free to message me',
  form: [
    {
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter Email',
      mainWrapper: 'col-lg-6 mb-4',
      wrapperClass: 'form-group',
      className: 'form-control',
    },
    {
      label: 'Full Name',
      type: 'text',
      placeholder: 'Full Name',
      mainWrapper: 'col-lg-6 mb-4',
      wrapperClass: 'form-group',
      className: 'form-control',
    },
    {
      label: 'Phone Number',
      type: 'text',
      mainWrapper: 'col-lg-6 mb-4',
      placeholder: 'Phone Number',
      wrapperClass: 'form-group',
      className: 'form-control',
    },
    {
      label: 'Location',
      type: 'text',
      mainWrapper: 'col-lg-6 mb-4',
      placeholder: 'Your address',
      wrapperClass: 'form-group',
      className: 'form-control',
    },
    {
      label: 'Message',
      type: 'text',
      mainWrapper: 'col-lg-12 mb-4',
      placeholder: 'Message',
      wrapperClass: 'form-group',
      className: 'form-control',
    },
    // {
    //   label: 'Submit',
    //   type: 'submit',
    //   mainWrapper: 'col-lg-12',
    //   wrapperClass:
    //     'btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3',
    //   //   className: 'btn btn-primary',
    // },
  ],
  social: [
    {
      element: 'FaFacebookF',
      className: 'contactIcon',
    },
    {
      element: 'FaTwitter',
      className: 'contactIcon',
    },
    {
      element: 'FaPinterest',
      className: 'contactIcon',
    },
    {
      element: 'FaInstagram',
      className: 'contactIcon',
    },
  ],
}

export { contact }
