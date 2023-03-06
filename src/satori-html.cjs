/**
 * @type {typeof import('satori-html').html}
 */
module.exports.html = async (buffer) => {
    const { html } = await import('satori-html');
    return html(buffer);
  };