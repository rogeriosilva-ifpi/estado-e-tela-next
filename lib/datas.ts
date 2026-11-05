// "1958-03-14" → "14/03/1958". Sem Date: não
// depende de fuso nem de idioma, então o
// servidor e o navegador escrevem o mesmo.
export function dataBr(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}
