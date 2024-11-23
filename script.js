function generateLink() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const text3 = document.getElementById('text3').value;
    const text4 = document.getElementById('text4').value;
    const text5 = document.getElementById('text5').value;

    const checkbox1 = document.getElementById('checkbox1').checked;
    const checkbox2 = document.getElementById('checkbox2').checked;
    const checkbox3 = document.getElementById('checkbox3').checked;
    const checkbox4 = document.getElementById('checkbox4').checked;
    const checkbox5 = document.getElementById('checkbox5').checked;

    // Encode values as query parameters
    const params = new URLSearchParams({
        text1: text1,
        text2: text2,
        text3: text3,
        text4: text4,
        text5: text5,
        checkbox1: checkbox1,
        checkbox2: checkbox2,
        checkbox3: checkbox3,
        checkbox4: checkbox4,
        checkbox5: checkbox5,
    });

    // Generate the link with parameters
    const link = `${window.location.href.split('?')[0]}?${params.toString()}`;
    document.getElementById('generated-link').innerHTML = `Generated Link: <a href="${link}" target="_blank">${link}</a>`;

    // Optionally copy to clipboard
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
}

// Load the data from URL parameters (if any)
function loadFromURLParams() {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById('text1').value = urlParams.get('text1') || '';
    document.getElementById('text2').value = urlParams.get('text2') || '';
    document.getElementById('text3').value = urlParams.get('text3') || '';
    document.getElementById('text4').value = urlParams.get('text4') || '';
    document.getElementById('text5').value = urlParams.get('text5') || '';

    document.getElementBy
