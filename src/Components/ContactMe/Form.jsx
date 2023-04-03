/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import CardTwo from './ContactFormCard';

const Style = styled.div`
  max-width: 700px;
`;

const Button = styled.button`
  font-weight: 700;
  color: black;

  background-color: rgb(8, 217, 214);
  border: 5px;
  border-style: solid;
  border-bottom-color: rgb(8, 217, 214);
  border-right-color: rgb(8, 217, 214);
  border-radius: 0;

  :hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
    color: black;
  }

  input,
  textarea {
    color: rgb(8, 217, 214);
    font-weight: 500;
    background-color: rgb(10, 10, 10);

    text-transform: uppercase;
    box-sizing: border-box;
    resize: none;

    border: 4px solid black;
    border-radius: 0;

    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    transition: 0.2s;

    :focus {
      color: rgb(8, 217, 214);
      background-color: black;
        : 4px solid black;
      border-bottom: 4px solid rgb(8, 217, 214);
      outline: none;
    }
  }
`;

const Error = styled.ul`
  color: red;
  margin-top: 0.5rem;

  padding-left: 2rem;

  li {
    font-size: 1rem !important;
    line-height: 1rem;
    text-transform: uppercase;
    margin: 0.5rem;
  }
`;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Style>
      <CardTwo>
        <form className="pt-5 pb-5 px-4" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="nameControl">
            <div className="col-12 col-md-3 col-sm-12">
              <p>NAME:</p>
            </div>
            <div className="col-12 col-md-9 col-sm-12">
              <input
                type="text"
                className="mb-2"
                placeholder="NAME"
                id="nameControl"
                {...register('name', { required: true, minLength: 4 })}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </div>
          </Label>
          <Label htmlFor="emailControl">
            <div className="col-12 col-md-3 col-sm-12">
              <p>EMAIL:</p>
            </div>
            <div className="col-12 col-md-9 col-sm-12">
              <input
                type="text"
                className="mb-2"
                placeholder="EMAIL"
                {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
            </div>
          </Label>
          <Label htmlFor="subjectControl">
            <div className="col-12 col-md-3 col-sm-12">
              <p>SUBJECT:</p>
            </div>
            <div className="col-12 col-md-9 col-sm-12">
              <input
                type="text"
                className="mb-2"
                placeholder="SUBJECT"
                {...register('subject', { required: true, minLength: 5 })}
                aria-invalid={errors.subject ? 'true' : 'false'}
              />
            </div>
          </Label>
          <Label htmlFor="messageControl">
            <textarea
              type="text"
              className="mt-1 mt-3"
              rows={5}
              placeholder="ENTER YOUR MESSAGE RIGHT HERE! RIGHT NOW!"
              {...register('message', { required: true, minLength: 10 })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
          </Label>
          <div className="row justify-content-end mt-3">
            <div className="col-auto">
              <Button className="btn btn-secondary" type="submit">
                SEND YOUR MESSAGE TO THE DEEPEST CORNER OF THE VOID BECAUSE THIS BUTTON IS NOT WORKING YET (OR CHECK THE
                CONSOLE)
              </Button>
            </div>
          </div>
          {(errors.name || errors.email || errors.subject || errors.message) && (
            <Error className="alert alert-danger mt-3 rounded-0 mt-4">
              {errors.name?.type === 'required' && <li>Name field is required.</li>}
              {errors.name?.type === 'minLength' && <li>Name field must be longer than 4 characters.</li>}
              {errors.email?.type === 'required' && <li>Email field is required.</li>}
              {errors.email?.type === 'pattern' && <li>Email is invalid.</li>}
              {errors.subject?.type === 'required' && <li>Subject field is required</li>}
              {errors.subject?.type === 'minLength' && <li>Subject field must be longer than 5 characters.</li>}
              {errors.message?.type === 'required' && <li>Message field is required</li>}
              {errors.message?.type === 'minLength' && <li>Message field must be longer than 10 characters.</li>}
            </Error>
          )}
        </form>
      </CardTwo>
    </Style>
  );
}

export default Form;
