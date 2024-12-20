let input = '';

// Listen for data events on stdin
process.stdin.on('data', (chunk) => {
  input += chunk;
});

// Listen for the end of the input stream
process.stdin.on('end', () => {
  const lines = input.split('\n');
  lines.splice(lines.length - 4, 0, '<script>window.addEventListener(\'message\', (event) => { if (!!window.parent) { window.parent.postMessage(event.data, \'*\'); } });</script>');
  console.log(lines.join('\n'));
});
