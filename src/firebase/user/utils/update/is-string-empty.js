/**
 * Checks if string is empty
 *
 * @param {string} string
 */
export default function(string){
  return (string === undefined || string.length === 0) ? null : string;
}