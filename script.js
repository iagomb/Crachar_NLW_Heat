
const linksMediaSocial = {
  github: 'iagomb', 
  youtube: 'jackelinygracielly',
  twitter: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'iagomoreiraof1'
}

function changeSociaçMidiaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksMediaSocial[social]}/`
  }
}

changeSociaçMidiaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksMediaSocial.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      alert(userImage.src)
    })
  
}

getGithubProfileInfos()