export default function name(transacoes: string, separador: string[0]) {
  const json = JSON.parse(transacoes);
  let i = 1;
  let str = i + separador + "";
  Object.keys(json[0]).map((t) => (str += t + separador));
  str += "\r\n";
  for (const obj of json) {
    let line = ++i + separador;
    Object.values(obj).map((t) => (line += t + separador));
    str += line + "\r\n";
  }
  return str;
}
