import { render, screen } from "@testing-library/react"
import Options from "../Options"

describe('Topping Tests', () => {
    test('displays images for each scoop option from server', async () => {
        render(<Options optionType="scoops" />);

        //find images
        const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
        expect(scoopImages).toHaveLength(2);

        //confirm alt test of images
        const altText = scoopImages.map(element => element.alt);
        expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
    });

    test('displays images for each topping option from server', async () => {
        render(<Options optionType="toppings" />);

        const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
        expect(toppingImages).toHaveLength(2);

        const altText = toppingImages.map(element => element.alt);
        expect(altText).toEqual(["sprinkle topping", "cones topping"]);
    })

})