import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactMe from '../src/Pages/ContactMe';

describe('ContactMe', () => {
  test('renders ContactMe component without crashing', () => {
    render(<ContactMe />);
  });

  test('renders input fields for name, email, subject, and message', () => {
    render(<ContactMe />);
    expect(screen.getByLabelText('NAME:')).toBeInTheDocument();
    expect(screen.getByLabelText('EMAIL:')).toBeInTheDocument();
    expect(screen.getByLabelText('SUBJECT:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ENTER YOUR MESSAGE RIGHT HERE! RIGHT NOW!')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<ContactMe />);
    const submitButton = screen.getByRole('button', {
      name: 'SEND YOUR MESSAGE TO THE DEEPEST CORNER OF THE VOID BECAUSE THIS BUTTON IS NOT WORKING YET (OR IS IT? CHECK THE CONSOLE)',
    });
    expect(submitButton).toBeInTheDocument();
  });

  test('form throw no errors with valid inputs', async () => {
    render(<ContactMe />);
    const nameInput = screen.getByPlaceholderText('NAME');
    const emailInput = screen.getByPlaceholderText('EMAIL');
    const subjectInput = screen.getByPlaceholderText('SUBJECT');
    const messageInput = screen.getByPlaceholderText('ENTER YOUR MESSAGE RIGHT HERE! RIGHT NOW!');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });

    fireEvent.submit(
      screen.getByRole('button', {
        name: 'SEND YOUR MESSAGE TO THE DEEPEST CORNER OF THE VOID BECAUSE THIS BUTTON IS NOT WORKING YET (OR IS IT? CHECK THE CONSOLE)',
      }),
    );

    await waitFor(() => {
      // Assert that error messages are displayed for required fields
      expect(screen.queryByText('Name field is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Email field is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Subject field is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Message field is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Name field should be at least 4 characters.')).not.toBeInTheDocument();
      expect(screen.queryByText('Email field should be a valid email.')).not.toBeInTheDocument();
      expect(screen.queryByText('Subject field should be at least 5 characters.')).not.toBeInTheDocument();
      expect(screen.queryByText('Message field should be at least 10 characters.')).not.toBeInTheDocument();
    });
  });

  test('form throw errors with invalid inputs', async () => {
    render(<ContactMe />);
    const nameInput = screen.getByPlaceholderText('NAME');
    const emailInput = screen.getByPlaceholderText('EMAIL');
    const subjectInput = screen.getByPlaceholderText('SUBJECT');
    const messageInput = screen.getByPlaceholderText('ENTER YOUR MESSAGE RIGHT HERE! RIGHT NOW!');

    // Simulate form submission with invalid inputs
    fireEvent.submit(
      screen.getByRole('button', {
        name: 'SEND YOUR MESSAGE TO THE DEEPEST CORNER OF THE VOID BECAUSE THIS BUTTON IS NOT WORKING YET (OR IS IT? CHECK THE CONSOLE)',
      }),
    );

    await waitFor(() => {
      // Assert that error messages are displayed for required fields
      expect(screen.getByText('Name field is required.')).toBeInTheDocument();
      expect(screen.getByText('Email field is required.')).toBeInTheDocument();
      expect(screen.getByText('Subject field is required.')).toBeInTheDocument();
      expect(screen.getByText('Message field is required.')).toBeInTheDocument();
    });

    // Simulate user input with invalid values
    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(subjectInput, { target: { value: 'sub' } });
    fireEvent.change(messageInput, { target: { value: 'msg' } });

    // Simulate form submission with invalid inputs
    fireEvent.submit(screen.getByRole('button', { name: /send your message/i }));

    await waitFor(() => {
      // Assert that error messages are displayed for invalid inputs
      expect(screen.getByText('Name field should be at least 4 characters.')).toBeInTheDocument();
      expect(screen.getByText('Email field should be a valid email.')).toBeInTheDocument();
      expect(screen.getByText('Subject field should be at least 5 characters.')).toBeInTheDocument();
      expect(screen.getByText('Message field should be at least 10 characters.')).toBeInTheDocument();
    });
  });
});
