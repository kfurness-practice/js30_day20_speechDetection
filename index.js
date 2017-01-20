  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement('p');
  let span = document.createElement('span');
  let emoji = "🐈"

  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    // Not an array by default, so put it into an array to have more methods
    const transcript = Array.from(e.results)
      .map(c => c[0])
      .map(c => c.transcript)
      .join('')

      p.textContent = transcript;
        if(transcript.includes('the')) {
          span = document.createElement('span');
          span.innerHTML = emoji;
          words.appendChild(span);
        }
      if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }

  } );


  recognition.addEventListener('end', recognition.start )
  recognition.start();
