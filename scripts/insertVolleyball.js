const stringToInsert = '<script>\n' +
  'window.addEventListener("message", (event) => {\n' +
  '  if (!!window.parent && !!event.data.codeCommand) {\n' +
  '    window.parent.postMessage(event.data, "*");\n' +
  '  }\n' +
  '});\n' +
  '</script>';

let input = '';

// Listen for data events on stdin
process.stdin.on('data', (chunk) => {
  input += chunk;
});

// Listen for the end of the input stream
process.stdin.on('end', () => {
  const lines = input.split('\n');
  lines.splice(lines.length - 4, 0, stringToInsert);
  console.log(lines.join('\n'));
});
