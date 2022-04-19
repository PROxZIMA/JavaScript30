rewireLoggingToElement(
  () => document.getElementById("log"),
  () => document.getElementById("log-container"), true);

function rewireLoggingToElement(eleLocator, eleOverflowLocator, autoScroll) {
  fixLoggingFunc('log');
  fixLoggingFunc('debug');
  fixLoggingFunc('warn');
  fixLoggingFunc('error');
  fixLoggingFunc('info');
  fixLoggingFunc('table');
  fixLoggingFunc('count');
  fixLoggingFunc('assert');

  function fixLoggingFunc(name) {
    console['old' + name] = console[name];
    console[name] = function (...arguments) {
      let output = produceOutput(name, arguments);
      if (name === 'table') {
        const s = arguments[0];
        var cols = [];
        for (var k in s) {
          for (var c in s[k]) {
            if (cols.indexOf(c) === -1) cols.push(c);
          }
        }
        let html = '<table class=tftable><thead><tr>' +
          cols.map(function (c) { return '<th>' + c + '</th>' }).join('') +
          '</tr></thead><tbody>';
        for (var l in s) {
          html += '<tr>' + cols.map(function (c) { return '<td>' + (s[l][c] || '') + '</td>' }).join('') + '</tr>';
        }
        html += '</tbody></table>';
        output = html;
      }
      const eleLog = eleLocator();

      if (autoScroll) {
        const eleContainerLog = eleOverflowLocator();
        const isScrolledToBottom = eleContainerLog.scrollHeight - eleContainerLog.clientHeight <= eleContainerLog.scrollTop + 1;
        eleLog.innerHTML += output + "<br><br>";
        if (isScrolledToBottom) {
          eleContainerLog.scrollTop = eleContainerLog.scrollHeight - eleContainerLog.clientHeight;
        }
      } else {
        eleLog.innerHTML += output + "<br>";
      }

      console['old' + name].apply(undefined, arguments);
    };
  }

  function produceOutput(name, args) {
    return args.reduce((output, arg) => {
      if (typeof arg === 'boolean' && name === 'assert') return output;
      return output +
        "<span class=\"log-" + (typeof arg) + " log-" + name + "\">" +
        (typeof arg === "object" && (JSON || {}).stringify ? JSON.stringify(arg, null, 2) : arg) +
        "</span>&nbsp;";
    }, '');
  }
}
