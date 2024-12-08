// your code herefunction updateURL() {
    // Get input values
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Base URL
    let url = 'https://localhost:8080/';

    // Create query string if inputs are provided
    const params = [];
    if (name) params.push(`name=${encodeURIComponent(name)}`);
    if (year) params.push(`year=${encodeURIComponent(year)}`);

    // Append query string to URL
    if (params.length > 0) {
        url += `?${params.join('&')}`;
    }

    // Update the h3 element with the new URL
    document.getElementById('url').textContent = url;
}

