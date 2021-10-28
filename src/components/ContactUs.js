import React, { useRef } from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactUs.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Message Sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  const onSubmit = async (data) => {
    const { name, email, phone, company, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Phone: ', phone);
    console.log('Company: ', company);
    console.log('Message: ', message);

    try {
      const templateParams = {
        name,
        email,
        phone,
        company,
        message
      };
      await emailjs.send(
        'service_i4wcqjd',
        'template_he39fvm',
        templateParams,
        'user_TKVQ6NzTXIinbCMl840r7',
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="contact" className='ContactForm contact-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm ContactForm-blue-background'>
                <div><span className="ContactForm-blue-text">Write us</span><span className="ContactForm-black-text"> a message</span>
                </div>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        message: 'Please enter your name',
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                      <input
                        type='phone'
                        name='phone'
                        {...register('phone', {
                          required: { value: true, message: 'Please enter your phone number' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Phone Number'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='company'
                        {...register('company', {
                          required: { value: true, message: 'Please enter your company' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Company Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn btn btn-primary contact-btn' type='submit'>
                  Send Now
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm