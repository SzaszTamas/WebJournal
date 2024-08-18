document.getElementById('saveButton').addEventListener('click', async () => {
    const content = document.getElementById('journalContent').innerText;
  
    try {
      const response = await fetch('/api/save-journal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
  
      const result = await response.json();
      console.log(result.message);
    } catch (err) {
      console.error('Error:', err);
    }
  });
  