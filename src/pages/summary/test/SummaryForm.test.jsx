import { render, screen, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event';

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
        userEvent.click(checkbox)
        userEvent.click(checkbox)
        expect(button).toBeDisabled();
    })

    test('popover responds to hover', async () => {
        render(<SummaryForm />);
        //popover starts out hidden
        const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
        expect(nullPopover).not.toBeInTheDocument();

        //popover appears upon mouseover of checkbox label
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(termsAndConditions);

        const popover = screen.getByText(/no ice cream will actually be delivered/i);
        expect(popover).toBeInTheDocument();

        //popover disappears when we mouse out
        userEvent.unhover(termsAndConditions);
        await waitForElementToBeRemoved(() =>
            screen.queryByText(/no ice cream will actually be delivered/i)
        );
    })
})