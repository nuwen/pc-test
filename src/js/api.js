export async function fetchUserAccounts(){
  let url = "https://dev.presscentric.com/test/accounts"
  let response = await fetch(url)
  let data = await response.json();
  return data;
}
