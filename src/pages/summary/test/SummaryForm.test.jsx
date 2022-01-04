import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe('SummaryForm tests', () => {

    test('Checkbox should be unchecked by default', () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' })
        const button = screen.getByRole('button', { name: 'Confirm order' })
        expect(checkbox).not.toBeChecked();
        expect(button).toBeDisabled();

    });

    test('Checking checkbox enables button', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' })
        const button = screen.getByRole('button', { name: 'Confirm order' })
        fireEvent.click(checkbox)
        expect(button).toBeEnabled();
    })

    test('Unchecking the checkbox disables the button', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' })
        const button = screen.getByRole('button', { name: 'Confirm order' })
        fireEvent.click(checkbox)
        fireEvent.click(checkbox)
        expect(button).toBeDisabled();
    })
})