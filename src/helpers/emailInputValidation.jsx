/**
 * This function is a helper to validation function for the email form
 * If Using modules pass the module class on the errorClass ex:. style.error
 * @param {Element} element HTML element (has to be an element because it'll check value and select the element to apply error class)
 * @param {string} errorClass error CSS class
 * @returns If validation pass Returns the Element.value.
 *
 * Else, Returns false
 *
 * This will later be used to apply an error class and tell user to fill the empty fields
 */

export const validateInput = (element, errorClass) => {
    if (element.value.trim() === '') {
        element.classList.add(errorClass);
        // TODO - change error log for a pop up alerting user of error
        console.error('PLEASE FILL ALL THE FIELDS');

        const timeOut = setTimeout(() => {
            element.classList.remove(errorClass);
            return clearTimeout(timeOut);
        }, 3000);

        return false;
    }

    return element.value;
};
