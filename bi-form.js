const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);

const queryTypeIndex = searchParams.get('queryType');
const taxId = searchParams.get('taxId');
const bic = searchParams.get('bic');

const queryTypeRadio = document.querySelector(`#unirad_${queryTypeIndex}`);
const taxIdInput = document.querySelector('input[name=innPRS]');
const bicInput = document.querySelector('input[name=bikPRS]');
const submitButton = document.querySelector('#btnSearch');

queryTypeRadio.click();
taxIdInput.value = taxId;
bicInput.value = bic;

setTimeout(
    () => {
        submitButton.click();
    },
    3500
);
