export async function fetchUserAccounts(){
  let url = "https://dev.presscentric.com/test/accounts"
  let response = await fetch(url)

  let data = await response.json();
  return data;
}

export async function deleteUserAccount(id){
  // let url = "https://dev.presscentric.com/test/accounts/" + id
  // let response = await fetch(url, {
  //   method: "DELETE"
  // })

  // let data = await response.json();
  // return data;

  console.log(id + ' successfully deleted')
}