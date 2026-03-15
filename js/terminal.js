
const terminal = document.getElementById("terminal")
const cmd = document.getElementById("cmd")

cmd.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let command = cmd.value
let output = document.createElement("div")

if(command === "about"){
output.textContent = "DevOps Engineer focused on automation and cloud."
}

else if(command === "skills"){
output.textContent = "Linux, Docker, Kubernetes, AWS, Terraform, CI/CD"
}

else if(command === "projects"){
output.textContent = "CI/CD Pipeline, Docker Flask App, Kubernetes Deployment"
}

else{
output.textContent = "Command not found"
}

terminal.appendChild(document.createElement("div")).textContent = "> "+command
terminal.appendChild(output)

cmd.value=""
terminal.scrollTop = terminal.scrollHeight

}

})
