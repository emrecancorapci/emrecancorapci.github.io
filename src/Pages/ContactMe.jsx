/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.div`
  background: rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.3) 75%,
    rgba(255, 255, 255, 0.5) 100%
  );
  max-width: 600px;
`;

const Button = styled.button`
  font-weight: 700;
  background-color: rgb(8, 217, 214);
  border: 0;
`;

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1 className="h09 text-white">CONTACT ME</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <Form className="col rounded-4 p-4 pb-3 mt-3 mx-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameControl">
              <p className="form-label text-white">Name</p>
              <input
                className="form-control mb-2"
                placeholder="Name"
                id="nameControl"
                {...register('name', { required: true, minLength: 4 })}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </label>
            <input
              className="form-control mb-2"
              placeholder="E-mail"
              {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            <input
              className="form-control mb-2"
              placeholder="Subject"
              {...register('subject', { required: true, minLength: 5 })}
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Please enter your message here..."
              {...register('message', { required: true, minLength: 10 })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            <div className="row justify-content-end">
              <div className="col-auto">
                <Button className="btn btn-secondary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </form>
          {(errors.name || errors.email || errors.subject || errors.message) && (
            <div className="alert alert-danger mt-3">
              {errors.name?.type === 'required' && <p>Name field is required.</p>}
              {errors.name?.type === 'minLength' && <p>Name field must be longer than 4 characters.</p>}
              {errors.email?.type === 'required' && <p>Email field is required.</p>}
              {errors.email?.type === 'pattern' && <p>Email is invalid.</p>}
              {errors.subject?.type === 'required' && <p>Subject field is required</p>}
              {errors.subject?.type === 'minLength' && <p>Subject field must be longer than 5 characters.</p>}
              {errors.message?.type === 'required' && <p>Message field is required</p>}
              {errors.message?.type === 'minLength' && <p>Message field must be longer than 10 characters.</p>}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;
