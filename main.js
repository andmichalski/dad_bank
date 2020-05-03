let nextMonth = (data, inerest_rate) => {
	return data + ((inerest_rate/100)*data);
};
window.onload = () => {
	const bodyText = `
	<h1>Konto Jasia</h1>

	Masz na koncie <b>${data.sum} zł</b></br></br>

	Twoje oprocentowanie miesięczne to <b>${data.inerest_rate} %</b></br></br>

	Na początku następnego miesiąca będziesz miał <b>${nextMonth(data.sum, data.inerest_rate)} zł</b></br></br>
	`;

document.body.innerHTML = bodyText;
}

