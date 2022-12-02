export async function detectTonProvider() {
  if ('ton' in window) {
    return window.ton;
  }
  return null;
}
